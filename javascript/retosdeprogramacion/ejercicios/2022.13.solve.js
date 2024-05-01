export function factorial(number) {
    if (number < 0) {
        throw new Error('Error: número negativo')
    }

    if (number === 0) {
        return 1
    }

    if (number >= 1) {
        return number * factorial(number - 1)
    }
}