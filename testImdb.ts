import { Professionals } from "./professionals.js";
import { Movie } from "./movie.js";
import { Imdb } from "./imdb.js";

let movieTwo = new Movie("El señor de los anillos, La comunidad del anillo", 2001, "Nueva Zelanda", "Fantasia");
let moviethree = new Movie("Equalizer 2", 2018, "USA", "Suspense/Acción");

let directormovieTwo = new Professionals("Petter Jackson", 61, 76, 1.76, false, "Nueva Zelanda", 5, "Director");
let directormovieThree = new Professionals("Antoine Fuqua", 52, 81, 1.72, false, "USA", 2, "Director");
let writermovieTwo = new Professionals("J. R. R. Tolkien", 102, 68, 1.69, true, "Sudafrica", 8, "Escritor");
let writermovieThree = new Professionals("Denzel", 57, 85, 1.80, false, "Sudafrica", 1, "Escritor");
let actorMovieTwo = new Professionals("Orlando Bloom ", 61, 85, 1.80, false, "USA", 1, "Actor");
let actorMovieThree = new Professionals("Densel Washington", 51, 75, 1.84, false, "Sudafrica", 1, "Actor");
movieTwo.actors.push(actorMovieTwo);
moviethree.actors.push(actorMovieThree)

movieTwo.director = directormovieTwo;
movieTwo.writer = writermovieTwo;
moviethree.director = directormovieThree;
moviethree.writer = writermovieThree;

let movies = new Imdb([movieTwo,moviethree]);

console.log(movies);


