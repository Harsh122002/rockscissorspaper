import React from 'react';

export default function HowToPlay() {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-xl mx-auto my-8 text-center">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4">How to Play</h2>
      <ul className="list-disc list-inside text-left text-gray-700 text-lg space-y-2">
        <li>Choose one of the three options: Rock, Paper, or Scissors.</li>
        <li>The winner is determined by the rules below.</li>
        <li>Click on the icon to select your choice.</li>
        <li>Once you have made your choice, the game will randomly select a choice for the computer.</li>
        <li>The winner will be displayed on the screen.</li>
      </ul>
    </div>
  );
}
