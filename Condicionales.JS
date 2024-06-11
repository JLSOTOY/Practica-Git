let num = parseInt(prompt("Ingresa un numero")); //parseInt lo utilice para poder hacer el switch y el case
if (num == 6) {
  //Se pone 2 veces = para que sea mas exactos con 3 = es para declarar que sea estrictamente =
  alert("El numero ingresado es el ganador");
} else if (num == 3) {
  alert("Te dare una Pista es la mitad del ganador");
} else {
  alert("Sigue Intentando con mas numeros");
}
/*Con switch vamos a realizar exacta mente lo mismo pero con el codigo
mas limpio para no tner tantos condicionales*/
switch (num) {
  case 6:
    alert("El numero ingresado es el ganador");
    break;
  case 3:
    alert("Te dare una Pista es la mitad del ganador");
    break;
  default:
    alert("Sigue Intentando con mas numeros");
}
/*switch evalúa una expresión y ejecuta el bloque de código asociado al primer case que coincide 
con el valor de la expresión. Si ninguno de los case coincide, se puede ejecutar un bloque de código 
opcional utilizando default.Es una forma conveniente y legible de manejar múltiples condiciones en tu 
código en lugar de tener una serie de declaraciones if y else if.*/

let edad = parseInt(prompt("Ingrese su edad"));
let mensaje;
if (edad >= 18) {
  mensaje = "Eres Mayor de Edad";
} else mensaje = "Eres Menor de Edad";
alert(mensaje);

/*Operador ternario El operador ternario es útil cuando se necesita asignar un valor basado en una condición 
de forma más compacta que un if-else, pero se debe usar con moderación para mantener la legibilidad del código
general mente se utiliza solo para 2 condicones*/

let edad1 = parseInt(prompt("Ingrese su edad"));
let mensaje2 =
  edad1 < 18 ? "Aun no Eres Mayor de edad" : "Ya eres mayor de edad";
alert(mensaje2);
