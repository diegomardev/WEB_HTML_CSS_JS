const http = require('http');
const fs = require('fs');
http.createServer(router).listen(3000);
/*
Si se quiere usar import hay que añadir package.json
en el mismo directorio con
{
    "type": "module"
}
*/
function router(req, res){
  console.log('Nueva peticion!');
  console.log(req.url);
  switch(req.url){
    case '/home':
      fs.readFile('./Home/home.html', 'utf8', (err, data) => {
        if (err) {
          res.writeHead(404, {'Content-Type': 'text/plain'});
          res.write('Error 404: Archivo no encontrado');
          res.end();
        } else {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data);
          res.end();
        }
      });
      break;
    case '/reloj':
      fs.readFile('./Reloj/reloj.html', 'utf8', (err, data) => {
        if (err) {
          res.writeHead(404, {'Content-Type': 'text/plain'});
          res.write('Error 404: Archivo no encontrado');
          res.end();
        } else {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data);
          res.end();
        }
      });
      break;
    case '/youtube':
      fs.readFile('./Youtube/youtube.html', 'utf8', (err, data) => {
        if (err) {
          res.writeHead(404, {'Content-Type': 'text/plain'});
          res.write('Error 404: Archivo no encontrado');
          res.end();
        } else {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data);
          res.end();
        }
      });
      break;
    case '/calculadora':
      fs.readFile('./Calculadora/calculadora.html', 'utf8', (err, data) => {
        if (err) {
          res.writeHead(404, {'Content-Type': 'text/plain'});
          res.write('Error 404: Archivo no encontrado');
          res.end();
        } else {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data);
          res.end();
        }
      });
      break;
    case '/hover':
      fs.readFile('./Hover/hover.html', 'utf8', (err, data) => {
        if (err) {
          res.writeHead(404, {'Content-Type': 'text/plain'});
          res.write('Error 404: Archivo no 55 encontrado');
          res.end();
        } else {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data);
          res.end();
        }
      });
      break;   
    case '/Dark/dark':
      fs.readFile('./Dark/dark.html', 'utf8', (err, data) => {
        if (err) {
          res.writeHead(404, {'Content-Type': 'text/plain'});
          res.write('Error 404: Archivo no 55 encontrado');
          res.end();
        } else {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data);
          res.end();
        }
      });
    break;
    case '/games':
      fs.readFile('./Games/games.html', 'utf8', (err, data) => {
        if (err) {
          res.writeHead(404, {'Content-Type': 'text/plain'});
          res.write('Error 404: Archivo no 55 encontrado');
          res.end();
        } else {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data);
          res.end();
        }
      });
    break;
    case '/games/pong':
      fs.readFile('./Games/Pong/pong.html', 'utf8', (err, data) => {
        if (err) {
          res.writeHead(404, {'Content-Type': 'text/plain'});
          res.write('Error 404: Archivo no 55 encontrado');
          res.end();
        } else {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data);
          res.end();
        }
      });
    break;
    case '/games/snake':
      fs.readFile('./Games/Snake/snake.html', 'utf8', (err, data) => {
        if (err) {
          res.writeHead(404, {'Content-Type': 'text/plain'});
          res.write('Error 404: Archivo no 55 encontrado');
          res.end();
        } else {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data);
          res.end();
        }
      });
    break;
    case '/Home/home.js':
      fs.readFile('./Home/home.js', (err, data) => {
        if (err) {
          res.writeHead(404, {'Content-Type': 'text/plain'});
          res.write('Error 404: Archivo no encontrado');
          res.end();
        } else {
          res.writeHead(200, {'Content-Type': 'text/javascript'});
          res.write(data);
          res.end();
        }
      });
    break;
    case '/script_hora.js':
      fs.readFile('http_script.js', (err, data) => {
        if (err) {
          res.writeHead(404, {'Content-Type': 'text/plain'});
          res.write('Error 404: Archivo no encontrado');
          res.end();
        } else {
          res.writeHead(200, {'Content-Type': 'text/javascript'});
          res.write(data);
          res.end();
        }
      });
    break;
    case '/Reloj/reloj.js':
      // Servir el archivo JavaScript del reloj
      fs.readFile('./Reloj/reloj.js', (err, data) => {
        if (err) {
          res.writeHead(404, {'Content-Type': 'text/plain'});
          res.write('Error 404: Archivo no encontrado');
          res.end();
        } else {
          res.writeHead(200, {'Content-Type': 'text/javascript'});
          res.write(data);
          res.end();
        }
      });
    break;
    case '/Dark/dark.js':
      // Servir el archivo JavaScript del reloj
      fs.readFile('./Dark/dark.js', (err, data) => {
        if (err) {
          res.writeHead(404, {'Content-Type': 'text/plain'});
          res.write('Error 404: Archivo no encontrado');
          res.end();
        } else {
          res.writeHead(200, {'Content-Type': 'text/javascript'});
          res.write(data);
          res.end();
        }
      });
    break;
    case '/Calculadora/js/main.js':
      // Servir el archivo JavaScript del reloj
      fs.readFile('./Calculadora/js/main.js', (err, data) => {
        if (err) {
          res.writeHead(404, {'Content-Type': 'text/plain'});
          res.write('Error 404: Archivo no encontrado');
          res.end();
        } else {
          res.writeHead(200, {'Content-Type': 'text/javascript'});
          res.write(data);
          res.end();
        }
      });
    break;
    case '/Games/Pong/pong.js':
      // Servir el archivo JavaScript del reloj
      fs.readFile('./Games/Pong/pong.js', (err, data) => {
        if (err) {
          res.writeHead(404, {'Content-Type': 'text/plain'});
          res.write('Error 404: Archivo no encontrado');
          res.end();
        } else {
          res.writeHead(200, {'Content-Type': 'text/javascript'});
          res.write(data);
          res.end();
        }
      });
    break;
    case '/Games/Snake/snake.js':
      // Servir el archivo JavaScript del reloj
      fs.readFile('./Games/Snake/snake.js', (err, data) => {
        if (err) {
          res.writeHead(404, {'Content-Type': 'text/plain'});
          res.write('Error 404: Archivo no encontrado');
          res.end();
        } else {
          res.writeHead(200, {'Content-Type': 'text/javascript'});
          res.write(data);
          res.end();
        }
      });
    break;
    case '/Reloj/reloj.css':
        // Servir el archivo JavaScript del reloj
        fs.readFile('./Reloj/reloj.css', (err, data) => {
          if (err) {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.write('Error 404: Archivo no encontrado');
            res.end();
          } else {
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(data);
            res.end();
          }
        });
    break;
    case '/Hover/hover.css':
        // Servir el archivo JavaScript del reloj
        fs.readFile('./Hover/hover.css', (err, data) => {
          if (err) {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.write('Error 404: Archivo no encontrado');
            res.end();
          } else {
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(data);
            res.end();
          }
        });
    break;
    case '/Dark/dark.css':
        // Servir el archivo JavaScript del reloj
        fs.readFile('./Dark/dark.css', (err, data) => {
          if (err) {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.write('Error 404: Archivo no encontrado');
            res.end();
          } else {
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(data);
            res.end();
          }
        });
    break;
    case '/Youtube/youtube.css':
        // Servir el archivo JavaScript del reloj
        fs.readFile('./Youtube/youtube.css', (err, data) => {
          if (err) {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.write('Error 404: Archivo no encontrado');
            res.end();
          } else {
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(data);
            res.end();
          }
        });
    break;
    case '/Calculadora/css/style.css':
        // Servir el archivo JavaScript del reloj
        fs.readFile('./Calculadora/css/style.css', (err, data) => {
          if (err) {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.write('Error 404: Archivo no encontrado');
            res.end();
          } else {
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(data);
            res.end();
          }
        });
    break;
    case '/Games/Pong/pong.css':
        // Servir el archivo JavaScript del reloj
        fs.readFile('./Games/Pong/pong.css', (err, data) => {
          if (err) {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.write('Error 404: Archivo no encontrado');
            res.end();
          } else {
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(data);
            res.end();
          }
        });
    break;
    case '/Games/Snake/snake.css':
      // Servir el archivo JavaScript del reloj
      fs.readFile('./Games/Snake/snake.css', (err, data) => {
        if (err) {
          res.writeHead(404, {'Content-Type': 'text/plain'});
          res.write('Error 404: Archivo no encontrado');
          res.end();
        } else {
          res.writeHead(200, {'Content-Type': 'text/css'});
          res.write(data);
          res.end();
        }
      });
    break;
    case '/images/favicon.png':
        // Servir el archivo JavaScript del reloj
        fs.readFile('./images/favicon.png', (err, data) => {
          if (err) {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.write('Error 404: Archivo no encontrado');
            res.end();
          } else {
            res.writeHead(200, {'Content-Type': 'image/png'});
            res.write(data);
            res.end();
          }
        });
    break;
    case '/Games/Snake/apple.png':
      // Servir el archivo JavaScript del reloj
      fs.readFile('./Games/Snake/apple.png', (err, data) => {
        if (err) {
          res.writeHead(404, {'Content-Type': 'text/plain'});
          res.write('Error 404: Archivo no encontrado');
          res.end();
        } else {
          res.writeHead(200, {'Content-Type': 'image/png'});
          res.write(data);
          res.end();
        }
      });
    break;
    case '/Games/Snake/head.png':
      // Servir el archivo JavaScript del reloj
      fs.readFile('./Games/Snake/head.png', (err, data) => {
        if (err) {
          res.writeHead(404, {'Content-Type': 'text/plain'});
          res.write('Error 404: Archivo no encontrado');
          res.end();
        } else {
          res.writeHead(200, {'Content-Type': 'image/png'});
          res.write(data);
          res.end();
        }
      });
    break;
    case '/Games/Snake/tail.png':
      // Servir el archivo JavaScript del reloj
      fs.readFile('./Games/Snake/tail.png', (err, data) => {
        if (err) {
          res.writeHead(404, {'Content-Type': 'text/plain'});
          res.write('Error 404: Archivo no encontrado');
          res.end();
        } else {
          res.writeHead(200, {'Content-Type': 'image/png'});
          res.write(data);
          res.end();
        }
      });
    break;
    default:
      res.write('Error 404: No se lo que quieres');
      res.end();
  }
}
console.log('Escuchando http en el puerto 3000');