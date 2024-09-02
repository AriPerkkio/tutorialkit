import { readFileSync } from 'node:fs';
import { createServer } from 'node:http';

createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(readFileSync('./index.html'));
}).listen(1);
