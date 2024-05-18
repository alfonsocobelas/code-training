export function revealSabotage(store) {
    const posSabotagedGifts = _getPositionOfSabotagedGifts(store)

    const rowLength = store.length
    const columnLength = store[0].length

    for (let i = 0; i < rowLength; i++) {
        for (let j = 0; j < columnLength; j++) {

            if (!_isSabotageGift({ i, j })) {
                const adjacents = _calculateSabotageGiftsInAdjacentCells({ i, j })

                if (adjacents) {
                    store[i][j] = (Number(store[i][j]) + adjacents).toString()
                }
            }
        }
    }

    return store


    function _isSabotageGift({ i, j }) {
        return posSabotagedGifts.some(cell => JSON.stringify(cell) === JSON.stringify([i, j]) ) 
    }

    function _calculateSabotageGiftsInAdjacentCells({ i, j }) {
        let adjacents = 0

        posSabotagedGifts.forEach(position => {
            const [ posRow, posColumn ] = position
        
            if (Math.abs(posRow - i) <= 1 && Math.abs(posColumn - j) <= 1) {
                adjacents += 1
            }             
        })

        return adjacents
    }
}

function _getPositionOfSabotagedGifts(store) {
    const positions = []

    store.forEach((element, i) => {
        const j = element.findIndex(cell => cell === '*')
        
        if (j != -1) {
          positions.push([i, j])
        }
    })

    return positions 
}
