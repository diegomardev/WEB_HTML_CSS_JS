// Agrega un elemento <h2> con un id "hora"
const horadigital = document.createElement('h2');
horadigital.id = 'hora';
document.body.appendChild(horadigital);

function hora() {
const date = new Date();
const hora = date.getHours();
const minutos = date.getMinutes();
const segundos = date.getSeconds();
const horaFormateada = `${hora < 10 ? '0' : ''}${hora}:${minutos < 10 ? '0' : ''}${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;

// Actualiza el contenido del elemento <h2>
document.getElementById('hora').textContent = `${horaFormateada}`;
}
function goToHomePage() {
  window.location.href = '/home';
}


const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

hora();
setInterval(hora, 1000);

setDate();
setInterval(setDate, 1000);
