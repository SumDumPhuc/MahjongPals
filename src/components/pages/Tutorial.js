import React, { useState } from 'react';
import backgroundImage from '../../images/mahjongWalls.jpg.webp';
import TutorialScreen3 from '../../images/TutorialScreen3.png';
import TutorialScreen4 from '../../images/TutorialScreen4.png'
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
    title: 'Action',
    content: 'As the dealer, you will be the first to discard, choose a card to discard and the action will move to the next player. From the previous hand, we discarded the Red Dragon, your updated hand is shown below.',
    image: TutorialScreen4,
  },
  {
    title: 'Fifth Screen',
    content: 'This is the fifth screen.',
  },
  {
    title: 'Sixth Screen',
    content: 'This is the sixth screen.',
  },
  {
    title: 'Seventh Screen',
    content: 'This is the seventh screen.',
  },
  {
    title: 'Eighth Screen',
    content: 'This is the eighth screen.',
  },
  {
    title: 'Ninth Screen',
    content: 'This is the ninth screen.',
  },
  {
    title: 'Tenth Screen',
    content: 'This is the tenth screen.',
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