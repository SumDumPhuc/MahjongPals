import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Rules from './components/pages/Rules';
import Quiz from './components/pages/Quiz';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import Leaderboard from './components/pages/Leaderboard';
import PlayNow from './components/pages/PlayNow';
import Profile from './components/pages/Profile';


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
         <Route path='/sign-in' element={<SignIn/>} />
         <Route path='/profile' element={<Profile/>} />
         <Route path='/play-now' element={<PlayNow/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
