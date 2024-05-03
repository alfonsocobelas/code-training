const MOVEMENTS = {
  'RIGHT': 'R',
  'LEFT':  'L',
  'UP':    'U',
  'DOWN':  'D'
}

const SYMBOLS = {
  POSITION: '!',
  FREEWAY:  '.',
  OBSTACLE: '*'
}

const SEPARATOR = ''

export function autonomousDrive({ store, movements }) {
  let { i, j } = _getInitialPosition(store)
  const store2D = _buildStore2D({ store, i, j })

  for (const move of movements) {
    if (move === MOVEMENTS.RIGHT && _canMove({ i, j: j + 1, store2D })) {
      ++j
    }
  
    else if (move === MOVEMENTS.LEFT && _canMove({ i, j: j - 1, store2D })) {
      --j
    }
  
    else if (move === MOVEMENTS.UP && _canMove({ i: i - 1, j, store2D })) {
      --i
    }
  
    else if (move === MOVEMENTS.DOWN && _canMove({ i: i + 1, j, store2D })) {
      ++i
    }
  }

  return _buildFinalPosition({ store2D, i, j })
}

// build matrix to represent the store as a board 
function _buildStore2D({ store, i, j }) {
  const matrix = store.map(hallway => [...hallway]) 
  matrix[i][j] = SYMBOLS.FREEWAY

  return matrix
}

function _getInitialPosition(store) {
  return store.reduce((acc, hallway, i) => {
    const j = hallway.indexOf(SYMBOLS.POSITION)

    if (j != -1) {
      return { i, j }
    }

    return acc
  }, {})
}

function _canMove({ i, j, store2D }) {
  return store2D[i][j] === SYMBOLS.FREEWAY
}

function _buildFinalPosition({ store2D, i, j }) {
  store2D[i][j] = SYMBOLS.POSITION

  return store2D.map(hallway => hallway.join(SEPARATOR))
}