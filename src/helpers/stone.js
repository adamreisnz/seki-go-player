import {stoneColors} from '../constants/stone.js'

//Valid colors helper var
export const validColors = Object.values(stoneColors)

/**
 * Swap a stone color
 */
export function swapColor(color) {
  if (color === stoneColors.BLACK) {
    return stoneColors.WHITE
  }
  else if (color === stoneColors.WHITE) {
    return stoneColors.BLACK
  }
}

/**
 * Check if a color is valid
 */
export function isValidColor(color) {
  return validColors.includes(color)
}
