const EDGE_SYMBOL = '#'

export function drawGift(size, symbol) {
    let gift3D = []

    if (size < 2) {
        return EDGE_SYMBOL
    }

    for (let i = 0; i < size; i++) {
        const front = _buildFront({ size, symbol, position: i })
        const lateral = _buildLateral({ symbol, position: i })
        const blank = _buildBlank({ size, position: i })

        _buildGift3D({ position: i, front, lateral, blank })
    }

    return gift3D.join('')

    function _buildGift3D({ position, front, lateral, blank }) {
        const lineSup = `${blank}${front}${lateral}\n`
        gift3D.splice(position, 0, lineSup)

        if (position !== size - 1) {
            const lineInf = `${front}${lateral}\n`
            gift3D.splice(position + 1, 0, lineInf)
        }
    }
}

function _buildFront({ size, symbol, position }) {
    let face 
    const longFace = size - 2

    if (position === 0 || position === size - 1) {
        face = EDGE_SYMBOL.repeat(longFace)
    } else {
        face = symbol.repeat(longFace)
    }

    return `${EDGE_SYMBOL}${face}${EDGE_SYMBOL}` 
}

function _buildLateral({ symbol, position }) {
    if (position > 0) {
        const longFace = position - 1
        const face = symbol.repeat(longFace)

        return `${face}${EDGE_SYMBOL}`
    }

    return ''
}

function _buildBlank({ size, position }) {
    const blank = ' '

    return blank.repeat(size - (position + 1)) 
}