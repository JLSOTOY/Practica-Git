/*let mensaje;
mensaje = "hola";
alert(mensaje);

const RED = "ff0000";
let edad = prompt("Ingresa tu edad"); //prom captura datos en la interaccion con usuario
alert("Tu esdad es " + edad);
let b = confirm("¿Seguro de que quiere borrar el mensaje"); //confirm() en JavaScript se utiliza para mostrar un cuadro de diálogo con un mensaje y dos botones: Aceptar y Cancelar.
alert(b);
/*alert=//Mostrar mensaje
prompt=//Capturar información del usuario, preguntar algo
confirm=//preguntar sobre decisión verdadero o falso
console.log=//validar información de manera interna */
console.log("Hola Programadores");
let nombre = "Jose";
console.log("Hola " + nombre);

let producto = prompt("Ingrese el nombre del producto");
alert(producto);
let precio = Number(prompt("Ingrese El precio del producto"));
confirm("Esta seguro que ese es el precio del producto");
let iva = Number((precio * 19) / 100);
alert("El valor del iva es " + iva);
let total = Number(precio + iva);
alert("El valor total del producto " + total);
console.log("El valor del iva es " + iva);

//consumo de gasolina

let km = Number(prompt("Indique Cuantos Kilometros lleva recorridos"));
confirm("EStas Seguro que esa es la distancia recorrida");
let galones = Number(prompt("Cuantos galones de gasolina consumidos"));
let consumo = Number(km / galones);
alert("Su consumo de gasolina fue " + consumo);
console.log(`Distancia Recorrida "${km}, "Gasolina gastada "${galones}`);

//Perimetro de un triangulo p=l1+l2+l3
alert("Hallar el perimetro de un triangulo");
let l1 = prompt("Ingrese el valor del primer lado del triangulo");
let l2 = prompt("Ingrese el valor del segundo lado del triangulo");
let l3 = prompt("Ingrese el valor del tercer lado del triangulo");
confirm("Estas seguro que los datos ingresados son correctos");
let perimetro = l1 + l2 + l3;
