import { AppState } from "../AppState.js"
import { Player } from "../models/Player.js"
import { saveState } from "../utils/Store.js"

function _savePlayers() {
  saveState('players', AppState.players)
}

class PlayersService {
  createPlayer(form) {
    let newPlayer = new Player(form)
    AppState.players.push(newPlayer)
    AppState.emit('players')
  }

  setActivePlayer(playerId) {
    let foundPlayer = AppState.players.find(player => player.id == playerId)
    AppState.activePlayer = foundPlayer
  }

  savePlayers() {
    _savePlayers()
  }
}

export const playersService = new PlayersService()