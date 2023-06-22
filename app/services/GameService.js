import { AppState } from "../AppState.js"
import { playersService } from "./PlayersService.js"

class GameService {
  setRandomFruit() {
    let fruit = AppState.fruits
    AppState.activeFruit = fruit[Math.floor(Math.random() * fruit.length)]
  }

  checkAnswer(form) {
    if (form.word == AppState.activeFruit.toLowerCase()) {
      AppState.activePlayer.score++
      return true
    }
    return false
  }

  startRound() {
    AppState.activePlayer.score = 0
  }

  endRound() {
    let player = AppState.activePlayer
    if (player.score > player.highScore) {
      player.highScore = player.score
    }
    playersService.savePlayers()
  }
}

export const gameService = new GameService()