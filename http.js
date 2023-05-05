const http = require('http');
const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.static('public'));
app.use(express.json());
let direccion_web ="http://diegomar.duckdns.org:3000"
app.get('/home', (req, res) => {
  fs.readFile('./Home/home.html', 'utf8', (err, data) => {
    if (err) {
      res.status(404).send('Error 404: Archivo no encontrado');
    } else {
      res.status(200).send(data);
    }
  });
});

app.get('/reloj', (req, res) => {
  fs.readFile('./Reloj/reloj.html', 'utf8', (err, data) => {
    if (err) {
      res.status(404).send('Error 404: Archivo no encontrado');
    } else {
      res.status(200).send(data);
    }
  });
});

app.get('/youtube', (req, res) => {
  fs.readFile('./Youtube/youtube.html', 'utf8', (err, data) => {
    if (err) {
      res.status(404).send('Error 404: Archivo no encontrado');
    } else {
      res.status(200).send(data);
    }
  });
});

app.get('/calculadora', (req, res) => {
  fs.readFile('./Calculadora/calculadora.html', 'utf8', (err, data) => {
    if (err) {
      res.status(404).send('Error 404: Archivo no encontrado');
    } else {
      res.status(200).send(data);
    }
  });
});

app.get('/hover', (req, res) => {
  fs.readFile('./Hover/hover.html', 'utf8', (err, data) => {
    if (err) {
      res.status(404).send('Error 404: Archivo no encontrado');
    } else {
      res.status(200).send(data);
    }
  });
});

app.get('/Dark/dark', (req, res) => {
  fs.readFile('./Dark/dark.html', 'utf8', (err, data) => {
    if (err) {
      res.status(404).send('Error 404: Archivo no encontrado');
    } else {
      res.status(200).send(data);
    }
  });
});

app.get('/games', (req, res) => {
  fs.readFile('./Games/games.html', 'utf8', (err, data) => {
    if (err) {
      res.status(404).send('Error 404: Archivo no encontrado');
    } else {
      res.status(200).send(data);
    }
  });
});

app.get('/games/pong', (req, res) => {
  fs.readFile('./Games/Pong/pong.html', 'utf8', (err, data) => {
    if (err) {
      res.status(404).send('Error 404: Archivo no encontrado');
    } else {
      res.status(200).send(data);
    }
  });
});

app.get('/games/snake', (req, res) => {
  fs.readFile('./Games/Snake/snake.html', 'utf8', (err, data) => {
    if (err) {
      res.status(404).send('Error 404: Archivo no encontrado');
    } else {
      res.status(200).send(data);
    }
  });
});
app.get('/games/flappy', (req, res) => {
  fs.readFile('./Games/Flappy/flappy.html', 'utf8', (err, data) => {
    if (err) {
      res.status(404).send('Error 404: Archivo no encontrado');
    } else {
      res.status(200).send(data);
    }
  });
});
app.get('/Home/home.js', (req, res) => {
  fs.readFile('./Home/home.js', (err, data) => {
    if (err) {
      res.status(404).send('Error 404: Archivo no encontrado');
    } else {
      res.status(200).type('text/javascript').send(data);
    }
  });
});

app.get('/script_hora.js', (req, res) => {
  fs.readFile('http_script.js', (err, data) => {
    if (err) {
      res.status(404).send('Error 404: Archivo no encontrado');
    } else {
      res.status(200).type('text/javascript').send(data);
    }
  });
});

app.get('/Reloj/reloj.js', (req, res) => {
  fs.readFile('./Reloj/reloj.js', (err, data) => {
    if (err) {
      res.status(404).send('Error 404: Archivo no encontrado');
    } else {
      res.status(200).type('text/javascript').send(data);
    }
  });
});

app.get('/Dark/dark.js', (req, res) => {
  fs.readFile('./Dark/dark.js', (err, data) => {
    if (err) {
      res.status(404).send('Error 404: Archivo no encontrado');
    } else {
      res.status(200).type('text/javascript').send(data);
    }
  });
});

app.get('/Calculadora/js/main.js', (req, res) => {
  fs.readFile('./Calculadora/js/main.js', (err, data) => {
    if (err) {
      res.status(404).send('Error 404: Archivo no encontrado');
    } else {
      res.status(200).type('text/javascript').send(data);
    }
  });
});

app.get('/Games/Pong/pong.js', (req, res) => {
  fs.readFile('./Games/Pong/pong.js', (err, data) => {
    if (err) {
      res.status(404).send('Error 404: Archivo no encontrado');
    } else {
      res.status(200).type('text/javascript').send(data);
    }
  });
});

