const BLANK_SPACE = ' '

export function createChristmasTree(ornamentsTypes, height) {
    const numOrnaments = _sumOfFirstNNumbers(height)
    const ornaments = _getOrnaments({ ornamentsTypes, numOrnaments })

    return _buildTree({ ornaments, height })
}

function _sumOfFirstNNumbers(n) {
    return (n * (n + 1)) / 2
}

function _getOrnaments({ ornamentsTypes, numOrnaments }) {
    const differentOrnaments = ornamentsTypes.length
    const count = Math.floor(numOrnaments / differentOrnaments) + 1 

    return ornamentsTypes
        .repeat(count)
        .slice(0, numOrnaments)
        .split('')
}

function _buildTree({ ornaments, height }) {
    let tree = ''
    let position = 0

    for (let i = 1; i <= height; i++) {
        const numOfSpaces = height - i
        const blankSpaces = BLANK_SPACE.repeat(numOfSpaces)
        
        const ornamentsInLine = ornaments.slice(position, position + i).join(BLANK_SPACE)
        position += i

        tree += `${blankSpaces}${ornamentsInLine}\n`
    }

    const trunk = BLANK_SPACE.repeat(height - 1) + '|'
    return `${tree}${trunk}`
}
