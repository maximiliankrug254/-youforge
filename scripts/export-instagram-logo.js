const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const src = "public/branding/logos/final/youforge-yf-master-hires.png";
const outDir = "public/branding/logos/final";

async function paddedSquare(canvasSize, contentRatio, filename) {
  const meta = await sharp(src).metadata();
  const contentSize = Math.round(canvasSize * contentRatio);
  const resized = await sharp(src)
    .resize(contentSize, contentSize, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 1 },
      kernel: sharp.kernel.lanczos3,
    })
    .png()
    .toBuffer();

  const out = path.join(outDir, filename);
  await sharp({
    create: {
      width: canvasSize,
      height: canvasSize,
      channels: 3,
      background: { r: 0, g: 0, b: 0 },
    },
  })
    .composite([{ input: resized, gravity: "centre" }])
    .png({ compressionLevel: 6 })
    .toFile(out);

  console.log(
    `wrote ${filename} (${canvasSize}px, logo ~${Math.round(contentRatio * 100)}%)`
  );
}

async function main() {
  if (!fs.existsSync(src)) {
    throw new Error(`Missing source: ${src}`);
  }

  // Main upload: lots of black margin for free Instagram crop/zoom
  await paddedSquare(1080, 0.52, "youforge-instagram-1080.png");
  await paddedSquare(2160, 0.52, "youforge-instagram-2160.png");

  // Extra-loose option if you want even more margin
  await paddedSquare(1080, 0.40, "youforge-instagram-1080-extra-margin.png");
  await paddedSquare(2160, 0.40, "youforge-instagram-2160-extra-margin.png");

  // Previews
  await paddedSquare(640, 0.52, "youforge-instagram-circle-preview-640.png");
  await paddedSquare(320, 0.52, "youforge-instagram-320.png");
  await paddedSquare(180, 0.52, "youforge-instagram-180.png");
  await paddedSquare(64, 0.52, "youforge-instagram-64.png");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
