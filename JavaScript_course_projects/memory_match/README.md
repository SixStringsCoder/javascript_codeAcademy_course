### Proposal
Make a _Memory Match_ game where all card pairs must be matched to win the game

  #### Game Behavior
  - present it as a grid of 4 x 4 (Desktop) and 3 x 6 (small mobile) of 8 hidden card pairs
  - randomly shuffle the cards
  - once a match is made, the paired cards are _kept revealed_
  - if two picked squares don't match indicate that with a message (sound too?)
  - have a timer running that shows how long it took to complete the challenge
  - Winning Sequence
    - modal window to congratulate the player
    - show how much time it took to complete the challenge
    - ask to play again or quit


  #### Components
  - grid with cards
  - 'Strikes or Stars' display area
    - showing how well the player is doing.  
    - 3-6 strikes = game over
  - Timer
    - count up
    - option to count down and remove 'strikes'
  - Number of 'Moves' or 'Attempts'
  - Modal Window for Winner/Loser
    - play again button
    - quit button
  - Reset button to restart game


  #### UX Notes
- CSS Grid to make whole page responsive layout
- 

  #### Workflow as it happened:

  - Start Read Me and Proposal
  - Make sample array of vocabulary words
  - Make function to load array words onto DOM in a grid of squares
  - Make initial CSS Flexbox to get Memory Match Grid centered
  - Add Fisher-Yates function to shuffle array words
  - Add Button to trigger Fisher-Yates Shuffle
