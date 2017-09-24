/*
This program is a calculator that calculates sleep debt.
The program will ask a user how many hours of sleep is ideal each night,
then compare that to the actual hours they slept each night of the last week.
programmed by Steve Hanlon Sept 23, 2017
*/

// Establish how many hours the person slept for this week
const getSleepHours = (day) => {
  day = day.toLowerCase();

    switch(day) {
      case 'monday':
      return 8;
      break;
      case 'tuesday':
      return 7;
      break;
      case 'wednesday':
      return 7;
      break;
      case 'thursday':
      return 6;
      break;
      case 'friday':
      return 9;
      break;
      case 'saturday':
      return 6;
      break;
      case 'sunday':
      return 7;
      break;
   }
};

// Total week's actual sleep hours
function getActualSleepHours() {
  let mon = getSleepHours('monday');
  let tues = getSleepHours('tuesday');
  let wed = getSleepHours('wednesday');
  let thurs = getSleepHours('thursday');
  let fri = getSleepHours('friday');
  let sat = getSleepHours('saturday');
  let sun = getSleepHours('sunday');
  let result = mon + tues + wed + thurs + fri + sat + sun;
  return result;
};

// Establish ideal amount of sleep hours for the week
function getIdealSleepHours() {
  const idealHours = 8;
  return idealHours * 7;
};

// Call functions to figure out sleep debt; return a statement based on result
function calculateSleepDebt() {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  const sleepDebt = idealSleepHours - actualSleepHours;

  if (actualSleepHours === idealSleepHours) {
    console.log('You got an ideal amount of sleep!');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You got too much sleep!');
  } else if (actualSleepHours < idealSleepHours) {
    console.log('You need more sleep, man!');
  }
   console.log(`You're sleep debt is ${sleepDebt} hours.`)
};

// Start the process of calculating the sleep debt
calculateSleepDebt();
