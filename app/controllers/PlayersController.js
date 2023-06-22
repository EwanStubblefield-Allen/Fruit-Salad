import { AppState } from "../AppState.js"
import { playersService } from "../services/PlayersService.js"
import { getFormData } from "../utils/FormHandler.js"
import { saveState } from "../utils/Store.js"
import { setHTML } from "../utils/Writer.js"

function _drawPlayers() {
  let players = AppState.players
  let template = ''

  players.forEach(player => template += player.ListTemplate)
  template += `
    <form onsubmit="app.PlayersController.createPlayer(event)" >
      <input type="text" name="name"/>
    </form>`
  setHTML('player-list', template)
}

function _drawActivePlayer() {
  let player = AppState.activePlayer

  if (player) {
    setHTML('active-player', player.ActivePlayerTemplate)
  }
}

export class PlayersController {
  constructor() {
    console.log('Player Controller Loaded')

    _drawPlayers()
    _drawActivePlayer()

    AppState.on('players', _drawPlayers)
    AppState.on('activePlayer', _drawActivePlayer)
  }

  createPlayer(event) {
    event.preventDefault()
    console.log(event);
    let form = event.target
    let data = getFormData(form)
    console.log(data);
    playersService.createPlayer(data)
    form.reset()
  }

  setActivePlayer(playerId) {
    playersService.setActivePlayer(playerId)
  }
}