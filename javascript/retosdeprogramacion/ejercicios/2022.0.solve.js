export function fizzBuzz() {
    const result = []

    for (let i = 1; i <= 100; i++) {
        const multipleOfThree = i % 3 === 0
        const multipleOfFive = i % 5 === 0

        if (multipleOfThree && multipleOfFive) {
            result.push('fizzbuzz')
        } else if (multipleOfThree) {
            result.push('fizz')
        } else if (multipleOfFive) {
            result.push('buzz')
        }
    }

    return result
}
