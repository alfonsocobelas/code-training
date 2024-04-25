export function countWords(text) {
    let normalice = _normaliceText(text)

    let response = {}

    while(normalice.length > 0) {
        const word = normalice[0]
        const appearances = [...normalice].filter(char => char === word).length

        response[word] = appearances
        normalice = normalice.replaceAll(word, '')
    }

    return response
}

function _normaliceText(text) {
    const re = /[\.,:;?¡!()]/g

    return text
        .replace(re, '')
        .replaceAll(' ','')
        .toLowerCase()
}