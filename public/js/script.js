

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const loginLink = document.getElementById('login-link');
    const signupLink = document.getElementById('signup-link');

    signupForm.style.display = 'none';

    loginLink.addEventListener('click', function(event) {
        event.preventDefault();
        console.log('Login link clicked');
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
    });

    signupLink.addEventListener('click', function(event) {
        event.preventDefault();
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';

    
    });
});