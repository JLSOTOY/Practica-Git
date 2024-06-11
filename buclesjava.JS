/* bucle while, la condición se evalúa antes de ejecutar el bloque de código. 
Si la condición es verdadera, el bloque de código se ejecuta. Si la condición 
es falsa desde el principio, el bloque de código nunca se ejecutará*/
/*let contador = 0;
while (contador < 8) {
  alert("Valor: " + contador);
  contador++;
}

/* El bucle do-while garantiza que el bloque de código se ejecute al menos una vez
y luego la condición se evalúa. Si la condición es verdadera, el bloque de código 
se ejecutará nuevamente y si es es falsa no se ejecutara mas*/
/*let contadoR = 0;
do {
  alert("Valor: " + contadoR);
  contadoR++;
} while (contadoR < 3);*/

//Bucle for  se utiliza para ejecutar un bloque de código repetidamente mientras
//se cumpla una condición específica.

/*for (let i = 0; i < 5; i++) {
  alert("Interacción numero " + i);
}

//Bucle for in, itera sobre todas las propiedades enumerables del objeto, incluidas
//las propiedades heredadas de su prototipo.

const miObjeto = { Autos: 1, Apartamentos: 2, Computadores: 3 };
for (const key in miObjeto) {
  alert(key + " : " + miObjeto[key]);
}*/
//El key me devuelve la propiedad del objeto

// Bucle for of se utiliza para iterar sobre elementos iterables, como matrices, cadenas, mapas, conjuntos,

let numeros = [1, 2, 3, 4, 5];

for (let numero of numeros) {
  Alert("Los Numeros son " + numero);
}
