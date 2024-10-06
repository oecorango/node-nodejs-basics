import { createReadStream, createWriteStream } from "fs";
import { archivePath, filePath } from "./constants.js";

/**
 * A function that returns Read and Write Streams depending on the key
 * @param { string } key - 'compress' | 'decompress'
 * @returns {{ readStream: ReadStream, writeStream: WriteStream }}
 */

export const getStreams = (key) => {
  return {
    readStream: createReadStream(key === 'compress' ?  filePath : archivePath),
    writeStream: createWriteStream(key === 'compress' ? archivePath : filePath),
  };
};