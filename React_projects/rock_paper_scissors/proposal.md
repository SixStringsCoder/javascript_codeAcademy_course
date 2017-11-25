
**Component Mapping**

1 App component - to handle logic and states and render gameBoard component, hardcode Title navbar

2 Score component - to handle score logic (increment score) and winner, player and computer Names

3 youPlayer component - to handle onClick for youPlayer buttons and change the state of yourChoice which represents one of the hand graphics in handChoice array (three <img src> tags)

4 computerPlayer component - method to pick random number between 0 and 2 and show corresponding hand graphic.  handChoice can be an array of three <img src> tags, each array element filling in the hand graphic in DOM.

5 gameArea component - renders these components
- playerNames
- Score numbers
- hands
- buttons
