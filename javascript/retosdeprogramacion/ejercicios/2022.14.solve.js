const SEPARATOR = ''

export function isNarcissistic(number) {
    if (number < 0) {
        return false 
    }

    const sum = number
        .toString()
        .split(SEPARATOR)
        .reduce((acc, digit, i, number) => acc + Math.pow(Number(digit), number.length), 0)

    return number === sum
}