// Agrega un evento al formulario para escuchar el envío
document
  .getElementById("registro_formulario")
  .addEventListener("submit", function () {
    //Se obtienen los datos del Formulario
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let correo = document.getElementById("correo").value;

    // Verifica si el nombre está vacío
    //El método trim( ) elimina los espacios en blanco en ambos extremos del string.

    if (nombre.trim() === "") {
      alert("Debe Ingresar su Nombre");
    } else {
      // Validación de la edad (debe ser un número) la funcion isNaN determina si es numero o no
      if (isNaN(edad)) {
        // Verifica si la edad no es un número
        alert("La edad debe ser un número válido.");
      } else {
        // Verifica si el correo electrónico está vacío
        //El método trim( ) elimina los espacios en blanco en ambos extremos del string.
        if (correo.trim() === "") {
          alert("Debe ingresar un correo electrónico válido.");
        } else {
          // Si pasa todas las validaciones, se puede enviar el formulario
          alert("Formulario enviado correctamente!");
        }
      }
    }
  });
