import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IMG_LINK } from '../constant/constant';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const navigate = useNavigate();
  const { logout, isAuthenticated, userRole } = useAuth();

  // State to control dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Toggle the dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link className="flex items-center">
            <img src={IMG_LINK} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
          </Link>
          <div className="flex items-center lg:order-2">
            

            {/* Dropdown Button */}
            <span>
              <button
                onClick={toggleDropdown}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-3"
                type="button"
              >
                Hooks
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path stroke="currentColor" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div
                  id="dropdown"
                  className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700"
                >
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  {isAuthenticated ? (
                      <Link onClick={handleLogout} className="block px-4 py-2 hover:bg-gray-100 text-red-700">Log out</Link>
                    ) : (
                      <>
                        <li><Link to="/login" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Log in</Link></li>
                       <li> <Link to="/signup" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign up</Link></li>
                      </>
                    )}
                   
                    <li>
                      <Link to="/todo" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        To Do
                      </Link>
                    </li>
                    <li>
                      <Link to="/hook" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Hook
                      </Link>
                    </li>

                  </ul>
                </div>
              )}
            </span>
          </div>
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link to="/" className="header-link" aria-current="page">Home</Link>
              </li>
              <li>
                <Link to="/about" className="header-link">About</Link>
              </li>

              <li>
                <Link to="/contact" className="header-link">Contact</Link>
              </li>

              {isAuthenticated ? (
                userRole === 'user' ? (
                  <li>
                    <Link to="/profile" className="header-link">Profile</Link>
                  </li>
                ) : (
                  <li>
                    <Link to="/profile" className="header-link">Admin</Link>
                  </li>
                )
              ) : ("")}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
