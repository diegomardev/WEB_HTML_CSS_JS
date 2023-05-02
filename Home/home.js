function obtenerNavegador() {
  console.log(navigator.userAgent);
  console.log(navigator.appVersion);
  console.log(navigator.platform);
  console.log(navigator.vendor);
  console.log(navigator.language);
  console.log(navigator.cookieEnabled);
  console.log(navigator.onLine);
  console.log(navigator.geolocation);
  console.log(navigator.hardwareConcurrency);
  console.log(navigator.product);
  console.log(navigator.connection);
  console.log(navigator.userAgentData);
  console.log(navigator.oscpu);
  console.log(navigator.systemLanguage);
  console.log(navigator.systemVersion);
  console.log(navigator.timezone);
  console.log(navigator.plugins);
  console.log(navigator.mimeTypes);
  console.log(navigator.languages);
  console.log(navigator.doNotTrack);
}
obtenerNavegador();
window.onload = function() {
  var navegador_usado = "x";
  var navegador = navigator.userAgent;
  if (navegador.indexOf("Chrome") != -1) {
    navegador_usado = "Google Chrome";
  }
  else if (navegador.indexOf("Firefox") != -1) {
    navegador_usado = "Mozilla Firefox";
  }
  else if (navegador.indexOf("Safari") != -1) {
    navegador_usado = "Apple Safari";
  }
  else if (navegador.indexOf("Edge") != -1) {
    navegador_usado = "Microsoft Edge";
  }
  else if (navegador.indexOf("Opera") != -1 || navegador.indexOf("OPR") != -1) {
    navegador_usado = "Opera";
  } else {
    navegador_usado = "un navegador desconocido";
  }
  return navegador_usado;
}

//////////////////////////////////////////////////
function esDispositivoMovil() {
  console.log(navigator.userAgent);
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Obtener el elemento HTML donde se mostrará el resultado
var resultado = document.getElementById("resultado");

// Mostrar el resultado
if (esDispositivoMovil()) {
  resultado.innerHTML = "Estás accediendo desde un dispositivo móvil con " + onload();
}
else {
  resultado.innerHTML = "Estás accediendo desde un dispositivo de escritorio con " + onload();
}