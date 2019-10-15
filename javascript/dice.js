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

var dice = Math.floor(Math.random() * 6) + 1;

//selecting the element which has current id and concatenating the activePlayer value to get the exact selector i.e #current-0 or #current-1
document.querySelector('#current-' + activePlayer).innerHTML = dice; 

/*in order to pass in html markup in innerHtml write it as a string i.e element.innerHtml = '<div>' + roundScore + '</div>'*/

document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click', function() {
   // do something 
});