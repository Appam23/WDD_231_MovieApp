// Show search page if navigated with #search-container
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.hash === '#search-container') {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('register-container').style.display = 'none';
        document.getElementById('search-container').style.display = 'block';
        var h1 = document.querySelector('h1');
        if (h1) h1.style.display = 'none';
        var topImg = document.querySelector('.top-image-container');
        if (topImg) topImg.style.display = 'none';
    }
});
// Genre filter functionality
document.addEventListener('DOMContentLoaded', function() {
    var genreSelect = document.getElementById('genre-select');
    var movieListMain = document.getElementById('movie-list-main');
    var genreResults = document.getElementById('genre-results');
    var genreMovieList = document.getElementById('genre-movie-list');
    var genreTitle = document.getElementById('genre-title');
    var genreBackBtn = document.getElementById('genre-back-btn');
    if (genreSelect) {
        genreSelect.addEventListener('change', function() {
            var selected = genreSelect.value;
            window.location.href = 'genre.html?genre=' + encodeURIComponent(selected);
        });
    }
    if (genreBackBtn) {
        genreBackBtn.onclick = function() {
            genreResults.style.display = 'none';
            movieListMain.style.display = '';
            genreSelect.value = 'all';
        };
    }
});
// Back button functionality for search page
document.addEventListener('DOMContentLoaded', function() {
    var backBtn = document.getElementById('back-btn');
    if (backBtn) {
        backBtn.onclick = function() {
            document.getElementById('search-container').style.display = 'none';
            document.getElementById('login-container').style.display = 'block';
            var h1 = document.querySelector('h1');
            if (h1) h1.style.display = '';
            var topImg = document.querySelector('.top-image-container');
            if (topImg) topImg.style.display = '';
        };
    }
});
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