import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Rules from './components/pages/Rules';
import Quiz from './components/pages/Quiz';
import Leaderboard from './components/pages/Leaderboard';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
         <Route path='/' exact element={<Home/>} />
         <Route path='/rules' element={<Rules/>} />
         <Route path='/quiz' element={<Quiz/>} />
         <Route path='/leaderboard' element={<Leaderboard/>} />
         <Route path='/sign-up' element={<SignUp/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
