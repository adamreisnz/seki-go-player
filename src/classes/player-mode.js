import Base from './base.js'
import StoneFactory from './stone-factory.js'
import MarkupFactory from './markup-factory.js'
import {boardLayerTypes} from '../constants/board.js'
import {stoneModifierStyles} from '../constants/stone.js'

/**
 * Base player mode class
 */
export default class PlayerMode extends Base {

  /**
   * Constructor
   */
  constructor(player) {

    //Parent constructor
    super()

    //Store reference to player
    this.player = player
  }

  /**
   * Game virtual shortcut
   */
  get game() {
    return this.player.game
  }

  /**
   * Board virtual shortcut
   */
  get board() {
    return this.player.board
  }

  /**
   * Whether this mode is active
   */
  get isActive() {
    return (this.player.mode === this.mode)
  }

  /**************************************************************************
   * Mode activation/deactivation
   ***/

  /**
   * Activate this mode
   */
  activate() {

    //Get data
    const {player, mode} = this

    //Register event listeners
    this.registerEventListeners()

    //Set player class
    player.addClass(`seki-player-mode-${mode}`)
  }

  /**
   * Deactivate this mode
   */
  deactivate() {

    //Get data
    const {player, mode} = this

    //NOTE: There is no need to tear down any available tools or active tool,
    //because the new mode will do that automatically when it's activated.

    //Remove event listeners
    this.removeEventListeners()

    //Remove player class
    player.removeClass(`seki-player-mode-${mode}`)
  }

  /**************************************************************************
   * Event handling
   ***/

  /**
   * Create bound listeners for given event/method map
   */
  createBoundListeners(map) {

    //No map  given
    if (!map) {
      return
    }

    //Store map
    this.eventListenersMap = map

    //Create bound listeners
    this.bound = Object
      .values(map)
      .reduce((obj, name) => {
        obj[name] = this[name].bind(this)
        return obj
      }, {})
  }

  /**
   * Register event listeners on the player
   */
  registerEventListeners() {

    //Get event listeners map
    const {eventListenersMap, player, bound} = this
    if (!eventListenersMap) {
      return
    }

    //Register event listeners
    for (const key in eventListenersMap) {
      const fn = eventListenersMap[key]
      player.on(key, bound[fn])
    }
  }

  /**
   * Remove event listeners
   */
  removeEventListeners() {

    //Get event listeners map
    const {eventListenersMap, player, bound} = this
    if (!eventListenersMap) {
      return
    }

    //Remove event listeners
    for (const key in eventListenersMap) {
      const fn = eventListenersMap[key]
      player.off(key, bound[fn])
    }
  }

  /**************************************************************************
   * Shared helpers
   ***/

  /**
   * Show a hover stone
   */
  showHoverStone(x, y, color) {

    //Get data
    const {game, board} = this

    //Falling outside of grid or already have a stone?
    if (!board || !board.isOnBoard(x, y) || game.hasStone(x, y)) {
      return
    }

    //Get style
    const style = board.theme.get('stone.style')

    //Create stone and shadow
    const stone = StoneFactory.create(style, color, board)
    const copy = StoneFactory.createCopy(stone, stoneModifierStyles.HOVER)
    const shadow = StoneFactory.createShadow(copy)

    //Add to board
    board.eraseLayer(boardLayerTypes.HOVER)
    board.add(boardLayerTypes.HOVER, x, y, [shadow, copy])
  }

  /**
   * Show hover markup
   */
  showHoverMarkup(x, y, type, text) {

    //Get data
    const {board} = this

    //Falling outside of grid or already have a stone?
    if (!board || !board.isOnBoard(x, y)) {
      return
    }

    //Create markup
    const markup = MarkupFactory
      .create(type, board, {text})

    //Add to board
    board.removeAll(boardLayerTypes.HOVER)
    board.add(boardLayerTypes.HOVER, x, y, markup)
  }

  /**
   * Clear hover layer
   */
  clearHover() {

    //Get data
    const {board} = this

    //Check if board and layer are there
    if (!board || !board.hasLayer(boardLayerTypes.HOVER)) {
      return
    }

    //Remove all items
    board.removeAll(boardLayerTypes.HOVER)
  }

  /**
   * Redraw a grid cell
   */
  redrawGridCell(x, y) {

    //Redraw grid cell
    const {board} = this

    //Falling outside of grid or already have a stone?
    if (!board || !board.isOnBoard(x, y)) {
      return
    }

    //Stone here, not needed
    if (board.has(boardLayerTypes.STONES, x, y)) {
      return
    }

    //Markup here, keep as is
    if (board.has(boardLayerTypes.MARKUP, x, y)) {
      return
    }

    //Redraw cell
    board
      .getLayer(boardLayerTypes.GRID)
      .redrawCell(x, y)
  }
}
