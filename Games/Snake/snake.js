console.log(localStorage.getItem('max_puntuacion'))
if(localStorage.getItem('max_puntuacion')==null){
    localStorage.setItem('max_puntuacion', 0);
}
max_puntuacion.innerText=localStorage.getItem('max_puntuacion');
let apples_puntuacion=0;

async function getScores() {
    let response = await fetch('./snake/puntuaciones.json');
    let scores = await response.json();
    return scores;
}
async function showScores() {
    let scores = await getScores();
    scores.sort((a, b) => b.puntuacion - a.puntuacion);
    console.log(scores);
    let scoreTable = document.getElementById("score-table"); // Obtener la tabla
    scoreTable.innerHTML = ""; // Limpiar la tabla

    let headerRow = document.createElement("tr");  // Creamos una fila de encabezado
    headerRow.innerHTML = "<th>Position</th><th>Name</th><th>Score</th>"; // agregamos el encabezado de la tabla
    //headerRow.classList.add("rwd-table"); // Agregamos la clase CSS "rwd-table"
    scoreTable.appendChild(headerRow);  // Añadimos la fila completa a la tabla

    for (let i = 0; i < 10 && i < scores.length; i++) {
        let score = scores[i];
        let tableRow = document.createElement("tr"); // Creamos una fila para cada puntuación
        let positionCell = document.createElement("td"); // Creamos una celda para la posición
        positionCell.innerText = (i + 1)+"º";
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
// Llamada a la función getScores al cargar la página
window.addEventListener("load", showScores);
//
//localStorage.setItem('max_puntuacion', 0);
(function(){
    const board=document.getElementById("board");
    let h=board.clientWidth/2;
    let v=board.clientHeight/2;
    let speed=300;
    let process=undefined;
    let apple=[];
    let direction="L"; // set direction Up, Down, Left, Right
    let snake=[];

    //funcion de start
    function start(){
        let apples=document.getElementById("apples");
        apples.innerText="0";
        let level=document.getElementById("level");
        level.innerText="1";
        apples_puntuacion=0;
        board.classList.remove("fail");
        removeDivs(board);
        removeps(board);
        speed=100;
        direction="L"; // set direction Up, Down, Left, Right
        // definimos los tres primeros elementos de la serpiente
        snake=[[h, v], [h+10, v], [h+20, v]];
        board.insertBefore(createDiv([h, v]), null);
        board.insertBefore(createDiv([h+10, v]), null);
        board.insertBefore(createDiv([h+20, v]), null);

        apple=setApple(snake); // set position of apple [h,v]
        process=setInterval(movement, speed);
        buttonPause.disabled=false;
        buttonStart.disabled=true;
        buttonPause.textContent="Pause";
    }
    window.addEventListener("keydown", e => {
        if (process!=undefined && [37, 38, 39, 40].indexOf(e.keyCode)!=-1) {
            let newDirection;
            //si pulsamos las flechas hacia arriba, abajo, izquierda o derecha, cambiamos la direccion de la serpiente, si no, no hace nada
            //si la direccion que queremos cambiar es la misma que la que ya tenemos, no hace nada, si no, cambiamos la direccion de la serpiente
            newDirection={38:"U", 40:"D", 39:"R", 37:"L"}[e.keyCode];
            if (
                (newDirection=="U" && direction!="D") ||
                (newDirection=="D" && direction!="U") ||
                (newDirection=="R" && direction!="L") ||
                (newDirection=="L" && direction!="R")
            ) {
                direction=newDirection;
            }
        }
        //Si pulsamos espacio, pausamos la partida como si pulsaramos el boton de pausa y si el boton de pausa esta activo, continuamos la partida
        if ([32].indexOf(e.keyCode)!=-1) {
            if (process!=undefined && buttonPause.textContent=="Pause") {
                process = clearInterval(process);
                buttonPause.textContent="Continue";
                buttonStart.textContent="Restart";
                buttonStart.disabled=false;
            } else if(buttonPause.textContent=="Continue"){
                process=setInterval(movement, speed);
                buttonStart.disabled=true;
                buttonPause.textContent="Pause";
            }
        }
        //si pulsamos la letra r, reiniciamos la partida
        if ([82].indexOf(e.keyCode)!=-1) {
            if (process!=undefined) {
                process = clearInterval(process);
            }
            start();
        }
    });

    const buttonStart = document.getElementById("Start");
    const buttonPause = document.getElementById("Pause");
    //cuando pulsamos el boton de start, llamamos a la funcion start
    buttonStart.addEventListener("click", () => {
        start();
    });

    //despues de pulsar el boton de pausa quiero se se quite el focus sobre el boton de pausa
    buttonPause.addEventListener("click", () => {
        if (buttonPause.textContent=="Pause") {
            process = clearInterval(process);
            buttonPause.textContent="Continue";
            buttonStart.textContent="Restart";
            buttonStart.disabled=false;
            buttonPause.blur();
        } else if(buttonPause.textContent=="Continue"){
            process=setInterval(movement, speed);
            buttonStart.disabled=true;
            buttonPause.textContent="Pause";
            buttonPause.blur();
        }
    });

    /**
     * Funcion que se ejecuta cada n milisegundos
     */
    function movement() {
        // obtenemos la nueva posicion de la cabeza de la serpiente
        const newPosition=getNextPosition(direction, snake[0]);

        // comprobamos si nos hemos comido la manzana
        if (checkNewPositionIsApple(newPosition, apple)) {
            board.insertBefore(createDiv(apple), board.querySelectorAll("div")[0]);
            //board.insertBefore(createDiv(max_puntuacion), board.querySelectorAll("div")[0]);
            snake.unshift(apple);
            setTail(snake[snake.length-1], snake[snake.length-2]);
            setHead(snake[0], snake[1]);
            apple=setApple(snake); // set position of apple [h,v]
            if (speed > 50) {
                process=clearInterval(process);
                speed=Math.round(speed/1.02);
                process=setInterval(movement, speed);
            }
            let apples=document.getElementById("apples");
            apples.innerText=parseInt(apples.innerText)+1;
            apples_puntuacion++;
            //cada 5 puntos subimos de nivel
            if(apples_puntuacion%5==0){
                let level=document.getElementById("level");
                level.innerText=parseInt(level.innerText)+1;
            }

            if(apples_puntuacion>localStorage.getItem('max_puntuacion')){
                localStorage.setItem('max_puntuacion', apples.innerText);
            }
            let max_puntuacion=document.getElementById("max_puntuacion");
            max_puntuacion.innerText=localStorage.getItem('max_puntuacion');
            return;
        }

        // comprobamos que no nos pisemos la cola
        if (checkOverTail(newPosition, snake)) {
            end();
            //con las siguientes lineas no se muestra press R para reiniciar
            //snake=snakeRedraw(newPosition, snake);
            //setTail(snake[snake.length-1], snake[snake.length-2]);
            return;
        }

        // movemos la serpiente
        const last=snake.pop();
        snake=snakeRedraw(newPosition, snake);

        // comprobamos que no nos hayamos pasado de los margenes
        if (checkNewPositionIsOutside(newPosition)) {
            end();
            return;
        }
    }

    /**
     * Funcion que se ejecuta cuando finaliza el juego
     */
    function end() {
        showScores();
        process = clearInterval(process);
        board.classList.add("fail");
        buttonPause.disabled = true;
        buttonStart.disabled = false;
        buttonStart.textContent="Restart";
    
        const gameOverText = document.createElement("p");
        gameOverText.textContent = "Game Over 💩";
        gameOverText.classList.add("game-over");
        board.appendChild(gameOverText);

        const gameOverRestart = document.createElement("p");
        gameOverRestart.textContent = "Press 'R' to restart";
        gameOverRestart.classList.add("game-over_restart");
        board.appendChild(gameOverRestart);

        console.log("hola");
        //guardamos la puntuacion

        let nombre = prompt("Introduce tu nombre");
        let puntuacion = document.getElementById("apples").innerText;
        let nivel = document.getElementById("level").innerText;
        let max_puntuacion = document.getElementById("max_puntuacion").innerText;
        //let tiempo = document.getElementById("time").innerText;
        let datos = {
            nombre,
            puntuacion,
            nivel,
            //tiempo
          };
          console.log(datos);
          console.log("hola");
        // Send a POST request to the server endpoint to save the data to a JSON file
        fetch('/guardar-puntuacion', {
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

    /**
     * Funcion que elimina el ultimo div y añade un div nuevo al inicio
     * 
     * @param array newPosition con la nueva posicion para el nuevo div
     * @param array snake - array de la serpiente
     * @return array - new arraw of snake
     */
    function snakeRedraw(newPosition, snake) {
        board.lastElementChild.remove();
        board.insertBefore(createDiv(newPosition), board.querySelector("div"));
        snake.unshift(newPosition);
        setTail(snake[snake.length-1], snake[snake.length-2]);
        setHead(snake[0], snake[1]);
        return snake;
    }

    /**
     * Funcion que determina la dirección de la cola
     *
     * @param array last - posicion [h,v] del ultimo elemento
     * @param array antepenultimate - posicion [h,v] del penultimo elemento
     */
    function setTail(last, antepenultimate) {
        const lastDiv=board.querySelectorAll("div")[board.querySelectorAll("div").length-1];
        lastDiv.classList.remove("right", "up", "down");
        if (antepenultimate[0]>last[0]) { // dirección derecha
            lastDiv.classList.add("right");
        } else if (antepenultimate[1]>last[1]) { // direccion subida
            lastDiv.classList.add("up");
        } else if (antepenultimate[1]<last[1]) { // direccion bajada
            lastDiv.classList.add("down");
        }
    }

    /**
     * Funcion que determina la dirección de la cabeza
     *
     * @param array first - posicion [h,v] del primer elemento
     * @param array second - posicion [h,v] del segundo elemento
     */
    function setHead(first, second) {
        const firstDiv=board.querySelectorAll("div")[0];
        firstDiv.classList.remove("right", "up", "down");
        if (second[0]<first[0]) { // dirección derecha
            firstDiv.classList.add("right");
        } else if (second[1]<first[1]) { // direccion subida
            firstDiv.classList.add("up");
        } else if (second[1]>first[1]) { // direccion bajada
            firstDiv.classList.add("down");
        }
    }

    /**
     * Funcion que crear un nuevo div en una posicion determinada
     *
     * @param position array - con la posicion de nuevo div [h,v]
     * @return object devuelve el nuevo div creado
     */
    function createDiv(position) {
        let newDiv=document.createElement("div");
        newDiv.style.left=position[0]+"px";
        newDiv.style.top=position[1]+"px";
        return newDiv;
    }

    /**
     * Funcion que devuelve la nueva posicion del primer elemento
     *
     * @param string direccion actual (Up, Down, Left, Right)
     * @param array con la posicion del primer elemento de la serpiete [h,v]
     * @return array con las nueva posicion [h,v]
     */
    function getNextPosition(direction, position) {
        if (direction=="U") {
            return [position[0], position[1]-10];
        } else if (direction=="D") {
            return [position[0], position[1]+10];
        } else if (direction=="R") {
            return [position[0]+10, position[1]];
        } else if (direction=="L") {
            return [position[0]-10, position[1]];
        }
    }

    /**
     * Funcion que comprueba que la nueva posición no se salga del tablero
     *
     * @return boolean
     */
    function checkNewPositionIsOutside(newPosition) {
        return newPosition[0]<0 ||
            newPosition[1]<0 ||
            newPosition[0]+10>board.clientHeight ||
            newPosition[1]+10>board.clientWidth;
    }

    /**
     * Funcion para verificar si la posicion recibida esta encima de la serpiente
     * 
     * @param array - [h, v]
     * @param array - [[h, v], [h, v], ...]
     * @return boolean
     */
    function checkOverTail(position, snake) {
        return snake.find(el => el[0]==position[0] && el[1]==position[1])!=undefined;
    }

    /**
     * Funcion que compara la nueva posicion de la serpiente con la posicion de la manzana
     *
     * @param array - [h, v]
     * @param array - [h, v]
     * @return boolean
     */
    function checkNewPositionIsApple(newPosition, applePosition) {
        return newPosition.every((value, index) => value === applePosition[index]);
    }

    /**
     * Funcion que posiciona la manzana en el tablero y devuelve su posicion
     *
     * @param array snake - con las posiciones de la serpiente
     * @return array - posicion de manzada [h,v]
     */
    function setApple(snake) {
        let h,v;
        while (1) {
            h=Math.round(Math.random()*(board.clientWidth-10)/10)*10;
            v=Math.round(Math.random()*(board.clientWidth-10)/10)*10;
            if (snake.indexOf([h, v])==-1) {
                break;
            }
        }
        board.querySelector("span").style.left=h+"px";
        board.querySelector("span").style.top=v+"px";
        return [h,v];
    }

    /**
     * Function que elimina todos los divs dentro del elemento
     * 
     * @param object - elemento a eliminar los divs de su interior
     * @return int - la cantidad de elementos eliminados
     */
    function removeDivs(element) {
        return [...element.querySelectorAll("div")].map(el => el.remove()).length;
    }
    function removeps(element) {
        return [...element.querySelectorAll("p")].map(el => el.remove()).length;
    }
})();