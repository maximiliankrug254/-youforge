import { PLATTFORMEN, STUFEN, VERSION, escapeHtml as e, katLabels } from "./lib.mjs";
import { note } from "./pruefungen.mjs";

let KATEGORIEN = katLabels();
const TYP_LABEL = { rechtstext: "Rechtstext · nicht gewertet", versteckt: "Verborgen · nicht gewertet" };

const ICON = { ok: "✓", warnung: "!", fehler: "✕", info: "i" };
const STATUS_LABEL = { ok: "Bestanden", warnung: "Verbesserbar", fehler: "Fehlt", info: "Hinweis" };

const AUSSERHALB = [
  ["Google-Unternehmensprofil", "Vollständig ausgefüllt: Kategorie, Leistungen, Öffnungszeiten, Fotos, Einsatzgebiet. Größter Hebel für „Maler in …“-Suchen."],
  ["Bewertungen", "Aktiv nach Bewertungen fragen (Bewertungs-Link per QR-Code/WhatsApp) und jede Bewertung beantworten."],
  ["Gleiche Daten überall", "Name, Adresse, Telefon exakt gleich auf Website, Google-Profil und Branchenverzeichnissen."],
  ["Branchenverzeichnisse", "Einträge bei Gelbe Seiten, Das Örtliche, Handwerkskammer, Innungen."],
  ["Search Console", "Website bei Google Search Console anmelden, Sitemap einreichen, Platzierungen monatlich prüfen."],
];

const pathOf = (url) => {
  const u = new URL(url);
  return `${u.host}${u.pathname === "/" ? "" : u.pathname}`;
};
const sek = (ms) => (ms == null ? "–" : `${(ms / 1000).toFixed(1).replace(".", ",")} s`);
const mb = (b) => (b >= 1024 * 1024 ? `${(b / 1024 / 1024).toFixed(1).replace(".", ",")} MB` : `${Math.round(b / 1024)} KB`);
const tone = (s) => (s >= 90 ? "top" : s >= 75 ? "gut" : s >= 50 ? "mittel" : "schwach");

function ring(score, size = "gross") {
  return `<div class="ring ring-${size} t-${tone(score)}" style="--p:${score}"><span>${score}</span></div>`;
}

function kategorieBalken(score) {
  return Object.entries(KATEGORIEN)
    .filter(([k]) => score.kategorien[k] != null)
    .map(
      ([k, label]) => `
      <div class="bar">
        <div class="bar-head"><span>${label}</span><strong>${score.kategorien[k]}</strong></div>
        <div class="bar-track"><div class="bar-fill t-${tone(score.kategorien[k])}" style="width:${score.kategorien[k]}%"></div></div>
      </div>`,
    )
    .join("");
}

function checkZeile(c) {
  return `
    <li class="check s-${c.status}">
      <span class="icon">${ICON[c.status]}</span>
      <div class="check-body">
        <div class="check-head">
          <strong>${e(c.titel)}</strong>
          <span class="tag tag-${c.stufe}">${STUFEN[c.stufe].label}</span>
          <span class="status">${STATUS_LABEL[c.status]}</span>
        </div>
        <p class="detail">${e(c.detail)}</p>
        ${c.fix && c.status !== "ok" && c.status !== "info" ? `<p class="fix"><b>So beheben:</b> ${e(c.fix)}</p>` : ""}
      </div>
    </li>`;
}

