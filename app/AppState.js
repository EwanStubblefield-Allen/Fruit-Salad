import { Player } from "./models/Player.js"
import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"

class ObservableAppState extends EventEmitter {
  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])

  /** @type {import('./models/Player.js').Player[]} */
  players = loadState('players', [Player])

  /** @type {import('./models/Player.js').Player} */
  activePlayer = null

  fruits = [
    "Malus domestica", //apple
    "Prunus armeniaca", //apricot
    "Musa sapientum", //banana
    "Rubus fruticosis", //blackberry
    "Vaccinium angustifolium", //blueberry
    "Prunus P. cerasus", // cherry
    "Vaccinium macrocarpon", //cranberry
    "Sumbucas S. nigra", //elderberry
    "Vitis labrusca", //grape
    "Citrus x paradisi", //grapefruit
    "Psidium guajava", //guava
    "Actinidia deliciosa", //kiwi
    "Citrus x limon", //lemon
    "Citrus x aurantiifolia", //lime
    "Mangifera indica", //mango
    "Citrus x aurantium", //orange
    "Carica papaya", //papaya
    "Prunus persica", //peach
    "Pyrus pyrifolia", //pear
    "Ananas A. comosus", //pineapple
    "Prunus domestica", //plum
    "Punica granatum", //pomegranate
    "Rubus idaeus", //raspberry
    "Fragaria F. x ananassa", //strawberry
    "Citrus reticulata", //tangerine
  ]
  activeFruit = null

  // NOTE Used to load initial data
  init() {
  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
