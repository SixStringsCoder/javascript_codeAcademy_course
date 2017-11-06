/*
Create and extract information about your favorite sports team
using the JavaScript data structures.
Steve Hsnlon Oct. 3, 2017
*/

// create a team object for Balt. Orioles
const team = {
  // add players to roster
  _players: [
    {firstName: 'Adam',
		 lastName: 'Jones',
		 age: 32},
    {firstName: 'Welington',
		 lastName: 'Castillo',
		 age: 30},
    {firstName: 'Tim',
		 lastName: 'Beckham',
		 age: 27}
  ],
  // add completed games, opponent and score
  _games: [
    {opponent: 'Yankees',
     teamPoints: 7,
     opponentPoints: 6},
    {opponent: 'Red Sox',
     teamPoints: 8,
     opponentPoints: 10},
    {opponent: 'Indians',
     teamPoints: 2,
     opponentPoints: 3},
  ],
  // getter methods to retrieve _players
  get players() {
   return this._players;
	},
  // getter methods to retrieve _games
	get games() {
   return this._games;
	},
  // Add addPlayer method to the team object
  addPlayer(firstName, lastName, age) {
    let player = {
     firstName: firstName,
		 lastName: lastName,
		 age: age
    };
    // add player to _players array
    this._players.push(player);
  }, // end addPlayer method
  // Add addGame method to the team object
  addGame(opponentName, teamPoints, oppPoints) {
    let game = {
     opponentName: opponentName,
		 teamPoints: teamPoints,
		 oppPoints: oppPoints
    };

    this._games.push(game);
  } // end addGame method
};

// Invoke your addPlayer method, print the team's updated players array
team.addPlayer('Chris', 'Davis', 31);
team.addPlayer('Jonathan', 'Schoop', 25);
team.addPlayer('Trey', 'Mancini', 25);
console.log(team._players);

// Invoke your addGame method, print the team's updated games array
team.addGame('Tigers', 8, 9);
team.addGame('Braves', 2, 0);
team.addGame('Dodgers', 3, 4);
console.log(team._games);
