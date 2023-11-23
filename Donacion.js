var elemento = document.getElementById("botonDonar");
var mensaje = document.getElementById("mensaje");

elemento.addEventListener("click", function() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var documento = document.getElementById("documento").value;
    var cantidad = parseInt(document.getElementById("cantidad").value);

    // Verificar que todos los campos estén completos
    if (nombre && apellido && documento && cantidad) {
        // Verificar que el número de documento sea un valor numérico
        if (!isNaN(documento)) {
            // Realizar donación
            console.log("Donación realizada:");
            console.log("Nombre: " + nombre);
            console.log("Apellido: " + apellido);
            console.log("Documento: " + documento);
            console.log("Cantidad: " + cantidad);
            mensaje.textContent = "¡Gracias por su donación!";
            mensaje.style.color = "white"; // Cambiar el color del mensaje a negro
        } else {
            // Mostrar mensaje de error
            mensaje.textContent = "Error: El número de documento debe ser un valor numérico";
            mensaje.style.color = "white"; // Cambiar el color del mensaje a rojo
        }
    } else {
        // Mostrar mensaje de error
        mensaje.textContent = "Error: Todos los campos son obligatorios";
        mensaje.style.color = "white"; // Cambiar el color del mensaje a rojo
    }
});
