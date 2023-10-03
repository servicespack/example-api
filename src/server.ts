import { createServer } from 'node:http';

const server = createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write('Hello World!');
  response.end();
});

export { server }
