import React from 'react';
import CircleSuit from '../../images/CircleSuit.jpg';
import BambooSuit from '../../images/BambooSuit.jpg';
import NumbersSuit from '../../images/NumbersSuit.jpg';
import FlowersSuit from '../../images/FlowersSuit.jpg';
import AnimalsSuit from '../../images/AnimalsSuit.jpg';
import HonoursSuit from '../../images/HonoursSuit.jpg';
import Chow from '../../images/Chow.jpg';
import Pong from '../../images/Pong.jpg';
import Kong from '../../images/Kong.jpg';
import Eye from '../../images/Eye.jpg';
import Win from '../../images/Win.jpg';

import './Rules.css';

function Rules() {
  return (
    <>
    <div className='container' style={{ marginLeft: '15px'}}>
    <h1 className='text-center' style={{ textDecoration: 'underline' }}>Rules for Singapore Mahjong</h1>
    <h2 style={{ marginTop: '20px', textDecoration: 'underline' }}>Bamboo, Circle and Numbers sets</h2>
    <h3 style={{ marginTop: '10px', marginBottom: "10px"}}>There are 36 tiles each of the Circle, Bamboo, and Numbers set. Each one of these sets has numerical tiles ranging from one to nine containing 4 tiles for each number in the suit. </h3>
    <div className='image-container'>
    <img src={ CircleSuit } alt="Circle Set" /> 
    <p style={{ color: 'blue' }} className='image-message'>Circle Set</p>
    </div>
    <div className='image-container'>
    <img src={ BambooSuit } alt="Bamboo Set" /> 
    <p style={{ color: 'blue' }} className='image-message'>Bamboo Set</p>
    </div>
    <div className='image-container'>
    <img src={ NumbersSuit } alt="Numbers Set" /> 
    <p style={{ color: 'blue' }} className='image-message'>Numbers Set</p>
    </div>

    <h2 style={{ marginTop: '20px', textDecoration: 'underline' }}>Dragon Set and Winds Set</h2>
    <h3 style={{ marginTop: '10px', marginBottom: "10px"}}>There are three tiles within the dragon suit (Green, Red and White Dragon) with each unique tile having four tiles each. There are four tiles within the wind suit (North, South, East, and West Wind) with each tile having four tiles each as well.</h3>

    <div className='image-container'>
    <img src={ HonoursSuit } alt="" /> 
    <p style={{ color: 'blue' }} className='image-message'>Dragon Set and Winds Set</p>
    </div>

    <h2 style={{ marginTop: '20px', textDecoration: 'underline' }}>Flowers</h2>
    <h3 style={{ marginTop: '10px', marginBottom: "10px"}}>There are 2 sets of flower tiles called the Flower Suit and the Seasons Suit with each set containing tiles numbered from 1 to 4. The complete set of flower tiles are shown below.</h3>

    <div className='image-container'>
    <img src={ FlowersSuit } alt="" style={{
          width: '400px', 
          height: 'auto', 
        }} /> 
    <p style={{ color: 'blue' }} className='image-message'></p>
    </div>

    <h2 style={{ marginTop: '20px', textDecoration: 'underline' }}>Animals</h2>
    <h3 style={{ marginTop: '10px', marginBottom: "10px"}}>There are 4 animal tiles with each one displaying a unique animal. The animal set is shown below.</h3>

    <div className='image-container'>
    <img src={ AnimalsSuit } alt="" style={{
          width: '300px', 
          height: 'auto', 
        }}/> 
    <p style={{ color: 'blue' }} className='image-message'>Animals</p>
    </div>

    <h2 style={{ marginTop: '20px', textDecoration: 'underline' }}>Mahjong Combinations</h2>
    <h3 style={{ marginTop: '10px', marginBottom: "10px"}}>A CHOW contains 3 tiles in numerical sequence of the same suit. For example a 1, 2, 3 of the Numbers Suit (shown below) is considered a CHOW. The Honor Suit Tiles, Flower Suit Tiles and Animal Tiles cannot be used in a CHOW.</h3>

    <div className='image-container'>
    <img src={ Chow } alt="" style={{
          width: '200px', 
          height: 'auto', 
        }}/> 
    <p style={{ color: 'blue' }} className='image-message'>CHOW</p>
    </div>

    <h3 style={{ marginTop: '10px', marginBottom: "10px"}}>A PONG contains 3 tiles of the same number and suit. An example of a PONG is shown below.
    The Flower Suit Tiles and Animal Tiles cannot be used in a PONG.</h3>

    <div className='image-container'>
    <img src={ Pong } alt="" style={{
          width: '200px', 
          height: 'auto', 
        }}/> 
    <p style={{ color: 'blue' }} className='image-message'>PONG</p>
    </div>

    <h3 style={{ marginTop: '10px', marginBottom: "10px"}}>A KONG contains 4 tiles of the same number and suit. An example of a KONG is shown below.
    The Flower Suit Tiles and Animal Tiles cannot be used in a KONG.</h3>

    <div className='image-container'>
    <img src={ Kong } alt="" style={{
      width: '240px', 
      height: 'auto', 
    }}/> 
    <p style={{ color: 'blue' }} className='image-message'>KONG</p>
    </div>

    <h3 style={{ marginTop: '10px', marginBottom: "10px"}}>An EYE contains 2 tiles of the same number and suit. An example of an EYE is shown below.
    The Flower Suit Tiles and Animal Tiles cannot be used as an EYE.</h3>

    <div className='image-container'>
    <img src={ Eye } alt="" style={{
      width: '120px', 
      height: 'auto', 
    }}/> 
    <p style={{ color: 'blue' }} className='image-message'>Winning</p>
    </div>

    <h3 style={{ marginTop: '10px', marginBottom: "10px"}}>To win in Mahjong, you must have one EYE and 4 sets of any combination of CHOW's, PONG's, and KONG's. An example of a winning hand is shown below.</h3>

    <div className='image-container'>
    <img src={ Win } alt="" style={{
      width: '700px', 
      height: 'auto', 
    }}/> 
    </div>



    </div>
    </>
  );
}

export default Rules