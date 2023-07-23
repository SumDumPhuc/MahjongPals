import React, { useState } from 'react';
import backgroundImage from '../../images/mahjongWalls.jpg.webp';
import TutorialScreen3 from '../../images/TutorialScreen3.png';
import TutorialScreen4 from '../../images/TutorialScreen4.png'
import TutorialScreen5 from '../../images/TutorialScreen5.png'
import TutorialScreen6 from '../../images/TutorialScreen6.png'
import TutorialScreen7 from '../../images/TutorialScreen7.png'
import TutorialScreen8 from '../../images/TutorialScreen8.png'
import TutorialScreen9 from '../../images/TutorialScreen9.png'



import './Tutorial.css'; // Import the CSS file

const screens = [
  {
    title: 'Welcome to the MahjongPals Tutorial!',
    content: 'Teaching you the basics of Singaporean Mahjong',
  },
  {
    title: 'Set up:',
    content: 'In this Tutorial, you start as the dealer. Roll the dice and count anti-clockwise, stopping at the number rolled. Tiles are then distributed 4 by 4 to each player in the same direction. Each player will receive 13 tiles while you receive 14.',
  },
  {
    title: 'Now you are ready to start the game!',
    content: 'Take out any flower tiles you might have, replenish from the flower stack and arrange your hand by suits in ascending order. Your hand can be seen below.',
    image: TutorialScreen3,
  },
  {
    title: 'Gameplay - Start',
    content: 'As the dealer, you will be the first to discard, choose a card to discard and the action will move to the next player. From the previous hand, we discarded the Red Dragon, your updated hand is shown below.',
    image: TutorialScreen4,
  },
  {
    title: 'Gameplay - Chi',
    content: 'Gameplay then reaches the player on your left. The player throws the 7 ball tile, you will be able to "Chi" this tile, putting down the completed set. Afterwards, a tile has to be discarded.',
    image: TutorialScreen5,
  
  },
  {
    title: 'Gameplay - Pong',
    content: 'Gameplay reaches the player on your right. The player throws the 1 ball tile, you will be able to "Pong" this tile, putting down the completed set. Afterwards, a tile has to be discarded.',
    image: TutorialScreen6,
  },
  {
    title: 'Gameplay - Gang',
    content: 'The next player throws the 3 bamboo tile, you will be able to "Gang" this tile, putting down the set. Afterwards, a tile is drawn from the flower pile and a tile has to be discarded.',
    image: TutorialScreen7,
  },
  {
    title: 'Gameplay - Hu',
    content: 'A player throws the East Wind tile, you are now able to win the round! Say the words "Hu!", lay down all your tiles and collect your winnings from the player.',
    image: TutorialScreen8,
  },
  {
    title: 'End of Tutorial',
    content: 'Congratulations! You have come to the end of the tutorial.',
    image: TutorialScreen9,
  },
 
];

function Tutorial() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const handleNextScreen = () => {
    setCurrentScreen((prevScreen) => prevScreen + 1);
  };

  const handleResetTutorial = () => {
    setCurrentScreen(0);
  };

  return (
    <div className="tutorial-container">
      {currentScreen < 2 && (
        <div className="image-container-tutorial">
          <img
            src={backgroundImage}
            alt="Mahjong Tutorial"
            className="image-tutorial"
          />
        </div>
      )}
      <div className="button-container-tutorial">
        <h1>{screens[currentScreen].title}</h1>
        <p>{screens[currentScreen].content}</p>
        {currentScreen === 0 ? (
          <button onClick={handleNextScreen} className="tutorial-button">
            Start Tutorial!
          </button>
        ) : (
          <>
            {currentScreen >= 2 && (
              <div className="screen-container">
                <img
                  src={screens[currentScreen].image}
                  alt="Mahjong gameplay screenshot"
                  className="image-in-screens"
                />
              </div>
            )}
            <div className="button-group">
              <button onClick={handleResetTutorial} className="tutorial-button">
                Reset Tutorial
              </button>
              {currentScreen < screens.length - 1 && (
                <button onClick={handleNextScreen} className="tutorial-button">
                  Next
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Tutorial;