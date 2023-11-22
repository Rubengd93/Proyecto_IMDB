import { Professionals } from "./professionals.js";
import {Movie} from "./movie.js";

let movieOne = new Movie("50 Sombras de Grey", 2012, "USA", "Romantica/Erótica");

movieOne.director = new Professionals("Sam Taylor Wood", 46, 56, 1.67, false,"Británica", 0, "Director" );
movieOne.writer = new Professionals("E.L James", 56, 45, 1.60, true,"Británica", 0, "Director");

const actorsOne = new Professionals("Dakota Jhonson", 51, 60, 1.69, true, "USA", 0, "Actriz");
const actorsTwo = new Professionals("Jamie Dornan", 55, 80, 1.81, true, "USA", 0, "Actor");

movieOne.actors.push(actorsOne);
movieOne.actors.push(actorsTwo);


let viewMovie = movieOne.toStringMovie();

console.log(viewMovie);