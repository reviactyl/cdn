import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir: string = "./_content";
const outputDir: string = "./content";

function convertDir(dir: string): void {
    const files: string[] = fs.readdirSync(dir);

    for (const file of files) {
        const fullPath: string = path.join(dir, file);
        const stat: fs.Stats = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            convertDir(fullPath);
        } else if (file.endsWith(".png")) {
            const relative: string = path.relative(inputDir, fullPath);
            const outPath: string = path.join(
                outputDir,
                relative.replace(/\.png$/i, ".webp")
            );

            fs.mkdirSync(path.dirname(outPath), { recursive: true });

            sharp(fullPath)
                .webp({ quality: 80 })
                .toFile(outPath)
                .then(() => {
                    console.log("Converted:", outPath);
                })
                .catch((err: Error) => {
                    console.error("Error converting", fullPath, err);
                });
        }
    }
}

convertDir(inputDir);