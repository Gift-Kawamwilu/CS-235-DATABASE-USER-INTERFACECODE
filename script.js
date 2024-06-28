document.addEventListener('DOMContentLoaded', () => {
    const getStartedButton = document.getElementById('get-started');
    const signupForm = document.getElementById('signup-form');
    const movieList = document.querySelector('.movie-list');
    const rentedMoviesList = document.querySelector('.rented-movies-list');
    const signOutButton = document.getElementById('sign-out');
    // Function to set active nav link
    const setActiveNavLink = () => {
    const navLinks = {
    'index.html': document.getElementById('nav-home'),
    'signup.html': null, // No nav link for sign up page
    'movies.html': document.getElementById('nav-movies'),
    'rented.html': document.getElementById('nav-rented'),
    'settings.html': document.getElementById('nav-settings')
    };
    const currentPage = window.location.pathname.split('/').pop();
    Object.keys(navLinks).forEach(page => {
    if (navLinks[page]) {
    if (currentPage === page) {
    navLinks[page].classList.add('active');
    } else {
    navLinks[page].classList.remove('active');
    }
    }
    });
    };
    // Call the function to set the active nav link
    setActiveNavLink();
    if (getStartedButton) {
    getStartedButton.addEventListener('click', () => {
    window.location.href = 'signup.html';
    });
    }
    if (signupForm) {
    signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // Capture user data and store it if necessary
    // Redirect to movies page
    window.location.href = 'movies.html';
    });
    }
    const fetchMovies = async () => {
    try {
    const response = await fetch('http://localhost:3000/api/movies');
    const movies = await response.json();
    movies.forEach(movie => {
    const movieTile = document.createElement('div');
    movieTile.classList.add('movie-tile');
    movieTile.innerHTML = `
    <img src="${movie.image}" alt="${movie.title}">
    <h3>${movie.title}</h3>
    <p>Actors: ${movie.actors}</p>
    <p>Rating: ${movie.rating}</p>
    <p>Duration: ${movie.duration}</p>
    `;
    movieTile.addEventListener('click', () => {
    window.location.href = `movie-detail.html?id=${movie.id}`;
    });
    movieList.appendChild(movieTile);
    });
    } catch (error) {
    console.error('Error fetching movies:', error);
    }
    };
    if (movieList) {
    fetchMovies();
    }
    const fetchRentedMovies = async () => {
    try {
    const response = await fetch('http://localhost:3000/api/rentedmovies'); // Update this route if needed
    const rentedMovies = await response.json();
    rentedMovies.forEach(movie => {
    const movieTile = document.createElement('div');
    movieTile.classList.add('rented-movie-tile');
    movieTile.innerHTML = `
    <img src="${movie.image}" alt="${movie.title}">
    <h3>${movie.title}</h3>
    <p>Actors: ${movie.actors}</p>
    <p>Rating: ${movie.rating}</p>
    <p>Duration: ${movie.duration}</p>
    `;
    movieTile.addEventListener('click', () => {
    window.location.href = `movie-detail.html?id=${movie.id}`;
    });
    rentedMoviesList.appendChild(movieTile);
    });
    } catch (error) {
    console.error('Error fetching rented movies:', error);
    }
    };
    if (rentedMoviesList) {
    fetchRentedMovies();
    }
    if (signOutButton) {
    signOutButton.addEventListener('click', () => {
    // Clear user session and redirect to home page
    window.location.href = 'index.html';
    });
    }
   });
   