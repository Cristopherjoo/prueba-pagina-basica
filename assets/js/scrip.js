document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const panel = document.getElementById('panel');

    if (container && panel) {
        container.addEventListener('mouseover', () => {
            panel.style.display = 'flex'; // Mostrar el panel
        });

        container.addEventListener('mouseout', () => {
            panel.style.display = 'none'; // Ocultar el panel
        });
    } else {
        console.error('Elementos con los IDs especificados no encontrados.');
    }
});
