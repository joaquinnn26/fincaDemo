import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join, dirname, basename, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const files = [
  'app/layout.tsx',
  'app/trail-running/page.tsx',
  'components/MainPage.tsx',
  'data/experiences.ts',
  'data/gallery.ts',
];

const imagePattern = /\/images\/[^'"`}]+/g;

for (const relativeFile of files) {
  const filePath = join(root, relativeFile);
  let source = readFileSync(filePath, 'utf8');
  let changed = false;

  source = source.replace(imagePattern, (imagePath) => {
    if (imagePath.startsWith('/images/optimized/') || imagePath.endsWith('/icon.svg')) {
      return imagePath;
    }

    const publicRelative = imagePath.replace('/images/', '');
    const ext = extname(publicRelative);

    if (!ext) {
      return imagePath;
    }

    const optimizedRelative = join(
      'optimized',
      dirname(publicRelative) === '.' ? '' : dirname(publicRelative),
      `${basename(publicRelative, ext)}.jpg`,
    ).replaceAll('\\', '/');

    const optimizedDiskPath = join(root, 'public', 'images', optimizedRelative);

    if (!existsSync(optimizedDiskPath)) {
      return imagePath;
    }

    changed = true;
    return `/images/${optimizedRelative}`;
  });

  if (changed) {
    writeFileSync(filePath, source);
    console.log(`Updated ${relativeFile}`);
  }
}
