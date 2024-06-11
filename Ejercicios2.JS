// PROGRAMA QUE NOS IMPRIMA EL NUMERO MAYOR
/*alert("Debe ingresar 2 numeros");
let num1 = prompt("Ingrese el primer numero");
let num2 = prompt("Ingrese el segundo numero");
if (num1 > num2) {
  alert("El numero Mayor es " + num1);
} else if (num2 > num1) {
  alert("El numero mayor es " + num2);
}
//PROGRAMA QUE IMPRIMA SI LOS NUMEROS SON MULTIPLOS
alert("Verificar si los numeros son multiplo");

let numero1 = parseInt(prompt("Ingresa el primer número:"));
let numero2 = parseInt(prompt("Ingresa el segundo número:"));

//el || es el condicional o
if (numero1 % numero2 === 0 || numero2 % numero1 === 0) {
  alert("Los números son múltiplos según las condiciones dadas.");
} else {
  alert("Los números no son múltiplos según las condiciones dadas.");
}

//Programa para saber si la edad es suficiente para sacar liciencia de conduccion
alert("Validacion si cumple con los requisitos para obtner tu licencia");
let edad = prompt("Ingrese su edad");
if (edad >= 16) {
  alert("Eres Apto para obtener tu licencia");
} else if (edad < 16) {
  let anosFaltantes = 16 - edad;
  alert(
    `Perdón, pero no tienes la edad suficiente. Te faltan ${anosFaltantes} años para poder obtener una licencia.`
  );
}
//PROGRAMA QUE DETERMINA SI EL NUMERO ES PRIMO
alert("Este Programa indica si un número es primo");
function esPrimo(num) {
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
}

let numero = prompt("Ingresa un número:");
numero = Number(numero);

if (esPrimo(numero)) {
  alert(numero + " es un número primo");
} else {
  alert(numero + " no es un número primo");
}

//EJERCICIOS PERO CREANDO FUNCIONES
//SUPERFICIE DE UN TERRENO

//Aqui se declara la función con la palabra function se da el nombre que uno quiere
//en  este caso  calcuSuperficie()

function calcuSuperficie() {
  let ancho = prompt("Ingrese el ancho del terreno");
  let alto = prompt("Ingrese el alto del terreno");
  let resultado = ancho * alto;
  alert("La superficie del terreno es " + resultado);
}
calcuSuperficie();

//Calcular el Cuadraro de un numero

/*function square(numero) {
  let result = numero * numero;
  alert("El resultado es " + result);
}
square(prompt("In grese el Número"));

//Funciones Anonimas

const multiplicar = function (a, b) {
  let resul = a * b;
  alert("EL resultado es " + resul);
};
multiplicar(2.5);

//Funcion flecha (Arrow Function)
// esta funcion flecha lo que hace es que ya no utilizas la palabra function sino
//se remplaza por =>
const CalcularAreaTriangulo = (base, altura) => {
  let resulTado = (base * altura) / 2;
  alert("EL resultado es " + resulTado);
};
CalcularAreaTriangulo(4, 15);*/

//FUNCION QUE CALCULE EL AREA DE UN RECTANGULO
const CalcularAreaRectangulo = (largo, ancho) => {
  let resulTadO = largo * ancho;
  alert("EL resultado es " + resulTadO);
};
CalcularAreaRectangulo(prompt("Ingrese El Ancho"), prompt("Ingrese El Largo"));
//Aqui si quiero ingresar otro terreno vuelvo y llamo la función
CalcularAreaRectangulo(prompt("Ingrese El Ancho"), prompt("Ingrese El Largo"));
// Función para sumar las áreas de dos rectángulos
function sumarAreasRectangulos(ancho1, largo1, ancho2, largo2) {
  const areaRectangulo1 = calcularAreaRectangulo(ancho1, largo1);
  const areaRectangulo2 = calcularAreaRectangulo(ancho2, largo2);
  return areaRectangulo1 + areaRectangulo2;
}

// Ejemplo de uso:
const areaTotal = sumarAreasRectangulos(5, 10, 3, 6);
alert("El área total de los dos rectángulos es: " + `${areaTotal}`);

//Suma de Numeros en un Rango

function sumaRango(inicio, fin) {
  let suma = 0;
  for (let i = inicio; i <= fin; i++) {
    suma += i;
  }
  return suma;
}
sumaRango(1, 10);
