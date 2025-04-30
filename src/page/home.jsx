import React, { useState } from 'react'
import { FaRegHandPaper, FaRegHandScissors } from 'react-icons/fa'
import { LiaHandRockSolid } from 'react-icons/lia'

export default function Home() {
     const [userScore, setUserScore] = useState(0);
     const [computerScore, setComputerScore] = useState(0);
     const [message, setMessage] = useState("Play Game");
     const [messageColor, setMessageColor] = useState("black");

     const handleGame = (e) => {
          const userChoice = e.target.id;
          const choices = ['rock', 'paper', 'scissors'];
          const computerChoiceName = choices[Math.floor(Math.random() * 3)];

          if (userChoice === computerChoiceName) {
               setMessage("It's a tie!");
               setMessageColor("blue");
          } else if (
               (userChoice === 'rock' && computerChoiceName === 'scissors') ||
               (userChoice === 'paper' && computerChoiceName === 'rock') ||
               (userChoice === 'scissors' && computerChoiceName === 'paper')
          ) {
               setUserScore(prev => prev + 1);
               setMessage(`You win! ${userChoice} beats ${computerChoiceName}`);
               setMessageColor("green");
          } else {
               setComputerScore(prev => prev + 1);
               setMessage(`Computer wins! ${computerChoiceName} beats ${userChoice}`);
               setMessageColor("red");
          }
     };

     const resetGame = () => {
          setUserScore(0);
          setComputerScore(0);
          setMessage("Play Game");
          setMessageColor("black");
     };

     return (
          <div className="max-w-[900px] mx-auto my-8 p-8 text-center font-[Segoe UI]">
               <div className="flex justify-around flex-wrap mb-8">
                    <div className="flex flex-col items-center min-w-[150px] m-auto text-center cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110">
                         <LiaHandRockSolid className="text-[5rem] text-blue-700" id="rock" onClick={handleGame} />
                         <h2 className="mt-2 text-gray-800">Rock</h2>
                    </div>
                    <div className="flex flex-col items-center min-w-[150px] m-auto text-center cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110">
                         <FaRegHandPaper className="text-[5rem] text-blue-700" id="paper" onClick={handleGame} />
                         <h2 className="mt-2 text-gray-800">Paper</h2>
                    </div>
                    <div className="flex flex-col items-center min-w-[150px] m-auto text-center cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110">
                         <FaRegHandScissors className="text-[5rem] text-blue-700" id="scissors" onClick={handleGame} />
                         <h2 className="mt-2 text-gray-800">Scissors</h2>
                    </div>
               </div>


               <div className="flex justify-center gap-16 my-8">
                    <div className="text-center scores__user">
                         <h1 className="text-5xl text-green-700">{userScore}</h1>
                         <h2>Player</h2>
                    </div>
                    <div className="text-center scores__computer">
                         <h1 className="text-5xl text-green-700">{computerScore}</h1>
                         <h2>Computer</h2>
                    </div>
               </div>

               <div className="my-4 message">
                    <p className="text-xl font-semibold" style={{ color: messageColor }}>{message}</p>
               </div>

               <button
                    className="bg-red-600 hover:bg-red-400 cursor-pointer text-white px-8 py-3 text-base rounded-lg mt-4 transition duration-300"
                    onClick={resetGame}
               >
                    Reset
               </button>
          </div>
     );
}
