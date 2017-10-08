/*
Create a digital school catalog for the New York City Department of Education.
The Department of Education wants the catalog to hold quick reference material
for each school in the city.
Steve Hanlon Oct. 7, 2017
*/

class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  //getters
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  // setters
  set numberOfStudents(newNumberOfStudents) {
    if (typeof newNumberOfStudents === 'number') {
      this._numberOfStudents = newNumberOfStudents;
   		console.log(`${newNumberOfStudents} is valid input.`);
    } else {
      console.log(`Invalid input. Change ${newNumberOfStudents} to a number (i.e. no quotes).`)
    }
  }
  // methods
  quickFacts() {
    // log facts about the school based on arguments passed into constructor
    console.log(`${this._name} educates ${this._numberOfStudents} students, typically between the ages of ${this._level} school children.`);
  }

  static pickSubstituteTeacher(substituteTeachers) {
    // substituteTeachers argument should be an array
    this._substituteTeachers = substituteTeachers;
    const randomPick = Math.floor(Math.random() * this._substituteTeachers.length);
    console.log(`The substitute teach ${this._substituteTeachers[randomPick]} will fill in  there today.`);
  }
}

// subclass Primary
class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

// subclass Middle
class MiddleSchool extends School {
  constructor(name, numberOfStudents) {
    super(name, 'middle', numberOfStudents)
  }
}

// subclass High
class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, 'high', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams() {
    console.log(this._sportsTeams);
  }
}

// sample instance for Primary Shcool
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();
School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

// sample instance for High Shcool
const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
// don't need () when accessing a getter
alSmith.sportsTeams;
