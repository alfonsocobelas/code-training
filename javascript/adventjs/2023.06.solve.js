const MOVEMENT = {
    RIGHT: '>',
    LEFT: '<',
    WILDCARD: '*'
}

export function maxDistance(movements) {
    const rightMovements = _countMovements({ movements, direction: MOVEMENT.RIGHT })
    const leftMovements = _countMovements({ movements, direction: MOVEMENT.LEFT })
    const wildcardMovements = _countMovements({ movements, direction: MOVEMENT.WILDCARD })

    if (rightMovements > leftMovements) {
        return rightMovements + wildcardMovements - leftMovements
    }

    if (rightMovements < leftMovements) {
        return leftMovements + wildcardMovements - rightMovements
    }

    return rightMovements + wildcardMovements - leftMovements
}

function _countMovements({ movements, direction }) {
    return [...movements]
        .filter(movement => movement === direction)
        .length
}