export function reverse(text) {
    const characters = [...text]
    const reverse = []

    for (const char of characters) {
        reverse.unshift(char)
    }

    return reverse.join('')
}