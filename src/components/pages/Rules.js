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
    <p style={{ color: 'blue' }} className='image-message'>EYE</p>
    </div>

    <h3 style={{ marginTop: '10px', marginBottom: "10px"}}>To win in Mahjong, you must have one EYE and 4 sets of any combination of CHOW's, PONG's, and KONG's. An example of a winning hand is shown below.</h3>

    <div className='image-container'>
    <img src={ Win } alt="" style={{
      width: '700px', 
      height: 'auto', 
    }}/> 
    </div>

    <h2 style={{ marginTop: '20px', textDecoration: 'underline' }}>How to play</h2>
    <h3 style={{ marginTop: '10px', marginBottom: "10px"}}>A game of mahjong is where tiles are distributed to the players and the game is played until a players declares Mahjong (GAME) or the unused tiles run out and the game is over (nobody wins). A round of mahjong is made up of many games. At the beginning of the mahjong round a banker is determined usually by rolling the dice. For the purposes of the computer game the computer user is chosen to be the initial banker. When a player has Mahjong (GAME) or the tiles run out and someone has declared a KONG, the banker position rotates to the player to the right (counterclockwise) of the banker of the previous game, otherwise the banker remains the same. A mahjong round is complete when the banker position has rotated around the table four times.</h3>

    <h2 style={{ marginTop: '20px', textDecoration: 'underline' }}>Prevailing Wind</h2>
    <h3 style={{ marginTop: '10px', marginBottom: "10px"}}>When the mahjong round starts the Prevailing Wind starts at the East position. When the banker position rotates one full time around the table the prevailing wind changes to South, then West, then finally North. After the North prevailing wind the round is complete.</h3>

    <h2 style={{ marginTop: '20px', textDecoration: 'underline' }}>Player Wind</h2>
    <h3 style={{ marginTop: '10px', marginBottom: "10px"}}>During each game, a player is assigned a wind value. This Player Wind value is different from the Prevailing Wind. The banker always has the East Player Wind for that game, and the player to the right of the banker is the South Player Wind. The player to the right of the South Player Wind is the West player Wind, and the player to the right of the West Player Wind is the North player Wind.</h3>

    <h2 style={{ marginTop: '20px', textDecoration: 'underline' }}>Starting the Game</h2>
    <h3 style={{ marginTop: '10px', marginBottom: "10px"}}>The 148 tiles are shuffled and each player selects 13 tiles to start the game. Each player starts with 13 tiles and these tiles are not seen by the other players. These are called the players concealed tiles. If a player has a tile(s) in the animal or flower suit they must put that tile up to show the rest of the players. These tiles remain up for the rest of the game and are referred to as the players exposed tiles. When a player exposes an animal or flower tile, they will take a replacement tile from opposite end of the remaining unused tiles. The player who is the banker for this game will start by taking another tile from the remaining unused tiles. At this point the banker has 14 tiles and must discard a tile. The banker will discard a tile which is then shown to the rest of the players.</h3>

    <h2 style={{ marginTop: '20px', textDecoration: 'underline' }}>Playing the Game</h2>
    <h3 style={{ marginTop: '10px', marginBottom: "10px"}}>When a tile is discarded by a player, the other players have the option of using that tile when it is first discarded. The different options for using discarded tiles are described below. If no one wants to use that discarded tile, the player to the right of the player who discarded picks a new tile and adds it to his concealed tiles. After the player picks a new tile they will discard a tile.</h3>

    <h2 style={{ marginTop: '20px', textDecoration: 'underline' }}>Different Moves</h2> 

    <h2 style={{ marginTop: '20px', textDecoration: 'underline' }}>GAME MOVE</h2>
    <h3 style={{ marginTop: '10px', marginBottom: "10px"}}>When a tile is discarded, any other player may decide that they would like to win the game using that tile. If more than one person can win the game using that discarded tile then the person closest to the right hand side of the player (counterclockwise from the player) who discarded the tile will have priority and win the game. Further, the GAME move has priority over the KONG, PONG, and CHOW moves. A player invokes this move by clicking the GAME button. A player may not use a discarded tile to GAME (win) if that same tile was discarded previously and was not used by that player after that players last move. A players last move is defined by any new tile, chow, pong, or kong that was performed by the player. A player may not GAME on a tile that they last discarded. If a player picks a new tile and wants to win the game, they may do so by clicking the GAME button. To win the game a player must have a valid Mahjong combination and have the minimum number of Fan to win the game. (more on Fans below).</h3>

    <h2 style={{ marginTop: '20px', textDecoration: 'underline' }}>KONG MOVE</h2>
    <h3 style={{ marginTop: '10px', marginBottom: "10px"}}>When a tile is discarded and a player has 3 of the same tiles in the concealed tiles, the player may declare a KONG move by clicking the KONG button. When this happens, the 3 concealed tiles and the discarded tile is moved to the players exposed tiles and the player will pick a replacement tile from the opposite side of the remaining tiles.
    </h3>

    <h3 style={{ marginTop: '10px', marginBottom: "10px"}}>
    When a new tile is picked by a player, and that player has 3 of the same tiles in the exposed tiles, that player may declare a KONG move by clicking the KONG button. When this happens the new picked tile in the concealed tiles is transferred to the exposed tiles and the player will pick a replacement tile. Note, when a player performs this type of Kong, the tile that is put in the exposed tiles is treated as a discard for that moment. Any other player can use that tile to win the game if they are able. This is called Robbing the Kong.
    </h3>

    <h3 style={{ marginTop: '10px', marginBottom: "10px"}}>
    When a new tile is picked by a player, and there are 4 of the same tiles in that players concealed tiles, that player may declare a KONG move by clicking the KONG button. When this happens, the 4 concealed tiles used for the Kong are transferred to the exposed tiles and the player will pick a replacement tile. If a player invokes the KONG move and more than one KONG move is possible, the player must click on the tile that they wish to KONG.
    </h3>  




    </div>
    </>
  );
}

export default Rules