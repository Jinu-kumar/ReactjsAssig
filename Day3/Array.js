let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function evenNumbers() {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             console.log(arr[i]);
//         }
//     }
// }
// evenNumbers();

//using map
arr.map((item) => {
    if (item % 2 !== 0) {
        console.log(item);
    }
});
// using filter
arr.filter(num => num % 2 === 0).map(num => console.log(num));

// Todays task
const movies = [
    { title: 'Inception', releaseYear: 2010, genre: 'Sci-Fi', rating: 8.8 },
    { title: 'The Dark Knight', releaseYear: 2008, genre: 'Action', rating: 9.0 },
    { title: 'Titanic', releaseYear: 1997, genre: 'Romance', rating: 7.8 },
    { title: 'The Matrix', releaseYear: 1999, genre: 'Sci-Fi', rating: 8.7 },
    { title: 'The Godfather', releaseYear: 1972, genre: 'Crime', rating: 9.2 },
    { title: 'Avatar', releaseYear: 2009, genre: 'Sci-Fi', rating: 7.8 },
    { title: 'The Shawshank Redemption', releaseYear: 1994, genre: 'Drama', rating: 9.3 }
];

// 1. 
function sortMoviesByRating() {
    return [...movies].sort((a, b) => b.rating - a.rating);
}

// 2. 
function findMovieByTitle(title) {
    const movie = movies.find(movie => movie.title.toLowerCase() === title.toLowerCase());
    return movie ? movie : `Movie "${title}" not found in the catalog.`;
}

// 3. 
function moviesWithRatingAbove8() {
    return movies.filter(movie => movie.rating > 8);
}

// 4.
function listAllMovieTitles() {
    return movies.map(movie => movie.title);
}

// 5. 
function countMoviesByGenre(genre) {
    return movies.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase()).length;
}

// 6. 
function areAllMoviesRatedAbove7() {
    return movies.every(movie => movie.rating > 7);
}

// 7. 
function moviesReleasedAfter2000() {
    return movies.filter(movie => movie.releaseYear > 2000);
}


console.log("Movies sorted by rating (highest first):", sortMoviesByRating());
console.log("Finding 'Titanic':", findMovieByTitle('Titanic'));
console.log("Finding 'Interstellar':", findMovieByTitle('Interstellar'));
console.log("Movies with rating greater than 8:", moviesWithRatingAbove8());
console.log("All movie titles:", listAllMovieTitles());
console.log("Number of Sci-Fi movies:", countMoviesByGenre('Sci-Fi'));
console.log("Are all movies rated above 7?", areAllMoviesRatedAbove7());
console.log("Movies released after 2000:", moviesReleasedAfter2000());

