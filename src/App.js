import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Rules from './components/pages/Rules';
import Quiz from './components/pages/Quiz';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import Forum from './components/pages/Forum';
import Calculator from './components/pages/Calculator';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
         <Route path='/' exact element={<Home/>} />
         <Route path='/rules' element={<Rules/>} />
         <Route path='/quiz' element={<Quiz/>} />
         <Route path='/forum' element={<Forum/>} /> 
         <Route path='/sign-up' element={<SignUp/>} /> 
         <Route path='/sign-in' element={<SignIn/>} />
         <Route path='/calculator' element={<Calculator/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
