document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Aquí puedes agregar la lógica de autenticación, por ejemplo, verificar el correo y contraseña.

    // Si la autenticación es exitosa, redirige a form.html
    window.location.href = 'templates/form.html';
});
