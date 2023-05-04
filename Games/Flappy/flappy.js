// Obtener el canvas y el contexto 2D
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// Variables para la posición y velocidad de la ave
var birdX = 50;
var birdY = canvas.height / 2;
var birdVY = 0;
var jumpAmount = 10;

// Variables para los tubos
var pipeX = canvas.width;
var pipeGap = 200;
var pipeWidth = 50;
var pipeSpeed = 5;
var pipePairs = [];
var maxPipes = 4; // Número máximo de tubos generados

// Variable para controlar el juego y el nivel
var gameRunning = false;
var puntuacion = 0;
let conteo_para_nuevo_tubo = 0;
let conteo_para_subir_nivel = 0;

// Obtener los botones
var startButton = document.getElementById('startButton');
var restartButton = document.getElementById('restartButton');

// Añadir manejadores de eventos a los botones
startButton.addEventListener('click', function () {
  startGame();
});

restartButton.addEventListener('click', function () {
  startGame();
});

// Llamada a la función getScores al cargar la página
window.addEventListener("load", showScores);

//Funcion para iniciar el juego
function startGame() {
  gameRunning = true;
  startButton.disabled = true;
  restartButton.disabled = false;
  birdX = 50;
  birdY = canvas.height / 4;
  birdVY = 0;
  conteo_para_nuevo_tubo = 0;
  conteo_para_subir_nivel = 0;
  pipePairs = [];
  spawnPipes();
  puntuacion = 0;
  this.disabled = true;
  update();
}

// Función para dibujar el ave
function drawBird() {
  ctx.beginPath();
  ctx.arc(birdX, birdY, 20, 0, 2 * Math.PI);
  ctx.fillStyle = "#1aa";
  ctx.fill();
  ctx.closePath();
}

// Función para actualizar la posición del ave
function updateBird() {
  birdVY += 0.5;
  birdY += birdVY;
}

// Función para hacer que el ave salte
function makeBirdJump() {
  birdVY = -jumpAmount; 
}

// Función para dibujar un tubo
function drawPipe(x, y, height) {
  ctx.fillStyle = "#909090";
  ctx.fillRect(x, y, pipeWidth, height);
}

// Función para generar nuevos tubos
function spawnPipes(){
  var pipeHeight = Math.floor(Math.random() * 200) + 50;
  var topPipe = { x: pipeX, y: 0, height: pipeHeight };
  var bottomPipe = {
    x: pipeX,
    y: pipeHeight + pipeGap,
    height: canvas.height - (pipeHeight + pipeGap),
  };
  pipePairs.push({ top: topPipe, bottom: bottomPipe });
}

// Función para actualizar la posición de los tubos
function updatePipes() {
  for (var i = 0; i < pipePairs.length; i++) {
    var topPipe = pipePairs[i].top;
    var bottomPipe = pipePairs[i].bottom;
    topPipe.x -= pipeSpeed;
    bottomPipe.x -= pipeSpeed;
    if (topPipe.x + pipeWidth < 0) {
      pipePairs.splice(i, 1);
      i--;
    }
  }
  if (pipePairs.length < 3 && pipeX < canvas.width - pipeGap - pipeWidth) {
    spawnPipes();
  }
  // Limite de tubos generados
  if (pipePairs.length < maxPipes) {
    if (conteo_para_nuevo_tubo > 100-(puntuacion*2)) { // Ajuste de tiempo
      spawnPipes();
      conteo_para_nuevo_tubo = 0;
    } else {
      conteo_para_nuevo_tubo++;
      conteo_para_subir_nivel++;
    }
  }
  // Mostramos el nivel en el canvas
  ctx.font = "30px Roboto";
  ctx.fillStyle = "#c57fff";
  ctx.fillText("Level: " + puntuacion, 10, 50);
  //lo mostramos por encima de todo
  ctx.globalCompositeOperation = "destination-over";
}

// Función para dibujar los tubos
function drawPipes() {
  for (var i = 0; i < pipePairs.length; i++) {
    var topPipe = pipePairs[i].top;
    var bottomPipe = pipePairs[i].bottom;
    drawPipe(topPipe.x, topPipe.y, topPipe.height);
    drawPipe(bottomPipe.x, bottomPipe.y, bottomPipe.height);
  }
}

