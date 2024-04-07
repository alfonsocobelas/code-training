const DICTIONARY = {
    ROAD: '.',
    SLED: 'S',
    OPEN_BARRIER: '*',
    CLOSED_BARRIER: '|'
}

const TIME_OPEN_BARRIER = 5

export function cyberReindeer({ road, time }) {
    const closedRoad = road.replace(DICTIONARY.SLED, DICTIONARY.ROAD)
    const openRoad = closedRoad.replaceAll(DICTIONARY.CLOSED_BARRIER, DICTIONARY.OPEN_BARRIER)

    const initialState = road
    let stateRoad = [initialState]
    let stoppedTimer = 0

    for (let i = 1; i < time; i++) {
        if (i < TIME_OPEN_BARRIER) {
            road = closedRoad
        } else {
            road = openRoad
        }

        const canMove = _checkIfCanMove({ road, i })

        if (canMove) {
            const nextState = _buildNextMovement({ road, i, stoppedTimer })
            stateRoad.push(nextState)
        } else {
            const previousState = stateRoad.slice(-1).toString()
            stateRoad.push(previousState)   
            
            ++stoppedTimer
        }
    }

    return stateRoad


    function _checkIfCanMove({ road, i }) {
        const nextPositionSled = road.at(i)
        const previousPositionSled = road.at(i - 1)

        if (previousPositionSled === DICTIONARY.CLOSED_BARRIER) {
            return false
        }

        if (nextPositionSled === DICTIONARY.CLOSED_BARRIER) {
            return false
        }

        return true
    }

    function _buildNextMovement({ road, i, stoppedTimer }) {
        const arrRoad = [...road]
        arrRoad[i - stoppedTimer] = DICTIONARY.SLED

        return arrRoad.join('')
    }
}
