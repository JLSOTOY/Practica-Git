// Ejercicio Area de un rectangulo
var base = prompt("ingrese Base del rectangulo");
var Altura = prompt("ingrese Altura");
var Area = base * Altura;
alert("El area del rectangulo es " + Area);

// Ejercicio Calcular Iva

var Producto = prompt("Ingrese Nombre del Producto");
var Precio = prompt("Ingrese Precio del Producto");
var Iva = (Precio * 19) / 100;
alert("El iva del Producto es " + Iva);
var Total = Number(Precio + Iva);
alert("El precio total del producto es " + Total);

//Clcular el promedio de 5 Numeros

var num1 = Number(prompt("Ingrese Numero 1"));
var num2 = Number(prompt("Ingrese Numero 2"));
var num3 = Number(prompt("Ingrese Numero 3"));
var num4 = Number(prompt("Ingrese Numero 4"));
var num5 = Number(prompt("Ingrese Numero 5"));

var promedio = (num1 + num2 + num3 + num4 + num5) / 5;
alert("El promedio es " + promedio);
// aqui el Number lo que hace es que se entienda como numero
