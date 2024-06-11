/*document.getElementById("boton").addEventListener("click", function () {
  let password = document.getElementById("password").value;
  if (password.length < 8) {
    // Aquí puedes cambiar "contraseña_secreta" por la contraseña que deseas
    alert("¡Bienvenido!"); // Mensaje de bienvenida si la contraseña es correcta
  } else {
    alert("Contraseña incorrecta. Inténtalo de nuevo."); // Mensaje si la contraseña es incorrecta
  }
});*/

//PROGRAMA NOTAS DE UN ESTUDIANTE

let calificacion = prompt("Ingrese su calificación");
if (calificacion < 5 && calificacion >= 0) {
  alert("Calificación Insuficiente");
} else if (calificacion >= 5 && calificacion <= 7) {
  alert("Calificacion suficiente");
} else if (calificacion >= 8 && calificacion <= 10) {
  alert("Calificación Exelente");
} else {
  alert("Calificación Invalida");
}
