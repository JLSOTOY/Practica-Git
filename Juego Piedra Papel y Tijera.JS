const PIEDRA = 0;
const PAPEL = 1;
const TIJERA = 2;

const EMPATE = 0;
const GANA = 1;
const PIERDE = 2;

document.addEventListener("DOMContentLoaded", function () {
  const piedraBtn = document.getElementById("piedra");
  const papelBtn = document.getElementById("papel");
  const tijeraBtn = document.getElementById("tijera");

  piedraBtn.addEventListener("click", function () {
    play(PIEDRA);
  });

  papelBtn.addEventListener("click", function () {
    play(PAPEL);
  });

  tijeraBtn.addEventListener("click", function () {
    play(TIJERA);
  });
});

function play(opcionUsuario) {
  const opcionMaquina = Math.floor(Math.random() * 3);
  const resultado = calcularResultado(opcionUsuario, opcionMaquina);
  const opcionMaquinaTexto = opcionToString(opcionMaquina);

  switch (resultado) {
    case EMPATE:
      alert("La máquina sacó " + opcionMaquinaTexto + ". ¡Es un empate!");
      break;
    case GANA:
      alert("La máquina sacó " + opcionMaquinaTexto + ". ¡Tú ganas!");
      break;
    case PIERDE:
      alert("La máquina sacó " + opcionMaquinaTexto + ". ¡Tú pierdes!");
      break;
  }
}

function calcularResultado(opcionUsuario, opcionMaquina) {
  if (opcionUsuario === opcionMaquina) {
    return EMPATE;
  } else if (opcionUsuario === PIEDRA) {
    if (opcionMaquina === PAPEL) return PIERDE;
    if (opcionMaquina === TIJERA) return GANA;
  } else if (opcionUsuario === PAPEL) {
    if (opcionMaquina === TIJERA) return PIERDE;
    if (opcionMaquina === PIEDRA) return GANA;
  } else if (opcionUsuario === TIJERA) {
    if (opcionMaquina === PIEDRA) return PIERDE;
    if (opcionMaquina === PAPEL) return GANA;
  }
}

function opcionToString(opcion) {
  switch (opcion) {
    case PIEDRA:
      return "piedra";
    case PAPEL:
      return "papel";
    case TIJERA:
      return "tijera";
  }
}
