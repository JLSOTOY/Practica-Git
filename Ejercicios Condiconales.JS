//Días de La semana
alert("Ten en cuenta Una semana Inicia desde el día Lunes y son 7 días");
let dia = parseInt(prompt("Ingresa en numero el dia de la semana"));
let mensaj;
switch (dia) {
  case 1:
    mensaj = "El día Ingresado es Lunes";
    break;
  case 2:
    mensaj = "El día Ingresado es Martes";
    break;
  case 3:
    mensaj = "El día Ingresado es Miercoles";
    break;
  case 4:
    mensaj = "El día Ingresado es Jueves";
    break;
  case 5:
    mensaj = "El día Ingresado es Viernes";
    break;
  case 6:
    mensaj = "El día Ingresado es Sabado";
    break;
  case 7:
    mensaj = "El día Ingresado es Domingo";
    break;
}
alert(mensaj);

// Si un Numero es par o Impar

alert("Determinar si el numero es par o impar");

let num = parseInt(prompt("Ingrese el numero"));
let mensa;
if (num % 2 === 0) {
  mensa = "Es par";
} else mensa = "es impar";
alert(mensa);

//Dia laboral o no laboral

let day = prompt("Ingresa el dia del día de la semana");

if (day === "lunes") {
  alert("Es un día laboral");
} else if (day === "martes") {
  alert("Es un día laboral");
} else if (day === "miércoles") {
  alert("Es un día laboral");
} else if (day === "jueves") {
  alert("Es un día laboral");
} else if (day === "viernes") {
  alert("Es un día laboral");
} else if (day === "sábado") {
  alert("No es un día laboral");
} else if (day === "domingo") {
  alert("No es un día laboral");
} else {
  alert("no ingreso un dia correcto");
}
