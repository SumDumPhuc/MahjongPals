import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <div className='hero-btns'>
      <Button
          className='btns'
          buttonStyle='btn--numberone'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          PLAY NOW
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--numberone'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          SIGN IN
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;