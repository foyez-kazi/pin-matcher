let randomCode
let inputCode
let tryCount

/**
 * select a tag
 * @param {string} selector tag attribute, e.g. class, id, etc
 */
function getElement(selector) {
  return document.querySelector(selector)
}

/**
 * generate 4 digits random code
 */
function generateRandomCode() {
  return Math.floor(1000 + 8999 * Math.random()).toString()
}

/**
 * manipulate & display clicked codes
 * @param {string} value value of clicked button
 */
function input(value) {
  if (value === 'C') {
    inputCode = ''
  } else if (value === '<') {
    inputCode = inputCode.slice(0, inputCode.length - 1)
  } else {
    inputCode += value
  }

  getElement('#input-code-display').value = inputCode
}

function reset() {
  getElement('#match-message').style.display = 'none'
  getElement('#not-match-message').style.display = 'none'

  inputCode = ''
  getElement('#input-code-display').value = inputCode

  tryCount = 3
  getElement('#try-count').textContent = tryCount
}

// hide notify messages in default mode
reset()

// interact for random generate button
getElement('.generate-btn').addEventListener('click', () => {
  randomCode = generateRandomCode()
  getElement('#random-code-display').value = randomCode
  // tryCount = 3
  // getElement('#try-count').textContent = tryCount
  reset()
})

// interact for code buttons
getElement('.calc-body').addEventListener('click', (e) => {
  const clicked = e.target
  const isButton = clicked.className === 'button'

  if (isButton) {
    input(clicked.textContent)
  }
})

// interact for submit button
getElement('.submit-btn').addEventListener('click', () => {
  if (tryCount === 0) return

  if (randomCode === inputCode) {
    getElement('#not-match-message').style.display = 'none'
    getElement('#match-message').style.display = 'block'
    console.log(randomCode, inputCode)
  } else {
    tryCount -= 1
    getElement('#try-count').textContent = tryCount
    getElement('#match-message').style.display = 'none'
    getElement('#not-match-message').style.display = 'block'
  }
})
