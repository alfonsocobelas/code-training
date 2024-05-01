export function isNarcissistic(number) {
    if (number < 0) {
        return false 
    }

    const sum = number
        .toString()
        .split('')
        .reduce((acc, digit, i, number) => {
            return acc + Math.pow(Number(digit), number.length)
        }, 0)


    return number === sum
}