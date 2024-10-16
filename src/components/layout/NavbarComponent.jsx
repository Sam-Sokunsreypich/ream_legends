import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
// import nav_bg from './src/assets/nav_bg.jpg'
// import Logo_name from './src/assets/Logo_name.png'

export default function NavbarComponent() {
  // State to manage the dropdown menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <nav className=" border-gray-200 font-englishFont"  style={{ backgroundImage: `url('./assets/nav_bg.jpg')` }}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        {/* Logo/Home Link */} 
        <Link to="/" className="flex items-center flex-col space-x-3 rtl:space-x-reverse">
          <img src="./assets/Logo_name.png" className="h-10 md:h-16 md:pl-4" alt="Logo" />
          <small className="text-gray-50">-Game x Education-</small>
          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Ream Legends</span> */}
        </Link>

        {/* Right Side Buttons */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {/* <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Play Now
          </button> */}

          {/* Hamburger Menu for Small Screens */}
          <button
            onClick={toggleMenu} // Toggle menu on click
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-blue-700 dark:focus:ring-yellow-600"
            aria-controls="navbar-cta"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Main Navigation Menu */}
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'}`} // Show/hide based on state
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:border-gray-700">
            <li>
              <NavLink
                to="/story"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 md:p-0 md:text-xl text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                    : "block py-2 px-3 md:p-0 md:text-xl text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }
              >
                Story
              </NavLink>
            </li>
            
            <li>
              <NavLink
                to="/character"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 md:p-0 md:text-xl text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                    : "block py-2 px-3 md:p-0 md:text-xl text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }
              >
                Character
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/userinterface"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 md:p-0 md:text-xl text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                    : "block py-2 px-3 md:p-0 md:text-xl text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }
              >
                User Interface
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aboutus"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 md:p-0 md:text-xl text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                    : "block py-2 px-3 md:p-0 md:text-xl text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }
              >
                AboutUs
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
