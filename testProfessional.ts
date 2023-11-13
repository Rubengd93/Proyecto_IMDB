import { Professionals } from "./professionals.js";

let professionalOne = new Professionals("Juan", 34, 80, 1.70, true, "España", 5, "Actor");
let professionalTwo = new Professionals("Ruben", 30, 71, 1.66, false, "España", 5, "Desarrollador Web");
let professionalThree = new Professionals("Miguel", 50, 76, 1.73, true, "España", 5, "Gestor");


let professionalOneAtribute = professionalOne.toString();
let professionalTwoAtribute = professionalTwo.toString();
let professionalThreeAtribute = professionalThree.toString();

console.log(professionalOneAtribute, professionalTwoAtribute, professionalThreeAtribute);