// Función para detectar colisiones
function checkCollisions() {
  // Colisión con los bordes del canvas
  if (birdY < 0 || birdY > canvas.height) {
    gameRunning = false;
    restartButton.disabled = false;
    saveScore();
  }
  // Colisión con los tubos
  for (var i = 0; i < pipePairs.length; i++) {
    var topPipe = pipePairs[i].top;
    var bottomPipe = pipePairs[i].bottom;
    if (birdX + 20 > topPipe.x && birdX - 20 < topPipe.x + pipeWidth) {
      if (birdY - 20 < topPipe.height || birdY + 20 > topPipe.height + pipeGap) {
        gameRunning = false;
        restartButton.disabled = false;
        saveScore();
      }
    }
  }
}
//Función para guardar los datos en el json
function saveScore() {
  let nombre = prompt("Introduce tu nombre");
  let datos = {
    nombre,
    puntuacion,
  };
  // Send a POST request to the server endpoint to save the data to a JSON file
  fetch('/save_game_flappy', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  })
  .then(response => {
      // Handle the server response here (if needed)
      console.log(response);
  })
  .catch(error => {
      // Handle any errors here
      console.error(error);
  });
  showScores();
}

//Funcion para mostrar puntuaciones totales
//Intentamos hacer 3 veces el fetch de los datos del json
async function getScores(tries = 3) {
  try {
    let response = await fetch('./flappy/puntuaciones.json');
    let scores = await response.json();
    return scores;
  } catch (err) {
    if (tries > 0) {
      // Intenta la solicitud de nuevo con un retraso de 1 segundo
      await new Promise(resolve => setTimeout(resolve, 1000));
      return getScores(tries - 1);
    } else {
      throw new Error('No se pudo obtener la lista de puntuaciones');
    }
  }
}
async function showScores() {
  let scores = await getScores();
  scores.sort((a, b) => b.puntuacion - a.puntuacion);
  //console.log(scores);
  let scoreTable = document.getElementById("score-table"); // Obtener la tabla
  scoreTable.innerHTML = ""; // Limpiar la tabla

  let headerRow = document.createElement("tr");  // Creamos una fila de encabezado
  headerRow.innerHTML = "<th>Position</th><th>Name</th><th>Score</th>"; // agregamos el encabezado de la tabla
  //headerRow.classList.add("rwd-table"); // Agregamos la clase CSS "rwd-table"
  scoreTable.appendChild(headerRow);  // Añadimos la fila completa a la tabla
//  max_puntuacion.innerText=scores[1].puntuacion;
//  localStorage.setItem('max_puntuacion', scores[1].puntuacion);
  for (let i = 1; i < 11 && i < scores.length; i++) {
      let score = scores[i];
      let tableRow = document.createElement("tr"); // Creamos una fila para cada puntuación
      let positionCell = document.createElement("td"); // Creamos una celda para la posición
      positionCell.innerText = (i)+"º";
      let nameCell = document.createElement("td"); // Creamos una celda para el nombre
      nameCell.innerText = score.nombre;
      let scoreCell = document.createElement("td"); // Creamos una celda para la puntuación
      scoreCell.innerText = score.puntuacion;

      tableRow.appendChild(positionCell); // Añadimos ambas celdas a la fila
      tableRow.appendChild(nameCell); // Añadimos ambas celdas a la fila
      tableRow.appendChild(scoreCell);
      scoreTable.appendChild(tableRow); // Añadimos la fila completa a la tabla
  }
}


// Función para subir de nivel
function subir_nivel(){
    //si pasa entre los tubos, subir de nivel
    for (var i = 0; i < pipePairs.length; i++) {
        var topPipe = pipePairs[i].top;
        if (birdX + 20 > topPipe.x && birdX - 20 < topPipe.x + pipeWidth && conteo_para_subir_nivel > 50) {
            puntuacion++;
            conteo_para_subir_nivel = 0;
        }
    }
}
// Función para actualizar el juego
function update() {
  // Limpiar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Actualizar la posición del ave
  updateBird();

  // Dibujar el ave
  drawBird();

  // Actualizar la posición de los tubos y mostrar el nivel
  updatePipes();

  // Dibujar los tubos
  drawPipes();

  // Detectar colisiones
  checkCollisions();

  // Subir nivel
  subir_nivel();

  // Si el juego sigue en marcha, repetir la actualización
  if (gameRunning) {
    window.requestAnimationFrame(update);
  }
}

// Manejador de eventos de clic para hacer que el ave salte
window.addEventListener("mousedown", function () {
  makeBirdJump();
});

window.addEventListener("click", function () {
  if (!gameRunning) {
    startGame();
  }
});

// Manejador de eventos de teclado para hacer que el ave salte
window.addEventListener("keydown", e => {
    //si pulsamos la letra up, saltamos
    if ([38].indexOf(e.keyCode)!=-1) {
        makeBirdJump();
    }
    //si pulsamos la letra r, reiniciamos la partida
    if ([82].indexOf(e.keyCode)!=-1) {
      startGame();
    }
});

// Iniciar el juego
//spawnPipes();
//update();