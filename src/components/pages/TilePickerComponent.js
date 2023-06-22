import React, { Component } from 'react';
import {
    MahjongTilePicker,
    Tile
} from "./MahjongTilePicker"; 
import './MahjongTilePicker.css';

class TilePickerComponent extends Component {
  componentDidMount() {
    // Call the MahjongTilePicker code here
    const pickers = []; // Array to store tile pickers

    for (var i = 0; i < 14; i++) {
      var picker = new MahjongTilePicker("parentHtmlElementId");
      pickers.push(picker); // Store each tile picker in the array

      console.log(picker.getTile()); // initially null
      picker.pickTile(Tile.Back);
      console.log(picker.getTile()); // should be Tile.Back
    }
  }

  render() {
    return (
      <div>
        <div id="parentHtmlElementId"></div>
      </div>
    );
  }
}

export default TilePickerComponent;
