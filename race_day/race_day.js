/*
You have been hired to write a program that will register runners for a race
and give them instructions on race day. All adults will race
in the morning and all people under 18 will race in the afternoon.
Steve Hanlon Sept 29, 2017
*/

// randomly pick a race number for participants
let raceNumber = Math.floor(Math.random() * 1000);

// variable that indicates whether a runner registered early or not
let registered_early = false;
//  runner's age
let age = Math.floor(Math.random() * 100);

  // Add 1000 to their raceNumber if they did not register early
  if (registered_early === false) {
    raceNumber += 1000;
  }
  if (registered_early && age > 18) {
    console.log(`Number ${raceNumber} who is ${age} years old, will race at 9:30 am.`);
  } else if (registered_early || age > 18) {
    console.log(`Number ${raceNumber} who is ${age} years old, will race at 11:00 am.`);
  } else if (registered_early === false && age < 18) {
    console.log(`Number ${raceNumber} who is ${age} years old, will race at 12:30 pm.`);
  } else {
    // logs only if registered_early and age values are undefined
    console.log("See the registration desk.");
  }
