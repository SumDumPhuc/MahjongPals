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
import AllChow from '../../images/AllChow.jpg';
import AllPong from '../../images/AllPong.jpg';
import HalfColor from '../../images/HalfColor.jpg';
import FullColor from '../../images/FullColor.jpg';
import Half19 from '../../images/Half19.jpg';
import Full19 from '../../images/Full19.jpg';
import ThirteenWonders from '../../images/13Wonders.jpg';

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
    <h3 style={{ marginTop: '10px', marginBottom: "10px"}}>A game of mahjong is where tiles are distributed to the players and the game is played until a players declares Mahjong or the unused tiles run out and the game is over (nobody wins). A round of mahjong is made up of many games. At the beginning of the mahjong round a banker is determined usually by rolling the dice. When a player has Mahjong or the tiles run out and someone has declared a KONG, the banker position rotates to the player to the right (counterclockwise) of the banker of the previous game, otherwise the banker remains the same. A mahjong round is complete when the banker position has rotated around the table four times.</h3>

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
    <h3 style={{ marginTop: '10px', marginBottom: "10px"}}>When a tile is discarded, any other player may decide that they would like to win the game using that tile. If more than one person can win the game using that discarded tile then the person closest to the right hand side of the player (counterclockwise from the player) who discarded the tile will have priority and win the game. Further, the WIN move has priority over the KONG, PONG, and CHOW moves. A player may not use a discarded tile to win if that same tile was discarded previously and was not used by that player after that players last move. A players last move is defined by any new tile, chow, pong, or kong that was performed by the player. A player may not win on a tile that they last discarded. If a player picks a new tile and wants to win the game, they may do so. To win the game a player must have a valid Mahjong combination and have the minimum number of Tai to win the game. (more on Tais below).</h3>

    <h2 style={{ marginTop: '20px', textDecoration: 'underline' }}>CHOW MOVE</h2>
    <h3 style={{ marginTop: '10px', marginBottom: "10px"}}>When a tile is discarded, the player to the right of the player who discarded may choose to CHOW the tile. When a player CHOW's a discarded tile, the discarded tile plus two tiles from the players concealed tiles are moved to that players exposed tiles. The WIN, KONG, and PONG moves have priority over the CHOW move. If the user decides to CHOW there may be multiple ways of obtaining the CHOW, so they have to display the tiles that they want to use to CHOW. A player may not CHOW on a tile that he last discarded.</h3>

    <h2 style={{ marginTop: '20px', textDecoration: 'underline' }}>PONG MOVE</h2>
    <h3 style={{ marginTop: '10px', marginBottom: "10px"}}>When a tile is discarded, any other player may decide that they would like to PONG using that tile. When a player PONG's a discarded tile, the discarded tile plus two tiles from the players concealed tiles are moved to that players exposed tiles. A player may not use a discarded tile to PONG if that same tile was discarded previously and was not used by that player after that players last move. A players last move is defined by any new tile, chow, pong, or kong that was performed by the player. A player may not PONG on a tile that they last discarded. The WIN and KONG moves have priority over the PONG move.</h3> 

    <h2 style={{ marginTop: '20px', textDecoration: 'underline' }}>KONG MOVE</h2>
    <h3 style={{ marginTop: '10px', marginBottom: "10px"}}>When a tile is discarded and a player has 3 of the same tiles in the concealed tiles, the player may declare a KONG. When this happens, the 3 concealed tiles and the discarded tile is moved to the players exposed tiles and the player will pick a replacement tile from the opposite side of the remaining tiles.
    </h3>

    <h3 style={{ marginTop: '10px', marginBottom: "10px"}}>
    When a new tile is picked by a player, and that player has 3 of the same tiles in the exposed tiles, that player may declare a KONG move by clicking the KONG button. When this happens the new picked tile in the concealed tiles is transferred to the exposed tiles and the player will pick a replacement tile. Note, when a player performs this type of Kong, the tile that is put in the exposed tiles is treated as a discard for that moment. Any other player can use that tile to win the game if they are able. This is called Robbing the Kong.
    </h3>

    <h3 style={{ marginTop: '10px', marginBottom: "10px"}}>
    When a new tile is picked by a player, and there are 4 of the same tiles in that players concealed tiles, that player may declare a KONG move by clicking the KONG button. When this happens, the 4 concealed tiles used for the Kong are transferred to the exposed tiles and the player will pick a replacement tile. 
    </h3>  

    <h2 style={{ marginTop: '20px', textDecoration: 'underline' }}>NEXT MOVE</h2>
    <h3 style={{ marginTop: '10px', marginBottom: "10px"}}>If a player does not want to use the discarded tile, the NEXT MOVE button is selected and play will proceed.
    </h3> 

    <h2 style={{ marginTop: '20px', textDecoration: 'underline' }}>End of Game</h2>
    <h3 style={{ marginTop: '10px', marginBottom: "10px"}}>The game is finished when someone wins the game or when there are 15 tiles left. When a player picks the last remaining new tile in play, it may be used to win the game or perform a Kong. It also can be used to complete an animal or flower set. However that player is not required to discard any tiles after the last tile has been taken. After the last tile has been taken a replacement tile for a Kong, Flower or Animal will not be taken.
    </h3> 

    <h2 style={{ marginTop: '20px', textDecoration: 'underline' }}>Types of Winning Hands</h2>

    <h2 style={{ marginTop: '20px', textDecoration: 'underline' }}>All CHOW Hand</h2>
    <h3 style={{ marginTop: '10px', marginBottom: "10px"}}>In Singapore Mahjong the rules for All Chow game are very unique and different from other types of Mahjong. To have an All Chow game the following criteria must be meet;
    </h3>   
    <h3 style={{ marginTop: '5px', marginBottom: "5px"}}>1. The EYE cannot be a Dragon Tile or the Prevailing Wind or the Players Wind for that game.
    </h3>   
    <h3 style={{ marginTop: '5px', marginBottom: "5px"}}>2. The tiles must be made up of one EYE and four CHOWs.</h3>   
    <h3 style={{ marginTop: '5px', marginBottom: "5px"}}>3. If the player wins the game on a discarded tile, there must be more than one unique tile that could have caused the player to win the game (get mahjong).
    </h3>  

    <div className='image-container'>
    <img src={ AllChow } alt="" style={{
          width: '700px', 
          height: 'auto', 
        }} /> 
    <p style={{ color: 'blue' }} className='image-message'></p>
    </div>

    <h2 style={{ marginTop: '20px', textDecoration: 'underline' }}>Ping Hu Hand</h2>
    <h3 style={{ marginTop: '10px', marginBottom: "10px"}}>A Ping Wu game is an All Chow game with no tiles of the flower suit or animal suit in the players exposed tiles.
    </h3>   

    <h2 style={{ marginTop: '20px', textDecoration: 'underline' }}>All PONG Hand</h2>
    <h3 style={{ marginTop: '10px', marginBottom: "10px"}}>To have an All Pong game the tiles must be made of an EYE and four PONG's and or KONG's.
    </h3>    

    <div className='image-container'>
    <img src={ AllPong } alt="" style={{
          width: '700px', 
          height: 'auto', 
        }} /> 
    <p style={{ color: 'blue' }} className='image-message'></p>
    </div>

    <h2 style={{ marginTop: '20px', textDecoration: 'underline' }}>Half Color Hand</h2>
    <h3 style={{ marginTop: '10px', marginBottom: "10px"}}>To have a Half Color game, the tiles must be made of the either the Bamboo suit, the Circle Suit, or Numbers Suit combined with tiles from the Honor Suit (Winds and Dragons).
    </h3>    

    <div className='image-container'>
    <img src={ HalfColor } alt="" style={{
          width: '700px', 
          height: 'auto', 
        }} /> 
    <p style={{ color: 'blue' }} className='image-message'></p>
    </div>

    <h2 style={{ marginTop: '20px', textDecoration: 'underline' }}>Full Color Hand</h2>
    <h3 style={{ marginTop: '10px', marginBottom: "10px"}}>To have a Full Color game, the tiles must be made of the either the Bamboo suit only, the Circle Suit only, the Numbers Suit only, or the Honor Suit only.
    </h3>    

    <div className='image-container'>
    <img src={ FullColor } alt="" style={{
          width: '700px', 
          height: 'auto', 
        }} /> 
    <p style={{ color: 'blue' }} className='image-message'></p>
    </div>  

    <h2 style={{ marginTop: '20px', textDecoration: 'underline' }}>Full One's and Nine's Hand</h2>
    <h3 style={{ marginTop: '10px', marginBottom: "10px"}}>To have an All one's and nine's game, all the tiles must be a combination of one's and nine's only.
    </h3>    

    <div className='image-container'>
    <img src={ Half19 } alt="" style={{
          width: '700px', 
          height: 'auto', 
        }} /> 
    <p style={{ color: 'blue' }} className='image-message'></p>
    </div> 

    <h2 style={{ marginTop: '20px', textDecoration: 'underline' }}>Half One's and Nine's Hand</h2>
    <h3 style={{ marginTop: '10px', marginBottom: "10px"}}>To have a Half one's and nine's game, all the tiles must be a combination of one's and nine's combined with the Honor Suit (Wind Suit and Dragon Suit).
    </h3>    

    <div className='image-container'>
    <img src={ Full19 } alt="" style={{
          width: '700px', 
          height: 'auto', 
        }} /> 
    <p style={{ color: 'blue' }} className='image-message'></p>
    </div> 

    <h2 style={{ marginTop: '20px', textDecoration: 'underline' }}>13 Wonders Hand</h2>
    <h3 style={{ marginTop: '10px', marginBottom: "10px"}}>To have 13 Wonders you must have the one and the nine of the Bamboo suit, the Circle Suit, and the Numbers Suit along with each unique tile in the Honors suit. You must also have an EYE which can be made up of any of the above mentioned tiles.
    </h3>    

    <div className='image-container'>
    <img src={ ThirteenWonders } alt="" style={{
          width: '700px', 
          height: 'auto', 
        }} /> 
    <p style={{ color: 'blue' }} className='image-message'></p>
    </div>  

    <h2 style={{ marginTop: '20px', textDecoration: 'underline' }}>Eight flower suit Hand</h2>
    <h3 style={{ marginTop: '10px', marginBottom: "10px"}}>In the case that a player has all eight Flower Suit tiles that person automatically wins the game regardless of their other tiles. If a player has seven Flower Suit tiles and another player picks the eighth and last Flower Suit tile, this eighth Flower Suit tile is automatically transferred to the player with seven Flower Suit tiles and that player automatically wins the game regardless of whether they have a valid mahjong combination.
    </h3>    

    <h2 style={{ marginTop: '20px', textDecoration: 'underline' }}>Da San Yuan Hand</h2>
    <h3 style={{ marginTop: '10px', marginBottom: "10px"}}>In the case where a player has a Pong or Kong of all the 3 dragons tiles they will automatically win the game regardless of whether they have a valid mahjong combination.
    </h3>   

    <h2 style={{ marginTop: '20px', textDecoration: 'underline' }}>Da Si Xi Hand</h2>
    <h3 style={{ marginTop: '10px', marginBottom: "10px"}}>In the case where a player has a Pong or Kong of all the 4 wind tiles they will automatically win the game regardless of whether they have a valid mahjong combination.
    </h3>

    <h2 style={{ marginTop: '20px', textDecoration: 'underline' }}>What is a Tai?</h2>
    <h3 style={{ marginTop: '10px', marginBottom: "10px"}}>A Tai is something that will double the number of points that can be won for that particular game. Tai values are assigned to different tiles, tile combinations, and unique winning games. Tai values add together, such that if there are three tiles that are worth one Tai a piece, the player has a total of three Tai. Only the winning player for each game gets credit for the Tai that they have at the end of the game.
    </h3>

    <h2 style={{ marginTop: '20px', textDecoration: 'underline' }}>How to gain Tai?</h2>
    <h3 style={{ marginTop: '10px', marginBottom: "10px"}}>There are many ways to get Tais during each game. Below is a list of the different ways and the values assigned to each way.

    <h4 style={{ marginTop: '5px', marginBottom: "5px"}}>A Pong or Kong of any the Dragon Tiles - 1 Tai for each
    </h4>
    <h4 style={{ marginTop: '5px', marginBottom: "5px"}}>A Pong or Kong of the Prevailing Wind for that game - 1 Tai
    </h4>   
    <h4 style={{ marginTop: '5px', marginBottom: "5px"}}>A Pong or Kong of the Player Game Wind for that game - 1 Tai
    </h4>   
    <h4 style={{ marginTop: '5px', marginBottom: "5px"}}>All Chow Game - 1 Tai
    </h4>   
    <h4 style={{ marginTop: '5px', marginBottom: "5px"}}>Ping Wu Game - 4 Tai
    </h4>   
    <h4 style={{ marginTop: '5px', marginBottom: "5px"}}>All Pong Game - 2 Tai
    </h4>   
    <h4 style={{ marginTop: '5px', marginBottom: "5px"}}>Half Color Game - 2 Tai
    </h4>   
    <h4 style={{ marginTop: '5px', marginBottom: "5px"}}>Full Color Game - 4 Tai
    </h4>    
    <h4 style={{ marginTop: '5px', marginBottom: "5px"}}>All one's and nine's game - 5 Tai (Limit number of Tai)
    </h4>
    <h4 style={{ marginTop: '5px', marginBottom: "5px"}}>Half one's and nine's game - 1 Tai (some people play 2 Tai)
    </h4>
    <h4 style={{ marginTop: '5px', marginBottom: "5px"}}>13 Wonders Game - 5 Tai (Limt number of Tai)
    </h4>
    <h4 style={{ marginTop: '5px', marginBottom: "5px"}}>Animal Suit tiles - 1 Tai for each
    </h4>
    <h4 style={{ marginTop: '5px', marginBottom: "5px"}}>Complete set of the Animal Suit - 1 extra Tai (5 Tai total)
    </h4>
    <h4 style={{ marginTop: '5px', marginBottom: "5px"}}>Flower Suit tiles that match the Players Wind - 1 Tai for each
    </h4>
    <h4 style={{ marginTop: '5px', marginBottom: "5px"}}>Complete set of Red Flower Suit - 1 extra Tai (2 Tai total)
    </h4>
    <h4 style={{ marginTop: '5px', marginBottom: "5px"}}>Complete set of Black Flower Suit - 1 extra Tai (2 Tai total)
    </h4>
    <h4 style={{ marginTop: '5px', marginBottom: "5px"}}>Picking the winning tile after a flower suit or animal suit with a replacement tile - 1 Tai
    </h4>
    <h4 style={{ marginTop: '5px', marginBottom: "5px"}}>Picking the winning tile after a flower suit or animal suit with a replacement tile - 1 Tai
    </h4>
    <h4 style={{ marginTop: '5px', marginBottom: "5px"}}>Picking the winning tile on the last valid tile left in the game - 1 Tai
    </h4>
    <h4 style={{ marginTop: '5px', marginBottom: "5px"}}>Winning the game on a tile when another player performs a One Concealed Tile Kong (Robbing the Kong) - 1 Tai
    </h4>
    <h4 style={{ marginTop: '5px', marginBottom: '5px'}}>Winning the game with seven or eight flower suit tiles - 5 Tai (Limit number of Tai)
    </h4>
    <h4 style={{ marginTop: '5px', marginBottom: '5px'}}>Winning the game with a pong and/or a kong of each of the Dragon Tiles - 2 extra Tai (Limt number of Tai)
    </h4>
    <h4 style={{ marginTop: '5px', marginBottom: '5px'}}>Winning the game with a pong and/or a kong of each of the Wind Tiles - 3 extra Tai (Limt number of Tai)
    </h4>
    <h4 style={{ marginTop: '5px', marginBottom: '5px'}}>Winning the game with a pong and/or a kong of two of the three Dragon Tiles and having the third Dragon tile as the EYE - 1 extra Tai (3 Tai total)
    </h4>
    <h4 style={{ marginTop: '5px', marginBottom: '5px'}}>Winning the game with a pong and/or a kong of three of the four Dragon Tiles and having the third Dragon tile as the EYE - 4 Tai total
    </h4>
    </h3>
    </div>
    </>
  );
}

export default Rules