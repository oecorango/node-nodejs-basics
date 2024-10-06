import { createWriteStream } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { pipeline } from 'stream/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
  const filePath = join(__dirname, 'files', 'fileToWrite.txt');

  try {
    const writeStream = createWriteStream(filePath, { encoding: 'utf-8' });

    console.log('Enter text. Exit - CTRL-D / CTRL+C');

    await pipeline(process.stdin, writeStream);

    console.log('\nWrite complete.');
  } catch (err) {
    console.error(err.message);
  }
};

await write();