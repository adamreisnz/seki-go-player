import {helpers} from '../../../src/index.js'

/**
 * Find elements by query
 */
export function findByQuery(query) {
  if (query.match(/^#/)) {
    const element = findById(query.substring(1))
    return element ? [element] : []
  }
  else if (query.match(/^\./)) {
    const elements = findByClass(query.substring(1))
    return Array.from(elements)
  }
  return []
}

/**
 * Find element by ID
 */
export function findById(id) {
  return document.getElementById(id)
}

/**
 * Find elements by class
 */
export function findByClass(className) {
  return document.getElementsByClassName(className)
}

/**
 * Set text
 */
export function setText(query, text) {
  findByQuery(query).forEach(element => {
    element.textContent = text
  })
}

/**
 * Toggle hidden class on element
 */
export function toggleHidden(elements, value) {
  if (typeof elements === 'string') {
    elements = findByQuery(elements)
  }
  helpers.util.toggleClass(elements, 'hidden', value)
}

/**
 * Toggle active class on element
 */
export function toggleActive(elements, value) {
  if (typeof elements === 'string') {
    elements = findByQuery(elements)
  }
  helpers.util.toggleClass(elements, 'active', value)
}

/**
 * Check if element is active
 */
export function isActive(element) {
  return helpers.util.hasClass(element, 'active')
}

/**
 * Add click handler
 */
export function onClick(query, handler) {
  const elements = findByQuery(query)
  elements.forEach(element => {
    element.addEventListener('click', event => {
      handler(element, event)
    })
  })
}

/**
 * Time parser
 */
export function parseTime(time) {
  time = Math.floor(time)
  if (time > 3600) {
    const hours = String(Math.floor(time / 3600)).padStart(2, '0')
    const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, '0')
    const seconds = String(time % 60).padStart(2, '0')
    return `${hours}:${minutes}:${seconds}`
  }
  else if (time > 60) {
    const minutes = String(Math.floor(time / 60)).padStart(2, '0')
    const seconds = String(time % 60).padStart(2, '0')
    return `${minutes}:${seconds}`
  }
  else {
    const seconds = String(time).padStart(2, '0')
    return `00:${seconds}`
  }
}
