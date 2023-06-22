import './MahjongTilePicker.css';


class MahjongTilePicker {
    constructor(elementId, buttonText = "Pick a tile") {
      this.parentElem = document.getElementById(elementId);
      this.buttonText = buttonText;
      this.tile = null;
      this.lightbox = MahjongTilePickerLightbox.getInstance();
      this.init();
    }
  
    pickTile(tile) {
      this.tile = tile;
      this.updatePreview();
      this.onTilePicked(tile);
    }
  
    getTile() {
      return this.tile;
    }
  
    onTilePicked(tile) {
      console.log(Tile[tile] + " got picked.");
    }
  
    init() {
      this.initDomElements();
      this.initBindings();
    }
  
    initDomElements() {
      this.containerElem = document.createElement("div");
      this.containerElem.className = "mahjong-tile-picker";
      this.initPreviewElem();
      this.parentElem.appendChild(this.containerElem);
    }
  
    initPreviewElem() {
      this.previewElem = document.createElement("img");
      this.previewElem.className = "mahjong-tile-picker-preview";
      this.previewElem.setAttribute("src", MahjongTilePickerHelper.getImagePath(null));
      this.containerElem.appendChild(this.previewElem);
    }
  
    initBindings() {
      this.previewElem.onclick = () => {
        this.lightbox.showForPicker(this);
      };
    }
  
    updatePreview() {
      const imagePath = MahjongTilePickerHelper.getImagePath(this.tile);
      this.previewElem.setAttribute("src", imagePath);
    }
  }
  

  class MahjongTilePickerLightbox {
    constructor() {
      this.initBackgroundElem();
      this.initBoxElem();
      this.initBindings();
    }
  
    static getInstance() {
      if (!this.instance) {
        this.instance = new MahjongTilePickerLightbox();
      }
      return this.instance;
    }
  
    showForPicker(picker) {
      this.selectedPicker = picker;
      this.show();
    }
  
    initBackgroundElem() {
      this.backgroundElem = document.createElement("div");
      this.backgroundElem.className = "mahjong-tile-picker-lightbox-background";
      this.backgroundElem.setAttribute("max-opacity", "0.7");
      document.getElementsByTagName("body")[0].appendChild(this.backgroundElem);
    }
  
    initBoxElem() {
      this.boxElem = document.createElement("div");
      this.boxElem.className = "mahjong-tile-picker-lightbox";
      this.boxElem.setAttribute("max-opacity", "1");
      this.initTileElems();
      document.getElementsByTagName("body")[0].appendChild(this.boxElem);
    }
  
    initTileElems() {
      this.tileElems = [];
      ["W", "T", "S"].forEach((suit) => {
        for (let i = 1; i <= 9; i++) {
          this.initTileElem("tile-" + suit, suit + i);
          if (i === 5) {
            this.initTileElem("tile-" + suit, suit + i + "_red");
          }
        }
      });
      for (let i = Tile.East; i <= Tile.Red; i++) {
        this.initTileElem("tile-Winds", Tile[i]);
      }
      this.initTileElem("tile-Back", "Back");
    }
  
    initTileElem(className, tileName) {
      const tileElem = document.createElement("img");
      tileElem.className = "mahjong-tile " + className;
      tileElem.id = tileName;
      tileElem.setAttribute("src", MahjongTilePickerHelper.getImagePath(Tile[tileName]));
      this.boxElem.appendChild(tileElem);
      this.tileElems.push(tileElem);
    }
  
    initBindings() {
      this.tileElems.forEach((tileElem) => {
        tileElem.onclick = () => {
          const tile = tileElem.id === "Back" ? null : Tile[tileElem.id];
          this.selectedPicker.pickTile(tile);
          this.selectedPicker = null;
          this.hide();
        };
      });
  
      this.backgroundElem.onclick = () => {
        this.selectedPicker = null;
        this.hide();
      };
    }
  
    show() {
      fadeIn(this.boxElem);
      fadeIn(this.backgroundElem);
    }
  
    hide() {
      fadeOut(this.boxElem);
      fadeOut(this.backgroundElem);
    }
  }
  

  class MahjongTilePickerHelper {
    static getImagePath(tile) {
      let name;
      if (tile == null) {
        name = "Back";
      } else {
        name = Tile[tile];
      }
      return "../../images/" + name + ".png";
    }
  }
  

  var Tile;
  (function (Tile) {
      Tile[Tile["W1"] = 0] = "W1";
      Tile[Tile["W2"] = 1] = "W2";
      Tile[Tile["W3"] = 2] = "W3";
      Tile[Tile["W4"] = 3] = "W4";
      Tile[Tile["W5"] = 4] = "W5";
      Tile[Tile["W5_red"] = 5] = "W5_red";
      Tile[Tile["W6"] = 6] = "W6";
      Tile[Tile["W7"] = 7] = "W7";
      Tile[Tile["W8"] = 8] = "W8";
      Tile[Tile["W9"] = 9] = "W9";
      Tile[Tile["T1"] = 10] = "T1";
      Tile[Tile["T2"] = 11] = "T2";
      Tile[Tile["T3"] = 12] = "T3";
      Tile[Tile["T4"] = 13] = "T4";
      Tile[Tile["T5"] = 14] = "T5";
      Tile[Tile["T5_red"] = 15] = "T5_red";
      Tile[Tile["T6"] = 16] = "T6";
      Tile[Tile["T7"] = 17] = "T7";
      Tile[Tile["T8"] = 18] = "T8";
      Tile[Tile["T9"] = 19] = "T9";
      Tile[Tile["S1"] = 20] = "S1";
      Tile[Tile["S2"] = 21] = "S2";
      Tile[Tile["S3"] = 22] = "S3";
      Tile[Tile["S4"] = 23] = "S4";
      Tile[Tile["S5"] = 24] = "S5";
      Tile[Tile["S5_red"] = 25] = "S5_red";
      Tile[Tile["S6"] = 26] = "S6";
      Tile[Tile["S7"] = 27] = "S7";
      Tile[Tile["S8"] = 28] = "S8";
      Tile[Tile["S9"] = 29] = "S9";
      Tile[Tile["East"] = 30] = "East";
      Tile[Tile["South"] = 31] = "South";
      Tile[Tile["West"] = 32] = "West";
      Tile[Tile["North"] = 33] = "North";
      Tile[Tile["White"] = 34] = "White";
      Tile[Tile["Green"] = 35] = "Green";
      Tile[Tile["Red"] = 36] = "Red";
  })(Tile || (Tile = {})); 

function fadeOut(elem) {
    var opacity = Number(elem.style.opacity);
    var timer = setInterval(function () {
        if (opacity <= 0.1) {
            clearInterval(timer);
            elem.style.display = 'none';
        }
        elem.style.opacity = String(opacity);
        opacity -= 0.1;
    }, 20);
}
function fadeIn(elem) {
    var opacity = 0;
    var timer = setInterval(function () {
        if (opacity >= Number(elem.getAttribute("max-opacity"))) {
            clearInterval(timer);
        }
        elem.style.opacity = String(opacity);
        opacity += 0.1;
    }, 20);
    elem.style.display = 'block';
}

export {
    MahjongTilePicker,
    MahjongTilePickerLightbox,
    MahjongTilePickerHelper,
    Tile,
    fadeOut,
    fadeIn
};

export default MahjongTilePicker;
