import React from 'react'
import { FaRegHandPaper, FaRegHandScissors } from 'react-icons/fa'
import { LiaHandRockSolid } from 'react-icons/lia'

export default function Home() {
     const handleGame = (e) => {
          const userChoice = e.target.id;
          const computerChoice = Math.floor(Math.random() * 3)
          const choices = ['rock', 'paper', 'scissors'];
          const computerChoiceName = choices[computerChoice]
          let message = '';
          const userScore = document.querySelector('.scores__user h1');
          const computerScore = document.querySelector('.scores__computer h1');
          const messageElement = document.querySelector('.message p');
          if (userChoice === computerChoiceName) {
               message = 'It\'s a tie!';
               messageElement.innerText = message;
               messageElement.style.color= 'blue';
          } else if (
               (userChoice === 'rock' && computerChoiceName === 'scissors') ||
               (userChoice === 'paper' && computerChoiceName === 'rock') ||
               (userChoice === 'scissors' && computerChoiceName === 'paper')
          ) {
               message = `You win! ${userChoice} beats ${computerChoiceName}`;
               userScore.innerText = parseInt(userScore.innerText) + 1;
               messageElement.innerText = message;
               messageElement.style.color= 'green';
          } else {
               message = `Computer wins! ${computerChoiceName} beats ${userChoice}`;
               computerScore.innerText = parseInt(computerScore.innerText) + 1;
               messageElement.innerText = message;
               messageElement.style.color= 'red';
          }
         
     }
     return (
          <div className='container'>
               <h1>Rock-Paper-Scissors</h1>
               <div className='game'>
                    <div className='game__item'>
                         <LiaHandRockSolid className='icon' id="rock" onClick={(e)=>handleGame(e)} />
                         <h2>Rock</h2>

                    </div>
                    <div className='game__item'>
                         <FaRegHandPaper className='icon' id="paper" onClick={(e)=>handleGame(e)} />
                         <h2>Paper</h2>

                    </div>
                    <div className='game__item'>
                         <FaRegHandScissors className='icon' id="scissors" onClick={(e)=>handleGame(e)}/>
                         <h2>Scissors</h2>


                    </div>
               </div>
               <div className='scores'>
                    <div className='scores__user'>
                         <h1>0</h1>
                         <h2>Player</h2>
                    </div>
                    <div className='scores__computer'>
                         <h1>0</h1>
                         <h2>Computer</h2>
                    </div>
               </div>
               <div className='message'>
                    <p>Play Game</p>
               </div>
               <div className='game__description'>
                    <h2>How to play</h2>
                    <ul>
                         <li>Choose one of the three options: Rock, Paper, or Scissors.</li>
                         <li>The winner is determined by the rules below.</li>
                         <li>Click on the icon to select your choice.</li>
                         <li>Once you have made your choice, the game will randomly select a choice for the computer.</li>
                         <li>The winner will be displayed on the screen.</li>
                    </ul>
                 
                    </div>
               <div className='game__rules'>
                    <h2>Rules</h2>
                    <ul>
                         <li>Rock beats Scissors</li>
                         <li>Scissors beats Paper</li>
                         <li>Paper beats Rock</li>
                   </ul>
               </div>
          </div>
     )
}