function analyseBlock(a, index, offen) {
  if (!a.page.ok) {
    return `<section class="card"><h2>${e(pathOf(a.page.url))}</h2><p class="detail">Nicht erreichbar: ${e(a.page.error)}</p></section>`;
  }
  const gruppen = Object.entries(KATEGORIEN)
    .map(([k, label]) => {
      const list = a.results.filter((c) => c.kategorie === k);
      if (!list.length) return "";
      return `<h3>${label}</h3><ul class="checks">${list.map(checkZeile).join("")}</ul>`;
    })
    .join("");

  const top = a.massnahmen.length
    ? `<ol class="todo">${a.massnahmen
        .map((c) => `<li><strong>${e(c.titel)}</strong> <span class="tag tag-${c.stufe}">${STUFEN[c.stufe].label}</span><br><span>${e(c.fix || c.detail)}</span></li>`)
        .join("")}</ol>`
    : `<p class="detail">Keine offenen Maßnahmen – stark.</p>`;

  const typ = TYP_LABEL[a.einordnung?.typ];
  return `
  <details class="card seite${typ ? " nebenbei" : ""}" ${offen ? "open" : ""}>
    <summary>
      ${ring(a.score.gesamt, "klein")}
      <div><strong>${e(pathOf(a.page.finalUrl || a.page.url))}</strong><br><span class="muted">${e(a.page.title || "ohne Titel")}</span></div>
      ${typ ? `<span class="typ">${typ}</span>` : ""}
      <span class="note t-${tone(a.score.gesamt)}">${note(a.score.gesamt)}</span>
    </summary>
    ${typ ? `<p class="detail typ-hinweis">${e(a.einordnung.grund)}</p>` : ""}
    <div class="overview">
      <div class="overview-score">
        ${ring(a.score.gesamt)}
        <p class="note-text">${note(a.score.gesamt)}</p>
        <div class="bars">${kategorieBalken(a.score)}</div>
        <dl class="facts">
          <div><dt>Ladezeit (LCP)</dt><dd>${sek(a.page.lcp)}</dd></div>
          <div><dt>Datenmenge</dt><dd>${mb(a.page.bytes)}</dd></div>
          <div><dt>Wörter</dt><dd>${(a.page.text.match(/[A-Za-zÄÖÜäöüß0-9]{2,}/g) || []).length}</dd></div>
          <div><dt>Gemessen</dt><dd>${e(a.page.netz)}</dd></div>
          <div><dt>Plattform</dt><dd>${e(PLATTFORMEN[a.page.plattform] || PLATTFORMEN.unbekannt)}</dd></div>
        </dl>
      </div>
      <div class="overview-todo">
        <h3>Die wichtigsten Maßnahmen</h3>
        ${top}
      </div>
      ${a.page.screenshot ? `<figure class="phone"><img alt="Handy-Ansicht ${e(pathOf(a.page.url))}" src="data:image/jpeg;base64,${a.page.screenshot}"></figure>` : ""}
    </div>
    <div class="alle">${gruppen}</div>
  </details>`;
}

function vergleichTabelle(analysen, titel) {
  const ok = analysen.filter((a) => a.page.ok);
  if (ok.length < 2) return "";
  const best = Math.max(...ok.map((a) => a.score.gesamt));
  const schemaZelle = (a) => {
    const status = a.results.find((c) => c.id === "schema")?.status;
    return status === "ok" ? "✓" : status ? "✕" : `<span class="muted">–</span>`;
  };
  const rows = [
    ["Gesamt", (a) => `<b class="${a.score.gesamt === best ? "best" : ""}">${a.score.gesamt}</b>`],
    ...Object.entries(KATEGORIEN).map(([k, label]) => [label, (a) => a.score.kategorien[k] ?? "–"]),
    ["Ladezeit (LCP)", (a) => sek(a.page.lcp)],
    ["Datenmenge", (a) => mb(a.page.bytes)],
    ["Firmeneintrag für Google", schemaZelle],
    ["Plattform", (a) => e(PLATTFORMEN[a.page.plattform] || PLATTFORMEN.unbekannt)],
    ["Offene Maßnahmen", (a) => a.results.filter((c) => c.status === "fehler" || c.status === "warnung").length],
  ];
  if (ok.some((a) => a.einordnung && !a.einordnung.gewertet)) {
    rows.splice(1, 0, ["Zählt zur Gesamtnote", (a) => (a.einordnung?.gewertet === false ? `<span class="muted">nein</span>` : "ja")]);
  }
  return `
  <section class="card">
    <h2>${titel}</h2>
    <div class="table-wrap"><table>
      <thead><tr><th></th>${ok.map((a) => `<th>${e(pathOf(a.page.finalUrl || a.page.url))}</th>`).join("")}</tr></thead>
      <tbody>${rows.map(([label, fn]) => `<tr><th>${label}</th>${ok.map((a) => `<td>${fn(a)}</td>`).join("")}</tr>`).join("")}</tbody>
    </table></div>
  </section>`;
}

function websiteBlock(website) {
  if (!website) return "";
  return `
  <section class="card">
    <h2>Gesamte Website · ${website.seiten} Seiten</h2>
    ${website.gewertet != null && website.gewertet < website.seiten ? `<p class="detail">Die Gesamtnote beruht auf ${website.gewertet} Seiten. Rechtstexte und bewusst verborgene Seiten zählen nicht mit.</p>` : ""}
    ${website.uebersprungen?.anzahl ? `<p class="detail">${website.uebersprungen.anzahl} weitere Seiten in verborgenen Bereichen (/${website.uebersprungen.bereiche.map(e).join(", /")}) wurden nicht einzeln geprüft.</p>` : ""}
    <div class="overview-score inline">${ring(website.score.gesamt)}<div class="bars">${kategorieBalken(website.score)}</div></div>
    <ul class="checks">${website.results.map(checkZeile).join("")}</ul>
  </section>`;
}

