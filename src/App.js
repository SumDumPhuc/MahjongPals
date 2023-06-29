import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Rules from './components/pages/Rules';
import Quiz from './components/pages/Quiz';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import Tutorial from './components/pages/Tutorial';
import TaiCalculator from './components/pages/TaiCalculator';
import ChipCalculator from './components/pages/ChipCalculator';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
         <Route path='/' exact element={<Home/>} />
         <Route path='/tutorial' element={<Tutorial/>} /> 
         <Route path='/rules' element={<Rules/>} />
         <Route path='/quiz' element={<Quiz/>} />
         <Route path='/sign-up' element={<SignUp/>} /> 
         <Route path='/sign-in' element={<SignIn/>} />
         <Route path='/taicalculator' element={<TaiCalculator/>} />
         <Route path='/chipcalculator' element={<ChipCalculator/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
