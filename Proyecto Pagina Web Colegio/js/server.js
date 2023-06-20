const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Ruta del archivo solicitado
  const filePath = path.join(__dirname, req.url === '/' ? '../login.html' : req.url);

  // Obtener la extensión del archivo
  const extname = path.extname(filePath);

  // Tipo de contenido por defecto
  let contentType = 'text/html';

  // Verificar la extensión del archivo y establecer el tipo de contenido correspondiente
  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
  }

  // Leer el archivo
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // Archivo no encontrado
        fs.readFile(path.join(__dirname, '404.html'), (err, errorContent) => {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end(errorContent, 'utf8');
        });
      } else {
        // Error del servidor
        res.writeHead(500);
        res.end('Error interno del servidor');
      }
    } else {
      // Archivo encontrado
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf8');
    }
  });
});

const port = 3000; // Puerto en el que se ejecutará el servidor
server.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
