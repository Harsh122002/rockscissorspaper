import React from 'react';

export default function Rule() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto my-8 text-center">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Rules</h2>
      <ul className="list-disc list-inside text-gray-700 text-lg space-y-2 text-left">
        <li>Rock beats Scissors</li>
        <li>Scissors beats Paper</li>
        <li>Paper beats Rock</li>
      </ul>
    </div>
  );
}
