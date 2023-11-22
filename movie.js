import { Professionals } from "./professionals.js";
export class Movie {
    constructor(title, releaseYear, nacionality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.actors = [];
        this.nacionality = nacionality;
        this.director = new Professionals("", 0, 0, 0, false, "", 0, "");
        this.writer = new Professionals("", 0, 0, 0, false, "", 0, "");
        this.language = "";
        this.platform = "";
        this.isMCU = false;
        this.mainCharacterName = "";
        this.producer = "";
        this.distributor = "";
        this.genre = genre;
    }
    toStringMovie() {
        let actors = this.actors.map((actor) => actor.name);
        let atributeFilm = `
        Title - ${this.title}
        Release Year - ${this.releaseYear}
        Actor - ${actors}
        Nacionality - ${this.nacionality}
        Director - ${this.director.name}
        Writer - ${this.writer.name}
        Language - ${this.language}
        Platform - ${this.platform}
        isMCU - ${this.isMCU}
        MainCharacterName - ${this.mainCharacterName}
        Producer - ${this.producer}
        Distributor - ${this.distributor}
        Genre - ${this.genre}
        `;
        return atributeFilm;
    }
}
