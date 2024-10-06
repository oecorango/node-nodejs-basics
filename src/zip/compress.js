import { createGzip } from 'zlib';
import { getStreams } from "./helpers.js";

const compress = async () => {
  try {
    const { readStream, writeStream } = getStreams('compress');
    const gzipStream = createGzip();

    readStream.pipe(gzipStream).pipe(writeStream);

    writeStream.on('finish', () => {
      console.log('File compressed!');
    });
  } catch (err) {
    console.error(err.message);
  }
};

await compress();
