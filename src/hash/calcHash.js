import { createReadStream } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url';
import { createHash } from 'crypto';

const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

const calculateHash = async () => {
  const filePath = join(__dirname, 'files', 'fileToCalculateHashFor.txt');

  const res = await new Promise((resolve, reject) => {
    const fileStream = createReadStream(filePath);
    const hash = createHash('sha256');

    fileStream.on('data', (chunk) => {
      hash.update(chunk);
    });

    fileStream.on('end', () => {
      const result = hash.digest('hex');
      resolve(result);
    });

    fileStream.on('error', (err) => {
      reject(err);
    });
  });

  console.log(`SHA256 hash: ${res}`);
};

await calculateHash();