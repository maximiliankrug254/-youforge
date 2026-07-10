const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const slidesDir = "public/branding/instagram/posts/post-01-pinned/slides";
const exportDir = "public/branding/instagram/posts/post-01-pinned/export";

async function main() {
  fs.mkdirSync(exportDir, { recursive: true });

  const slides = fs
    .readdirSync(slidesDir)
    .filter((f) => f.endsWith(".svg"))
    .sort();

  for (const file of slides) {
    const input = path.join(slidesDir, file);
    const base = file.replace(".svg", "");
    const out = path.join(exportDir, `${base}.png`);

    await sharp(input, { density: 200 })
      .resize(1080, 1350, { fit: "fill" })
      .png({ compressionLevel: 6 })
      .toFile(out);

    console.log("wrote", out);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
