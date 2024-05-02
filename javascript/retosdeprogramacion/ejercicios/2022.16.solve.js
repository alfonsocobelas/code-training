const SEPARATOR = ''

export function capitalice(text) {
    const re = /(?=[\.,:;¿?¡!()/\s])|(?<=[\.,:;¿?¡!()/\s])/g

    return text
        .split(re)
        .map(_capitaliceFirstLetter)
        .join(SEPARATOR)
}

function _capitaliceFirstLetter(word) {
    return word
        .at(0)
        .toUpperCase()
        .concat(word.slice(1))
}