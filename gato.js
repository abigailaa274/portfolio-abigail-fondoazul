// Obtener la referencia al elemento del gato
const gato = document.getElementById('gato');

// Variables para la posición objetivo (donde está el mouse) y actual (donde está el gato)
let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;

// Velocidad de seguimiento (entre 0 y 1, más bajo = más lento)
const speed = 0.03;

// Función que anima el movimiento del gato
function animate() {
    // Calcular la nueva posición actual interpolando hacia la objetivo
    currentX += (targetX - currentX) * speed;
    currentY += (targetY - currentY) * speed;

    // Aplicar la transformación para mover el gato
    gato.style.transform = `translate(${currentX - 50}px, ${currentY - 50}px)`; // Centrar el gato debajo del mouse

    // Llamar a la función en el siguiente frame para animación suave
    requestAnimationFrame(animate);
}

// Escuchar el movimiento del mouse
document.addEventListener('mousemove', (event) => {
    // Actualizar la posición objetivo con la posición del mouse
    targetX = event.clientX;
    targetY = event.clientY;
});

// Iniciar la animación
animate();