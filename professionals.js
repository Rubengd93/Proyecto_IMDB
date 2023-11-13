export class Professionals {
    constructor(name, age, weight, height, isRetired, nationality, oscarsNumber, profession) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }
    toString() {
        let atribute = `
        Name : ${this.name} 
        Age : ${this.age}
        Weight : ${this.weight}
        Height : ${this.height}
        isRetired : ${this.isRetired}
        Nationality : ${this.nationality}
        OscarsNumber : ${this.oscarsNumber}
        Profession : ${this.profession}
        
        `;
        return atribute;
    }
}
