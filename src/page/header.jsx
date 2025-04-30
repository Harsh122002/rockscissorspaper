import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <nav className="bg-yellow-100 px-4 h-20 flex items-center justify-between shadow-md relative z-50">
      <h1 className="text-purple-600 font-bold text-xl">Rock-Paper-Scissors</h1>

      {/* Show username if logged in */}
      {user && (
        <div className="hidden sm:block text-green-800 font-semibold text-sm mr-4">
          Welcome, {user.name}
        </div>
      )}

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-6">
        <ul className="flex gap-6 list-none m-0 p-0">
          <li><a href="/" className="text-gray-800 font-medium hover:underline">Home</a></li>
          <li><a href="/rule" className="text-gray-800 font-medium hover:underline">Rules</a></li>
          <li><a href="/howtoplay" className="text-gray-800 font-medium hover:underline">How to play</a></li>
        </ul>
        {user ? (
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={handleLogin}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
          >
            Login
          </button>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="sm:hidden text-3xl text-gray-800"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-yellow-100 sm:hidden flex flex-col items-center py-4 shadow-md z-40">
          {user && (
            <div className="text-green-800 font-semibold mb-2">Welcome, {user.name}</div>
          )}
          <Link href="/" className="py-2 text-gray-800 font-medium hover:underline">Home</Link>
          <Link href="/rule" className="py-2 text-gray-800 font-medium hover:underline">Rules</Link>
          <Link href="/howtoplay" className="py-2 text-gray-800 font-medium hover:underline">How to play</Link>
          {user ? (
            <button
              onClick={handleLogout}
              className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={handleLogin}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
            >
              Login
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
