import { Professionals } from "./professionals.js";
import {Movie} from "./movie.js";

let movieOne = new Movie("50 Sombras de Grey", 2012, "USA", "Romantica/Erótica");

let director1 = movieOne.director = new Professionals("Sam Taylor Wood", 46, 56, 1.67, false,"Británica", 0, "Director" );
let writer1 = movieOne.writer = new Professionals("E.L James", 56, 45, 1.60, true,"Británica", 0, "Director");

let actorsOne = new Professionals("Dakota Jhonson", 51, 60, 1.69, true, "USA", 0, "Actriz");
let actorsTwo = new Professionals("Jamie Dornan", 55, 80, 1.81, true, "USA", 0, "Actor");

movieOne.actors.push(actorsOne);
movieOne.actors.push(actorsTwo);
movieOne.director = director1;
movieOne.writer = writer1;


let viewMovie = movieOne.toStringMovie();

console.log(viewMovie);