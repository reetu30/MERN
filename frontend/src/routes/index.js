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
import { AuthProvider } from '../components/context/AuthContext';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../components/Profile/Dashboard';
import Unauthorized from './Unauthorized'

const Navigation = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/hook" element={<UseStateHook />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          
          {/* Use element with PrivateRoute and pass the component directly */}
          <Route 
            path="/dashboard" 
            element={<PrivateRoute element={<Dashboard />} roleRequired="admin" />} 
          />
          <Route 
            path="/profile" 
            element={<PrivateRoute element={<Profile />} roleRequired="user" />} 
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default Navigation