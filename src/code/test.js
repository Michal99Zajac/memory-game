function restart() {
  let d = document.getElementsByClassName('card')
  for (let el of d) {
    el.setAttribute('class', 'card')
  }
}

function eventRotate() {
  let div = document.getElementsByClassName('card')

  for (let element of div) {
    element.addEventListener('click', event => {
      if (element.classList.contains('awers')) {
        element.setAttribute('class', 'rewers card')
      } else {
        element.setAttribute('class', 'awers card')
      }
    })
  }
}

function eventMatched() {
  let div = document.getElementsByClassName('card')

  for (let element of div) {
    element.addEventListener('click', event => {
      if (element.classList.contains('matched')) {
        element.setAttribute('class', 'rewers card')
      } else {
        element.setAttribute('class', 'awers card')
        setTimeout(() => {element.setAttribute('class', 'matched card')}, 700)
      }
    })
  }
}

function showWinBoard() {
  let d = document.getElementsByClassName('win-board')[0]
  let game = document.getElementsByClassName('game')[0]
  if (d.style["display"] === "none") {
    d.setAttribute('style', 'display: flex;')
    game.setAttribute('style', '-webkit-filter: blur(12px);')
  } else {
    d.setAttribute('style', 'display: none;')
    game.setAttribute('style', '-webkit-filter: none;')
  }
  return d
}
