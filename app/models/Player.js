import { generateId } from "../utils/generateId.js"

export class Player {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.score = 0
    this.highScore = 0
  }

  get ListTemplate() {
    return `
    <li class="selectable" onclick="app.PlayersController.setActivePlayer('${this.id}')">
      ${this.name} Highscore: ${this.highScore}
    </li>`
  }

  get ActivePlayerTemplate() {
    return `
    <h2>${this.name}</h2>
    <h2 id="active-fruit">Banana</h2>
    <form onsubmit="app.GameController.checkAnswer(event)">
      <input id="fruit-input" type="text" name="word"/>
    </form>`
  }

  get HighScoreTemplate() {
    return `
    <h2>${this.name}</h2>
    <p class="mb-0">Round Over</p>
    <p class="mb-0">Your Score was: ${this.score}</p>
    <p>Your High Score is: ${this.highScore}</p>
    `
  }
}