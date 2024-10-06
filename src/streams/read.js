import { createReadStream } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  const filePath = join(__dirname, 'files', 'fileToRead.txt');

  try {
    const readStream = createReadStream(filePath, { encoding: 'utf-8' });

    readStream.on('data', (data) => {
      process.stdout.write(data + `\n`);
    });
  } catch (err) {
    console.error(err.message);
  }
};

await read();