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
    <div class="selectable d-flex justify-content-between p-3 fs-3"
      onclick="app.PlayersController.setActivePlayer('${this.id}')">
      <p>${this.name}</p>
      <p>Highscore: ${this.highScore}</p>
    </div>`
  }

  get ActivePlayerTemplate() {
    return `
      <div class="col-6 d-flex justify-content-between my-5 p-4 fs-4 text-center borders player-text">
        <p>${this.name}</p>
        <p>Score: ${this.score}</p>
      </div>
      <div class="col-6 text-center borders fruit-text">
        <h2 id="active-fruit" class="pt-5 pb-2">Banana</h2>
        <form onsubmit="app.GameController.checkAnswer(event)" class="pt-2 pb-5 px-5">
          <input id="fruit-input" class="w-100" type="text" name="word" />
        </form>
      </div>`
  }

  get HighScoreTemplate() {
    return `
    <div class="col-6 d-flex justify-content-between my-5 p-4 fs-4 text-center borders player-text">
      <p>${this.name}</p>
      <p>Score: ${this.score}</p>
    </div>
    <div class="col-6 text-center borders fruit-text py-5">
      <h2>High Score: ${this.highScore}</h2>
    </div>
    `
  }
}