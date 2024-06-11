//Funcion que tome dos numeros y realice una suma
/*function suma() {
  let numero1 = parseInt(prompt("Ingresa el primer número"));
  let numero2 = parseInt(prompt("Ingresa el segundo número"));
  let resultado = numero1 + numero2;
  alert("El resultado es " + resultado);
}
suma();*/
//función que determine si una palabra es un palíndromo
//(se lee igual de izquierda a derecha que de derecha a izquierda)
function esPalindromo(palabra) {
  return palabra === palabra.split("").reverse().join("");
}

// Ejemplos de prueba
alert(esPalindromo("reconocer")); // true
alert(esPalindromo("hola")); // false
alert(esPalindromo("anilina")); // true
alert(esPalindromo("copilot")); // false
