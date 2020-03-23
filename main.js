    // parent class
class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;    // "primary", "middle" or "high"
        this._numberOfStudents = numberOfStudents;
    }
    get name() {
        return this._name;
    }
    get level() {
        return this._level;
    }
    get numberOfStudents() {
        return this._numberOfStudents
    }
    set numberOfStudents(value) {
        if ( typeof value === "number" ) {
            this._numberOfStudents = number;
        } else console.log("Invalid input: numberOfStudents must be set to a Number.");
    }
    get quickfacts() {
        return `${this.name} educates ${this.numberOfStudents} students at the ${this.level} level.`
    }
    static pickSubstituteTeacher(substituteTeachers) {
        let chosenTeacher = substituteTeachers[Math.floor(Math.random()*substituteTeachers.length)];
        return chosenTeacher;
    }
}

class PrimarySchool extends School {
    constructor (name, numberOfStudents, pickupPolicy) {
        super(name, "primary", numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy() {
        return this._pickupPolicy;
    }
}

//class Middle extends School {
//    constructor(name, level, numberOfStudents) {
//        super(name, level, numberOfStudents);
//    }
//}

class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
        super(name, "high", numberOfStudents);
        this._sportsTeams = sportsTeams;
    }
    get sportsTeams() {
        console.log(this._sportsTeams);
    }
}


const lorraineHansbury = new PrimarySchool("Lorraine Hansbury", 154, "Students must be picked up by a parent, guardian, or a family member over the age of 13.");

console.log(lorraineHansbury.quickfacts);

    // a static method can only be called by the parent class, not its instances
console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

let alSmith = new HighSchool("Al E. Smith", 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

alSmith.sportsTeams;
