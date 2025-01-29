// Agregar evento de clic a los botones
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        alert('¡Gracias por interesarte en la ecología y el reciclaje!');
    });
});