app.get('/Games/Snake/snake.js', (req, res) => {
  fs.readFile('./Games/Snake/snake.js', (err, data) => {
    if (err) {
      res.status(404).send('Error 404: Archivo no encontrado');
    } else {
      res.status(200).type('text/javascript').send(data);
    }
  });
});

app.get('/Games/Flappy/flappy.js', (req, res) => {
  fs.readFile('./Games/Flappy/flappy.js', (err, data) => {
    if (err) {
      res.status(404).send('Error 404: Archivo no encontrado');
    } else {
      res.status(200).type('text/javascript').send(data);
    }
  });
});

app.get('/Reloj/reloj.css', (req, res) => {
  fs.readFile('./Reloj/reloj.css', (err, data) => {
    if (err) {
      res.status(404).send('Error 404: Archivo no encontrado');
    } else {
      res.status(200).type('text/css').send(data);
    }
  });
});

app.get('/Home/home.css', (req, res) => {
  fs.readFile('./Home/home.css', (err, data) => {
    if (err) {
      res.status(404).send('Error 404: Archivo no encontrado');
    } else {
      res.status(200).type('text/css').send(data);
    }
  });
});

app.get('/Games/games.css', (req, res) => {
  fs.readFile('./Games/games.css', (err, data) => {
    if (err) {
      res.status(404).send('Error 404: Archivo no encontrado');
    } else {
      res.status(200).type('text/css').send(data);
    }
  });
});

app.get('/Hover/hover.css', (req, res) => {
  fs.readFile('./Hover/hover.css', (err, data) => {
    if (err) {
      res.status(404).send('Error 404: Archivo no encontrado');
    } else {
      res.status(200).type('text/css').send(data);
    }
  });
});

app.get('/Dark/dark.css', (req, res) => {
  fs.readFile('./Dark/dark.css', (err, data) => {
    if (err) {
      res.status(404).send('Error 404: Archivo no encontrado');
    } else {
      res.status(200).type('text/css').send(data);
    }
  });
});

app.get('/Youtube/youtube.css', (req, res) => {
  fs.readFile('./Youtube/youtube.css', (err, data) => {
    if (err) {
      res.status(404).send('Error 404: Archivo no encontrado');
    } else {
      res.status(200).type('text/css').send(data);
    }
  });
});

app.get('/Calculadora/css/style.css', (req, res) => {
  fs.readFile('./Calculadora/css/style.css', (err, data) => {
    if (err) {
      res.status(404).send('Error 404: Archivo no encontrado');
    } else {
      res.status(200).type('text/css').send(data);
    }
  });
});

app.get('/Games/Pong/pong.css', (req, res) => {
  fs.readFile('./Games/Pong/pong.css', (err, data) => {
    if (err) {
      res.status(404).send('Error 404: Archivo no encontrado');
    } else {
      res.status(200).type('text/css').send(data);
    }
  });
});

app.get('/Games/Snake/snake.css', (req, res) => {
  fs.readFile('./Games/Snake/snake.css', (err, data) => {
    if (err) {
      res.status(404).send('Error 404: Archivo no encontrado');
    } else {
      res.status(200).type('text/css').send(data);
    }
  });
});

app.get('/Games/Flappy/flappy.css', (req, res) => {
  fs.readFile('./Games/Flappy/flappy.css', (err, data) => {
    if (err) {
      res.status(404).send('Error 404: Archivo no encontrado');
    } else {
      res.status(200).type('text/css').send(data);
    }
  });
});

app.get('/images/favicon.png', (req, res) => {
  fs.readFile('./images/favicon.png', (err, data) => {
    if (err) {
      res.status(404).send('Error 404: Archivo no encontrado');
    } else {
      res.status(200).type('image/png').send(data);
    }
  });
});

app.get('/Games/Snake/apple.png', (req, res) => {
  fs.readFile('./Games/Snake/apple.png', (err, data) => {
    if (err) {
      res.status(404).send('Error 404: Archivo no encontrado');
    } else {
      res.status(200).type('image/png').send(data);
    }
  });
});

app.get('/Games/Snake/head.png', (req, res) => {
  fs.readFile('./Games/Snake/head.png', (err, data) => {
    if (err) {
      res.status(404).send('Error 404: Archivo no encontrado');
    } else {
      res.status(200).type('image/png').send(data);
    }
  });
});

app.get('/Games/Snake/tail.png', (req, res) => {
  fs.readFile('./Games/Snake/tail.png', (err, data) => {
    if (err) {
      res.status(404).send('Error 404: Archivo no encontrado');
    } else {
      res.status(200).type('image/png').send(data);
    }
  });
});

app.get('/games/snake/puntuaciones.json', (req, res) => {
  fs.readFile('./Games/Snake/puntuaciones.json', (err, data) => {
    if (err) {
      res.status(404).send('Error 404: Archivo no encontrado');
    } else {
      res.status(200).type('application/json').send(data);
    }
  });
});

