const container = document.getElementById('container');
const panel = document.getElementById('panel');

container.addEventListener('mouseover', () => {
    panel.style.display = 'block';
});

container.addEventListener('mouseout', () => {
    panel.style.display = 'none';
});