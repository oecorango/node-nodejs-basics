import { Transform } from 'stream';
import { pipeline } from 'stream/promises';

const reverseText = new Transform({
  transform(chunk, _, callback) {
    const reversedChunk = chunk.toString().split('').reverse().join('');

    callback(null, reversedChunk);
  }
});

const transform = async () => {
  try {
    console.log('Enter your transform text. Exit - CTRL+D');

    await pipeline(process.stdin, reverseText, process.stdout);

    console.log('\nTransforming text complete');
  } catch (err) {
    console.error(err.message);
  }
};

await transform();
