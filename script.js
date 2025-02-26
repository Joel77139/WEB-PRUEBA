document.querySelectorAll('.planta button, .vivero-item button, .articulo button').forEach(button => {
    button.addEventListener('click', () => {
        alert('¡Gracias por tu compra!');
    });
});