export function renderHtml(report) {
  const { analysen, website, opts, erstellt, modus } = report;
  KATEGORIEN = katLabels(opts);
  const kopf = modus === "vergleich" ? `${analysen.length} Websites im Vergleich` : e(pathOf(analysen[0].page.url));
  const kontext = [
    opts.keyword && `Suchbegriff: „${e(opts.keyword)}“`,
    opts.ort && `${opts.ueberregional ? "Einsatzgebiet" : "Ort"}: ${e(opts.ort)}`,
    opts.ueberregional && "überregional bewertet",
    opts.ignoriereNoindex && "Demo-Modus: noindex ignoriert",
  ]
    .filter(Boolean)
    .join(" · ");

  return `<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>SEO-Bericht · ${kopf}</title>
<style>
:root{--ink:#1c1916;--muted:#5e5a55;--line:#e7e2da;--paper:#faf8f4;--card:#fff;--accent:#0d8f7a;--top:#0d8f7a;--gut:#4f9d3a;--mittel:#d08a12;--schwach:#c2412d;}
*{box-sizing:border-box}
body{margin:0;background:var(--paper);color:var(--ink);font:16px/1.55 "Segoe UI",system-ui,-apple-system,sans-serif}
.wrap{max-width:1180px;margin:0 auto;padding:40px 24px 64px}
.eyebrow{font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--accent);font-weight:700}
h1{font:600 40px/1.15 Georgia,"Times New Roman",serif;margin:6px 0 8px}
h2{font:600 24px/1.2 Georgia,serif;margin:0 0 16px}
h3{font-size:14px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);margin:26px 0 10px}
.muted,.detail{color:var(--muted)}
.lede{color:var(--muted);margin:0 0 28px}
.card{background:var(--card);border:1px solid var(--line);border-radius:18px;padding:24px;margin:0 0 20px;box-shadow:0 1px 2px rgba(0,0,0,.03)}
.seite>summary{display:flex;align-items:center;gap:16px;cursor:pointer;list-style:none}
.seite>summary::-webkit-details-marker{display:none}
.seite>summary .note{margin-left:auto}
.seite>summary .typ{margin-left:auto;font-size:12px;font-weight:700;color:var(--muted);background:#f1efe9;padding:4px 10px;border-radius:999px}
.seite>summary .typ+.note{margin-left:0}
.nebenbei{opacity:.85}
.typ-hinweis{margin:12px 0 0}
.note{font-size:13px;font-weight:700;padding:4px 10px;border-radius:999px;background:#f1efe9}
.overview{display:grid;grid-template-columns:260px 1fr 220px;gap:28px;margin-top:22px;align-items:start}
.overview-score{display:flex;flex-direction:column;align-items:center;gap:10px}
.overview-score.inline{flex-direction:row;align-items:center;gap:28px;margin-bottom:12px}
.note-text{margin:0;font-weight:700}
.ring{--c:var(--accent);width:150px;aspect-ratio:1;border-radius:50%;display:grid;place-items:center;background:conic-gradient(var(--c) calc(var(--p)*1%),#eee9e1 0)}
.ring span{width:78%;aspect-ratio:1;border-radius:50%;background:#fff;display:grid;place-items:center;font:600 44px Georgia,serif}
.ring-klein{width:52px}.ring-klein span{font-size:17px;font-family:inherit;font-weight:700}
.t-top{--c:var(--top);color:var(--top)}.t-gut{--c:var(--gut);color:var(--gut)}.t-mittel{--c:var(--mittel);color:var(--mittel)}.t-schwach{--c:var(--schwach);color:var(--schwach)}
.ring span{color:var(--ink)}
.bars{width:100%;display:grid;gap:10px}
.bar-head{display:flex;justify-content:space-between;font-size:14px}
.bar-track{height:8px;border-radius:99px;background:#eee9e1;overflow:hidden}
.bar-fill{height:100%;border-radius:99px;background:var(--c)}
.facts{display:grid;grid-template-columns:1fr 1fr;gap:10px;width:100%;margin:8px 0 0}
.facts div{background:var(--paper);border-radius:10px;padding:8px 10px}
.facts dt{font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:.06em}
.facts dd{margin:0;font-weight:700;font-size:14px}
.overview-todo h3{margin-top:0}
.todo{margin:0;padding-left:20px;display:grid;gap:12px}
.todo span{color:var(--muted);font-size:14px}
.phone{margin:0;border:8px solid #1c1916;border-radius:28px;overflow:hidden;aspect-ratio:390/844;background:#000}
.phone img{width:100%;display:block}
.checks{list-style:none;margin:0;padding:0;display:grid;gap:8px}
.check{display:flex;gap:12px;padding:12px 14px;border-radius:12px;background:var(--paper)}
.icon{flex:0 0 26px;height:26px;border-radius:50%;display:grid;place-items:center;font-weight:800;font-size:13px;color:#fff}
.s-ok .icon{background:var(--top)}.s-warnung .icon{background:var(--mittel)}.s-fehler .icon{background:var(--schwach)}.s-info .icon{background:#9a948b}
.check-body{flex:1;min-width:0}
.check-head{display:flex;flex-wrap:wrap;gap:8px;align-items:center}
.status{margin-left:auto;font-size:12px;color:var(--muted)}
.detail,.fix{margin:4px 0 0;font-size:14px}
.fix{color:var(--ink)}
.tag{font-size:11px;font-weight:700;padding:2px 8px;border-radius:99px;text-transform:uppercase;letter-spacing:.05em}
.tag-kritisch{background:#fbe4df;color:#9b2c1c}.tag-wichtig{background:#fdf0d8;color:#8a5a06}.tag-tipp{background:#e3f1ee;color:#0a6b5c}
.table-wrap{overflow-x:auto}
table{border-collapse:collapse;width:100%;font-size:15px}
th,td{padding:10px 12px;border-bottom:1px solid var(--line);text-align:left}
thead th{font-size:13px;color:var(--muted);font-weight:600}
tbody th{font-weight:600}
.best{color:var(--top)}
.aussen li{margin:0 0 10px}
footer{color:var(--muted);font-size:13px;margin-top:28px}
@media (max-width:900px){.overview{grid-template-columns:1fr}.phone{max-width:240px;margin:0 auto}}
@media print{body{background:#fff}.card{break-inside:avoid;box-shadow:none}details{display:block}}
</style>
</head>
<body>
<div class="wrap">
  <div class="eyebrow">YouForge · SEO-Modul</div>
  <h1>SEO-Bericht</h1>
  <p class="lede">${kopf} · ${e(erstellt)}${kontext ? ` · ${kontext}` : ""}</p>
  ${websiteBlock(website)}
  ${vergleichTabelle(analysen, modus === "website" ? "Alle Seiten im Überblick" : "Vergleich")}
  ${analysen.map((a, i) => analyseBlock(a, i, i === 0)).join("")}
  <section class="card aussen">
    <h2>Außerhalb der Website</h2>
    <p class="detail">Das misst kein Tool – entscheidet aber stark über die Platzierung bei Google. Checkliste für den Betrieb:</p>
    <ul>${AUSSERHALB.map(([t, d]) => `<li><strong>${t}:</strong> ${d}</li>`).join("")}</ul>
  </section>
  <footer>Erstellt mit dem YouForge-SEO-Modul ${VERSION}. Bewertet werden Technik, Inhalte und lokale Angaben der Website. Platzierungen bei Google hängen zusätzlich von Unternehmensprofil, Bewertungen und Wettbewerb ab.</footer>
</div>
</body>
</html>`;
}

