/*
This program generates a Magic Eight Ball
where a question is selected along
with a randomly generated answer.  The goal is to
implement control flow for selecting the answer.
Steve Hanlon Sept 29, 2017
*/

// option for user to enter a name.
let userName = prompt("What's your good name, mate?");

// ternary expression that decides what to do if the user enters a name or not
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

// question bank the user wants to ask the Magic Eight Ball
const q_bank = ["How many years do we have left on Earth?",
"Where will I go after I die?",
"Is there pizza in the afterlife?",
"How many legs does a stool have?",
"Should we be saving our money or buying stuff?"
];

// randomly select a question from q_bank
let userQuestion = Math.floor(Math.random() * q_bank.length);

// randomly select a number for switch statement to select an answer
let randomNumber = Math.floor(Math.random() * 8);

// initialize eightBall undefined to be filled in by switch
let eightBall = '';

// control flow that takes in randomNumber, and then assigns eightBall to a reply
switch (randomNumber) {
  case 0:
    eightBall = 'The Second Coming III now appearing in a theater near you!';
    break;
  case 1:
    eightBall = 'Such folly you ask';
    break;
  case 2:
    eightBall = 'Why? You scared, Weasel?';
    break;
  case 3:
    eightBall = 'This is it! Hurry and master something for no reason.';
    break;
  case 4:
    eightBall = 'Nizzle Shizzle. So just Chillizzle';
    break;
  case 5:
    eightBall = 'Turtles all the way down, mate!';
    break;
  case 6:
    eightBall = 'Grasshopper, master your mind and such questions will not come.';
    break;
  case 7:
    eightBall = 'Not sure but I say bet $40 on World Peace';
    break;
}

// log user's question from question bank
console.log(`You asked: ${q_bank[userQuestion]}`);

// log Magic Eight Ball answer
console.log(`The Magic Eightball says, "${eightBall}"`);
