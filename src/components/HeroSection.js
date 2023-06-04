import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <div className='hero-btns'>
      <Button 
      className="btns"
      buttonStyle="btn--numberone"
      buttonSize="btn--large"
      to="/sign-up"
      >
      SIGN UP
      </Button>

      <Button
      className="btns"
      buttonStyle="btn--numberone"
      buttonSize="btn--large"
      to="/sign-in"
      >
      SIGN IN
      </Button>
      </div>
    </div>
  );
}

export default HeroSection;