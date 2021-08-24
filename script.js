'use strict';

/*Basics*/
const playerZeroEl = document.querySelector('.player--0');
const playerOneEl = document.querySelector('.player--1');
const scoreZeroEl = document.querySelector('#score--0');
const scoreOneEl = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNewEl = document.querySelector('.btn--new');
const btnRollEl = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentZero = document.getElementById('current--0');
const currentOne = document.getElementById('current--1');

let scores, currentScore, activePlayer, playing;

/* Init */

const initial = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  scoreZeroEl.textContent = 0;
  scoreOneEl.textContent = 0;
  currentZero.textContent = 0;
  currentOne.textContent = 0;

  diceEl.classList.add('hidden');
  playerZeroEl.classList.remove('player--winner');
  playerOneEl.classList.remove('player--winner');
  playerZeroEl.classList.add('player--active');
  playerOneEl.classList.remove('player--active');
};
initial();

/* Switch Function */
function switchPlayer () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    playerZeroEl.classList.toggle('player--active');
    playerOneEl.classList.toggle('player--active');
}

/* Rolling button functionality*/
btnRollEl.addEventListener('click',function(){
    if(playing){
        const dice = Math.trunc(Math.random() * 6) + 1;
        diceEl.classList.remove('hidden');
        diceEl.src = `images/dice-${dice}.png`
        if(dice !== 1){
            currentScore +=  dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        }
        else{
            switchPlayer();
        }
    }
});

/* Hold Button Functionality */

btnHold.addEventListener('click', function(){
    if(playing){
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        if(scores[activePlayer] >= 10 ){
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector
            (`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector
            (`.player--${activePlayer}`).classList.remove('player-active');
        }
        else{
            switchPlayer();
        }
    }
});

/* New Game Button */

btnNewEl.addEventListener('click', initial);