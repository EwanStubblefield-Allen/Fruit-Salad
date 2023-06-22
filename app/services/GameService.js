import { AppState } from "../AppState.js"

class GameService {
  setRandomFruit() {
    let fruit = AppState.fruits
    AppState.activeFruit = fruit[Math.floor(Math.random() * fruit.length)]
    console.log(AppState.activeFruit);
  }

  checkAnswer(form) {
    if (form.word == AppState.activeFruit) {
      AppState.activePlayer.score++
      console.log(AppState.activePlayer.score);
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
      console.log(player.highScore);
    }
  }
}

export const gameService = new GameService()