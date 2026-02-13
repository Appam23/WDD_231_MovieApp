// Display movies by genre selection and handle back button
window.addEventListener('DOMContentLoaded', function() {
    // Movie data (should match your main movie list)
    const movies = [
        { title: 'The Shawshank Redemption', genre: 'drama', img: 'images/SR.jpg' },
        { title: 'The Godfather', genre: 'crime', img: 'images/GF.jpeg' },
        { title: 'The Dark Knight', genre: 'action', img: 'images/DN.jpg' },
        { title: 'Pulp Fiction', genre: 'thriller', img: 'images/PF.jpg' },
        { title: 'Forrest Gump', genre: 'comedy', img: 'images/FG.jpg' },
        { title: 'Inception', genre: 'sci-fi', img: 'images/IN.jpg' }
    ];

    // Get genre from URL query string
    const params = new URLSearchParams(window.location.search);
    const genre = params.get('genre');
    const genreTitle = document.getElementById('genre-title');
    const genreMovieList = document.getElementById('genre-movie-list');

    // Set genre title
    if (genre && genre !== 'all') {
        genreTitle.textContent = genre.charAt(0).toUpperCase() + genre.slice(1) + ' Movies';
    } else {
        genreTitle.textContent = 'All Movies';
    }

    // Filter and display movies
    genreMovieList.innerHTML = '';
    movies.forEach(function(movie) {
        if (!genre || genre === 'all' || movie.genre === genre) {
            const li = document.createElement('li');
            li.innerHTML = `<img src="${movie.img}" alt="${movie.title} Poster" class="movie-icon"><span>${movie.title}</span>`;
            genreMovieList.appendChild(li);
        }
    });

    // Back button
    var backBtn = document.getElementById('genre-back-btn');
    if (backBtn) {
        backBtn.onclick = function() {
            window.location.href = 'index.html#search-container';
        };
    }
});

