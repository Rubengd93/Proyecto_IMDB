import { Professionals } from "./professionals.js";

export class Movie {

    public title: string;
    public releaseYear: number;
    public actors: Professionals[];
    public nacionality: string;
    public director: Professionals;
    public writer: Professionals;
    public language: string;
    public platform: string;
    public isMCU: boolean;
    public mainCharacterName: string;
    public producer: string;
    public distributor: string;
    public genre: string;

    constructor(title: string, releaseYear: number, nacionality: string, genre: string){

        this.title = title;
        this.releaseYear = releaseYear;
        this.actors = [];
        this.nacionality = nacionality;
        this.director = new Professionals("", 0, 0, 0, false, "", 0,"");
        this.writer = new Professionals("", 0, 0, 0, false, "", 0,"");
        this.language = "";
        this.platform = "";
        this.isMCU = false;
        this.mainCharacterName = "";
        this.producer = "";
        this.distributor = "";
        this.genre = genre;


    }

    public toStringMovie():string {

        let actors = this.actors.map(array => {
            return array;
        });

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
 
        `
        return atributeFilm;
    }


}









