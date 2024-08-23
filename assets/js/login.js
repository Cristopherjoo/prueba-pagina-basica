document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
 
    const validCredentials = [
        { username: 'ana', password: '1234' },
        { username: 'pepe', password: 'abcd' }
    ];
    
    const isValid = validCredentials.some(cred => 
        cred.username === username && cred.password === password
    );
    
    if (isValid) {
        errorMessage.textContent = '';
        window.location.href = 'index.html'; // Redirigir a index.html
    } else {
        errorMessage.textContent = 'Nombre de usuario o contraseña incorrectos.';
    }
});
