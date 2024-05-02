const REMOVE_CHAR = ''
const SEPARATOR = ''

export function isPalindrome(text) {
    const characters = _normalice(text)
    const reverse = [...characters].reverse()

    if (characters.join(SEPARATOR) === reverse.join(SEPARATOR)) {
        return true
    }

    return false
}

function _normalice(text) {
    const re = /[\.,:;¿?¡!()/\s]/g

    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, REMOVE_CHAR)
        .replace(re, REMOVE_CHAR)
        .split(SEPARATOR)
}