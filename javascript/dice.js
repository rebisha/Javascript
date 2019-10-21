/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var scores = [0, 0];
var roundScore = 0;
var activePlayer = 0;
var diceSelector = document.querySelector('.dice');

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

/*in order to pass in html markup in innerHtml write it as a string i.e element.innerHtml = '<div>' + roundScore + '</div>'*/

document.querySelector('.btn-roll').addEventListener('click', function() {
   // 1. random number
   var dice = Math.floor(Math.random() * 6) + 1;
   
   // 2. Display the result
   diceSelector.style.display = 'block';
   
   // in order to change the image in the <img src> tag all we have to do is use the js .src as shown below
   diceSelector.src = '../assets/images/dice-' + dice + '.png';

   // 3. Update the round score IF the rolled number was NOT 1
   if(dice !== 1) {
      roundScore += dice;
      //selecting the element which has current id and concatenating the activePlayer value to get the exact selector i.e #current-0 or #current-1
      document.querySelector('#current-' + activePlayer).innerHTML = roundScore; 
   } else { // Next Player
      nextPlayer();
   }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
   // Add CURRENT score to GLOBAL score
   scores[activePlayer] += roundScore;

   // Update the UI
   document.querySelector('#score-' + activePlayer).innerHTML = scores[activePlayer]; 

   // Check if player won the game
   if(scores[activePlayer] >= 100) {
      document.querySelector('#name-' + activePlayer).textContent = 'Winner!!';
      diceSelector.style.display = 'none';
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
   } else {
      nextPlayer();
   }   
});

function nextPlayer() {
   /* ternary operator equivalent to
   if(activePlayer === 0) {
      activePlayer = 1;
   } else {
      activePlayer = 0;
   } */      
   activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
   roundScore = 0;

   document.getElementById('current-0').textContent = '0';
   document.getElementById('current-1').textContent = '0';

   document.querySelector('.player-0-panel').classList.toggle('active');
   document.querySelector('.player-1-panel').classList.toggle('active');

   diceSelector.style.display = 'none';
}