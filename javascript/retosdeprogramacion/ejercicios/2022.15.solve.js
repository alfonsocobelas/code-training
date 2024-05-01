export function getDaysBetween(dateString1, dateString2) {
    if (!_checkIfFulfillFormat(dateString1, dateString2)) {
        throw new Error('invalid date format')
    }

    const date1 = _convertToDate(dateString1)
    const date2 = _convertToDate(dateString2)

    const diffTime = Math.abs(date2 - date1) 
    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24)); 

    return diffDays
}

function _checkIfFulfillFormat(dateString1, dateString2) {
    const re =  /^([0-9]){2}[/]([0-9]){2}[/]([0-9]){4}$/

    return re.test(dateString1) && re.test(dateString2)
}

function _convertToDate(dateString) {
    const [ day, month, year ] = dateString.split('/')

    const yyyy = parseInt(year, 10)
    const mm   = parseInt(month, 10) - 1
    const dd   = parseInt(day, 10)

    return new Date(yyyy, mm, dd)
}