import React from 'react'
import { Link } from 'react-router-dom'
import { IMG_LINK } from '../constant/constant'

const Header = () => {
  const {token, role="user"} = JSON.parse(localStorage.getItem('data'))
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link className="flex items-center">
            <img src={IMG_LINK} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
          </Link>
          <div className="flex items-center lg:order-2">
            {token ? (
              <Link to="/logout" className="btn-blue bg-red-600 rounded-lg py-2 mr-2">Log out</Link>
            ) : (<><Link to="/login" className="btn-blue rounded-lg py-2 mr-2">Log in</Link>
              <Link to="/signup" className="btn-blue rounded-lg py-2">Sign up</Link></>)}
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
                <Link to="/team" className="header-link">Team</Link>
              </li>
              <li>
                <Link to="/contact" className="header-link">Contact</Link>
              </li>
              <li>
                <Link to="/todo" className="header-link">To Do</Link>
              </li>
              <li>
                <Link to="/hook" className="header-link">Hooks</Link>
              </li>
              {(token && role === 'user') ? (
              <li>
                <Link to="/profile" className="header-link">Profile</Link>
              </li>
              ) : (
                <li>
                  <Link to="/profile" className="header-link">Admin</Link>
                </li>
              )}
              
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header