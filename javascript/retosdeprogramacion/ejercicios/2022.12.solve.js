const REMOVE_CHAR = ''

export function isPalindrome(text) {
    const characters = _normalice(text)
    const reverse = [...characters].reverse()

    if (characters.join('') === reverse.join('')) {
        return true
    }

    return false
}

function _normalice(text) {
    const re = /[\.,:;¿?¡!()]/g

    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, REMOVE_CHAR)
        .replace(re, REMOVE_CHAR)
        .replaceAll(' ', REMOVE_CHAR)
        .split('')
}