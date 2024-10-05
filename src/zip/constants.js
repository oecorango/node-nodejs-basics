import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const filePath = join(__dirname, 'files', 'fileToCompress.txt');
export const archivePath = join(__dirname, 'files', 'archive.gz');
