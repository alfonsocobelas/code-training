
const DELIVERY_ENDTIME = '07:00:00'
const SEPARATOR = ':'
const SYMBOL_POSITIVE = ''
const SYMBOL_NEGATIVE = '-'

export function calculateTime(deliveries) {
    const [ hours, mins, secs ] = DELIVERY_ENDTIME.split(SEPARATOR)
    const endTimeSecs = _convertToSeconds({ hours, mins, secs })
    
    const timeInSecs = _calculateTime({ endTimeSecs, deliveries })

    return _formatSecondsToDate(timeInSecs)
}

function _calculateTime({ endTimeSecs, deliveries }) {
    return deliveries.reduce((acc, delivery) => {
        const [ hours, mins, secs ] = delivery.split(SEPARATOR)
        
        const seconds = _convertToSeconds({ hours, mins, secs })

        return  acc - seconds
    }, endTimeSecs)
}

function _formatSecondsToDate(secs) {
    let symbol = SYMBOL_NEGATIVE

    if (secs < 0) {
        secs = Math.abs(secs)
        symbol = SYMBOL_POSITIVE
    }

    const hours = Math.floor(secs / 3600)
    const minutes = Math.floor((secs / 60) % 60)
    const seconds = secs % 60

    return `${symbol}${_formatHours(hours)}:${_formatMins(minutes)}:${_formatSecs(seconds)}`
}

function _formatHours(hours) {
    return hours < 10 ? `0${hours}` : hours.toString()
}

function _formatMins(minutes) {
    return minutes < 10 ? `0${minutes}` : minutes.toString()
}

function _formatSecs(seconds) {
    return seconds < 10 ? `0${seconds}` : seconds.toString()
}

function _convertToSeconds({ hours, mins, secs }) {
    const minutes = Number(hours) * 60 + Number(mins)
    const seconds = minutes * 60 + Number(secs)

    return seconds
}