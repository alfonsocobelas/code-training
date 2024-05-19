const OBSTACLES = {
    RUN:  '_',
    JUMP: '|'
}

const FAIL_STATE = {
    'GROUND': 'x',
    'HURDLE': '/'
}

export function checkRace(athlete, track) {
    const finalTrack = [...track]

    finalTrack.forEach((obstacle, i) => {
        if (OBSTACLES[athlete[i]]  !== obstacle) {
            finalTrack[i] = obstacle === OBSTACLES.RUN ? FAIL_STATE.GROUND : FAIL_STATE.HURDLE 
        }
    })

    _printFinalRaceStatus(finalTrack)

    if (athlete.length !== track.length) {
        return false
    } 

    return finalTrack.join('') === track
}

function _printFinalRaceStatus(finalTrack) {
    console.log(finalTrack.join(''))
}