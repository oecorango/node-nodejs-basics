import { createGunzip } from 'zlib';
import { getStreams } from "./helpers.js";

const decompress = async () => {
  try {
    const gunzip = createGunzip();
    const { readStream, writeStream } = getStreams('decompress');

    readStream.pipe(gunzip).pipe(writeStream);

    writeStream.on('finish', () => {
      console.log('File decompressed!');
    });

    writeStream.on('error', (err) => {
      console.error(err.message);
    });
  } catch (err) {
    console.error(err.message);
  }
};

await decompress();