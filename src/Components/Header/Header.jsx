import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="flex justify-center space-x-4 p-2 bg-gray-800">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `px-2 py-1 hover:bg-yellow-400 hover:text-white transition ${
            isActive
              ? 'border-blue-500 text-blue-400'
              : 'border-transparent text-white'
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about-me"
        className={({ isActive }) =>
        `px-4 py-2 hover:bg-yellow-400 hover:text-white transition ${
            isActive
              ? 'border-blue-500 text-blue-400'
              : 'border-transparent text-white'
          }`
        }
      >
        About
      </NavLink>
      <NavLink
        to="/skills"
        className={({ isActive }) =>
        `px-4 py-2 hover:bg-yellow-400 hover:text-white transition${
            isActive
              ? 'border-blue-500 text-blue-400'
              : 'border-transparent text-white'
          }`
        }
      >
        Skills
      </NavLink>
      <NavLink
        to="/project"
        className={({ isActive }) =>
        `px-4 py-2 hover:bg-yellow-400 hover:text-white transition ${
            isActive
              ? 'border-blue-500 text-blue-400'
              : 'border-transparent text-white'
          }`
        }
      >
        Project
      </NavLink>
      <NavLink
        to="/contact-me"
        className={({ isActive }) =>
        `px-4 py-2 hover:bg-yellow-400 hover:text-white transition ${
            isActive
              ? 'border-blue-500 text-blue-400'
              : 'border-transparent text-white'
          }`
        }
      >
        Contact
      </NavLink>
    </nav>
  );
};

export default Header;
