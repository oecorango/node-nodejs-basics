import { spawn } from 'child_process';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const spawnChildProcess = async (args) => {
  const child = spawn('node', [join(__dirname, 'files', 'script.js'), ...args], {
    stdio: ['pipe', 'pipe', 'pipe'],
  });

  process.stdin.pipe(child.stdin);

  child.stdout.pipe(process.stdout);
};

await spawnChildProcess(['1', '2', '33', '55', '88', '180',]);
