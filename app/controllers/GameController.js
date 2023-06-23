import { AppState } from "../AppState.js";
import { gameService } from "../services/GameService.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML, setText } from "../utils/Writer.js";

let roundStarted = false

function _drawFruit() {
  let fruit = AppState.activeFruit
  setText('active-fruit', fruit.toUpperCase())
}

function _setRandomFruit() {
  gameService.setRandomFruit()
  _drawFruit()
}

function _startRound() {
  if (!roundStarted) {
    gameService.startRound()
    roundStarted = true
    setTimeout(_endRound, 60000)
  }
}

function _endRound() {
  roundStarted = false
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

    if (gameService.checkAnswer(form)) {
      _setRandomFruit()
      AppState.emit('activePlayer')
      fruit.classList.remove('text-danger')
    } else {
      fruit.classList.add('text-danger')
    }
    event.target.reset()
    document.getElementById('fruit-input').focus()
  }
}