import fs from "node:fs/promises";
import path from "node:path";

const sourceDir = "/Users/madrid/Desktop/工厂素材";
const outputDir = path.join(process.cwd(), "public/images/factory-optimized");
const widths = [480, 768, 1200, 1600];
const accepted = new Set([".jpg", ".jpeg", ".png", ".webp", ".heic"]);

const seoNames = [
  "growcean-lighting-export-packaging",
  "growcean-lighting-shipment-loading",
  "growcean-lighting-qc-inspection",
  "growcean-led-ceiling-light-assembly-check",
  "growcean-lighting-application-display",
  "growcean-decorative-lighting-showroom",
  "growcean-balcony-lighting-application",
  "growcean-decorative-pendant-light-display",
  "growcean-lighting-showroom-wall",
  "growcean-ceiling-light-product-display",
  "growcean-lighting-sample-showroom",
];

async function main() {
  const loadSharp = eval("require") as (name: string) => unknown;
  const sharp = loadSharp("sharp") as (input: string) => {
    resize(options: { width: number; withoutEnlargement: boolean }): {
      webp(options: { quality: number }): { toFile(output: string): Promise<void> };
    };
  };
  await fs.mkdir(outputDir, { recursive: true });
  const files = (await fs.readdir(sourceDir))
    .filter((file) => accepted.has(path.extname(file).toLowerCase()))
    .sort();

  await Promise.all(files.map(async (file, index) => {
    const input = path.join(sourceDir, file);
    const base = seoNames[index] ?? `growcean-factory-material-${String(index + 1).padStart(2, "0")}`;

    await Promise.all(widths.map((width) =>
      sharp(input)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 82 })
        .toFile(path.join(outputDir, `${base}-${width}.webp`)),
    ));

    await sharp(input)
      .resize({ width: 24, withoutEnlargement: true })
      .webp({ quality: 35 })
      .toFile(path.join(outputDir, `${base}-blur.webp`));
  }));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
