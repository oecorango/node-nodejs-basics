import path from 'path';
import { cpus } from 'os';
import { Worker } from 'worker_threads';
import { fileURLToPath } from 'url';

const FIRST_VALUE = 10;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const numCpus = cpus().length;

const performCalculations = async () => {
  const results = [];
  const workers = [];

  const createWorker = (num, index) => {
    return new Promise((resolve) => {
      const worker = new Worker(path.resolve(__dirname, 'worker.js'));

      worker.postMessage(num);

      worker.on('message', (data) => {
        results[index] = { status: 'resolved', data };
        worker.terminate();

        resolve();
      });

      worker.on('error', () => {
        results[index] = { status: 'error', data: null };
        worker.terminate();

        resolve();
      });
    });
  };

  for (let i = 0; i < numCpus; i++) {
    workers.push(createWorker(FIRST_VALUE + i, i));
  }

  await Promise.all(workers);

  console.log(results);
};

await performCalculations();