export function renderMarkdown(report) {
  KATEGORIEN = katLabels(report.opts);
  const lines = ["# SEO-Bericht", "", `Erstellt: ${report.erstellt} · YouForge-SEO-Modul ${VERSION}`, ""];
  if (report.opts.keyword) lines.push(`Suchbegriff: ${report.opts.keyword}`);
  if (report.opts.ort) lines.push(`${report.opts.ueberregional ? "Einsatzgebiet" : "Ort"}: ${report.opts.ort}${report.opts.ueberregional ? " (überregional bewertet)" : ""}`);
  if (report.website) {
    const basis = report.website.gewertet != null && report.website.gewertet < report.website.seiten ? `, davon ${report.website.gewertet} gewertet` : "";
    lines.push("", `## Gesamte Website (${report.website.seiten} Seiten${basis}): ${report.website.score.gesamt}/100`, "");
    for (const c of report.website.results) lines.push(`- [${c.status}] ${c.titel}: ${c.detail}`);
  }
  for (const a of report.analysen) {
    lines.push("", `## ${a.page.url}`, "");
    if (!a.page.ok) {
      lines.push(`Nicht erreichbar: ${a.page.error}`);
      continue;
    }
    const kat = Object.entries(a.score.kategorien)
      .map(([k, v]) => `${KATEGORIEN[k]} ${v}`)
      .join(" · ");
    const typ = TYP_LABEL[a.einordnung?.typ];
    lines.push(
      `**${a.score.gesamt}/100 (${note(a.score.gesamt)})** · ${kat} · Plattform: ${PLATTFORMEN[a.page.plattform] || PLATTFORMEN.unbekannt}${typ ? ` · ${typ}` : ""}`,
      "",
      "| Status | Stufe | Prüfung | Befund | So beheben |",
      "|---|---|---|---|---|",
    );
    for (const c of a.results.filter((x) => x.status !== "ok")) {
      lines.push(`| ${c.status} | ${c.stufe} | ${c.titel} | ${c.detail.replace(/\|/g, "/")} | ${(c.fix || "").replace(/\|/g, "/")} |`);
    }
  }
  return `${lines.join("\n")}\n`;
}