app.post('/save_game_snake', (req, res) => {
  const datos = req.body;
  console.log(datos); // Verifica los datos recibidos

  const archivo = './Games/Snake/puntuaciones.json';
  let puntuaciones = [];

  try {
    // Intentamos leer el archivo de puntuaciones existente
    const contenido = fs.readFileSync(archivo, 'utf-8');
    puntuaciones = JSON.parse(contenido);

    // Buscamos si el nombre ya existe y si la nueva puntuación es mayor
    const index = puntuaciones.findIndex(item => item.nombre === datos.nombre);

    //si el nombre existe pasamos la nueva puntuacion de string a number
    if (index !== -1){
      datos.puntuacion=parseInt(datos.puntuacion);
      puntuaciones[index].puntuacion=parseInt(puntuaciones[index].puntuacion);
    }

    // Si el nombre existe y la nueva puntuación es mayor, actualizamos la entrada existente
    if ((index !== -1) && (datos.puntuacion >= puntuaciones[index].puntuacion)) {
      puntuaciones[index].puntuacion = datos.puntuacion;
      puntuaciones[index].nivel = datos.nivel;
      console.log('Actualizamos la entrada existente');
    }
    // Si el nombre existe pero la nueva puntuación es menor o igual, no hacemos nada.
    if (index !== -1 && datos.puntuacion <= puntuaciones[index].puntuacion) {
      console.log('No se hace nada');
    }
    // Si el nombre no existe, agregamos una nueva entrada al arreglo
    else{
      puntuaciones.push(datos);
      console.log('Agregamos una nueva entrada');
    }

    // Escribimos los datos actualizados en el archivo
    //fs.writeFileSync(archivo, JSON.stringify(puntuaciones));
    fs.writeFileSync(archivo, JSON.stringify(puntuaciones, null, 2));
    // Devolvemos una respuesta al cliente
    res.send({ mensaje: 'Puntuación guardada con éxito' });
  } catch (error) {
    console.log(error);
    // Si hay un error, enviamos una respuesta al cliente con un mensaje de error
    res.status(500).send({ mensaje: 'Ocurrió un error al guardar la puntuación' });
  }
});

app.get('/games/flappy/puntuaciones.json', (req, res) => {
  fs.readFile('./Games/Flappy/puntuaciones.json', (err, data) => {
    if (err) {
      res.status(404).send('Error 404: Archivo no encontrado');
    } else {
      res.status(200).type('application/json').send(data);
    }
  });
});

app.post('/save_game_flappy', (req, res) => {
  const datos = req.body;
  console.log(datos); // Verifica los datos recibidos

  const archivo = './Games/Flappy/puntuaciones.json';
  let puntuaciones = [];

  try {
    // Intentamos leer el archivo de puntuaciones existente
    const contenido = fs.readFileSync(archivo, 'utf-8');
    puntuaciones = JSON.parse(contenido);

    // Buscamos si el nombre ya existe y si la nueva puntuación es mayor
    const index = puntuaciones.findIndex(item => item.nombre === datos.nombre);

    //si el nombre existe pasamos la nueva puntuacion de string a number
    if (index !== -1){
      datos.puntuacion=parseInt(datos.puntuacion);
      puntuaciones[index].puntuacion=parseInt(puntuaciones[index].puntuacion);
    }

    // Si el nombre existe y la nueva puntuación es mayor, actualizamos la entrada existente
    if ((index !== -1) && (datos.puntuacion >= puntuaciones[index].puntuacion)) {
      puntuaciones[index].puntuacion = datos.puntuacion;
      console.log('Actualizamos la entrada existente');
    }
    // Si el nombre existe pero la nueva puntuación es menor o igual, no hacemos nada.
    if (index !== -1 && datos.puntuacion <= puntuaciones[index].puntuacion) {
      console.log('No se hace nada');
    }
    // Si el nombre no existe, agregamos una nueva entrada al arreglo
    else{
      puntuaciones.push(datos);
      console.log('Agregamos una nueva entrada');
    }

    // Escribimos los datos actualizados en el archivo
    //fs.writeFileSync(archivo, JSON.stringify(puntuaciones));
    fs.writeFileSync(archivo, JSON.stringify(puntuaciones, null, 2));
    // Devolvemos una respuesta al cliente
    res.send({ mensaje: 'Puntuación guardada con éxito' });
  } catch (error) {
    console.log(error);
    // Si hay un error, enviamos una respuesta al cliente con un mensaje de error
    res.status(500).send({ mensaje: 'Ocurrió un error al guardar la puntuación' });
  }
});

const server = http.createServer(app);

server.listen(3000, () => {
  console.log('Escuchando http en el puerto 3000');
});