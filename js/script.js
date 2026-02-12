const loginContainer = document.getElementById('login-container');
const registerContainer = document.getElementById('register-container');
document.getElementById('show-register').onclick = function() {
    loginContainer.style.display = 'none';
    registerContainer.style.display = 'block';
};
document.getElementById('show-login').onclick = function() {
    registerContainer.style.display = 'none';
    loginContainer.style.display = 'block';
};
document.getElementById('login-form').onsubmit = function(e) {
    e.preventDefault();
    // Hide login, h1, and top image; show search page
    loginContainer.style.display = 'none';
    document.getElementById('search-container').style.display = 'block';
    document.querySelector('h1').style.display = 'none';
    document.querySelector('.top-image-container').style.display = 'none';
};
document.getElementById('register-form').onsubmit = function(e) {
    e.preventDefault();
    alert('Registration submitted!');
};