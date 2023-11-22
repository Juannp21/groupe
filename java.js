document.addEventListener('DOMContentLoaded', function () {
    var contenido = [
        "Nombre de equipo: Recloth",
        "Curso N°: 450948",
        "Materia: Diseño y Desarrollo Web",
        "Docente: Patricia Litovicius"
    ];

    var homeContainer = document.querySelector('.home');

    function mostrarContenido(index) {
        if (index < contenido.length) {
            var parrafo = document.createElement('p');
            homeContainer.appendChild(parrafo);

            // Obtener la palabra actual
            var palabraActual = contenido[index];

            // Inicializar el índice de la letra
            var letraIndex = 0;

            // Función para mostrar letras una por una
            function mostrarLetras() {
                if (letraIndex < palabraActual.length) {
                    // Añadir la letra actual al párrafo
                    parrafo.textContent += palabraActual.charAt(letraIndex);

                    // Incrementar el índice de la letra
                    letraIndex++;

                    // Esperar un tiempo antes de mostrar la próxima letra (ajusta según tu preferencia)
                    setTimeout(mostrarLetras, 50); // Cambia el tiempo a tu gusto (en milisegundos)
                } else {
                    // Después de mostrar todas las letras, pasar a la próxima palabra
                    setTimeout(function () {
                        mostrarContenido(index + 1);
                    }, 50); // Puedes ajustar este tiempo según tus preferencias
                }
            }

            // Iniciar la función para mostrar letras
            mostrarLetras();
        }
    }

    mostrarContenido(0);
});
