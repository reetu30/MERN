import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../components/Pages/Home';
import About from '../components/Pages/About';
import Contact from '../components/Pages/Contact';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Team from '../components/Pages/team';
import Login from '../components/Auth/Login';
import SignUp from '../components/Auth/SignUp';
import TodoList from '../components/Todo/todo-list';
import UseStateHook from '../components/hooks/useStateHook';
import Profile from '../components/Profile/Profile';

const Navigation = () => {
  const {token} = JSON.parse(localStorage.getItem('data'))
  
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/todo" element={<TodoList/>} />
          <Route path="/hook" element={<UseStateHook/>} />
            {token ? (
              <Route path="/profile" element={<Profile/>} />
            ): (
              <Route path="/login" element={<Login/>} />,
              <Route path="/signup" element={<SignUp/>} />
            )}

          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default Navigation