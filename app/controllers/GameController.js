import { AppState } from "../AppState.js";
import { gameService } from "../services/GameService.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML, setText } from "../utils/Writer.js";

function _drawFruit() {
  let fruit = AppState.activeFruit
  setText('active-fruit', fruit.toUpperCase())
}

function _setRandomFruit() {
  gameService.setRandomFruit()
  _drawFruit()
}

function _startRound() {
  gameService.startRound()
  setTimeout(_endRound, 60000)
}

function _endRound() {
  gameService.endRound()
  AppState.emit('players')
  setHTML('active-player', AppState.activePlayer.HighScoreTemplate)
}

export class GameController {
  constructor() {
    console.log('Game Controller is Loaded');

    AppState.on('activePlayer', _setRandomFruit)
    AppState.on('activePlayer', _startRound)
  }

  checkAnswer(event) {
    event.preventDefault()
    let form = getFormData(event.target)
    let fruit = document.getElementById('active-fruit')

    event.target.reset()
    if (gameService.checkAnswer(form)) {
      _setRandomFruit()
      AppState.emit('activePlayer')
      fruit.classList.remove('text-danger')
    } else {
      fruit.classList.add('text-danger')
    }
  }
}