const CLOSURE = ')'
const OPENING = '('

export function decode(message) {
    const characters = [...message]

    if (!characters.includes(OPENING) && !characters.includes(CLOSURE)) {
        return message
    }

    let indexStart, indexEnd

    for (let i = 0; i <= message.length; i++) {
        const char = characters[i]
        if (char === OPENING) {
            indexStart = ++i
            continue
        } 

        if (char === CLOSURE) {
            indexEnd = i
            break
        }
    }

    const code = _getEncodingCode({ message, indexStart, indexEnd })     
    const decrypt = _reverse(code)       
    message = _replaceString({ message, decrypt, indexStart, indexEnd })

    return decode(message)
}

function _getEncodingCode({ message, indexStart, indexEnd }) {
    return message.slice(indexStart, indexEnd)
}

function _reverse(code) {
    return [...code].reverse().join('')
}

function _replaceString({ message, decrypt, indexStart, indexEnd }) {
    const sectionHead = message.slice(0, --indexStart)
    const sectionTail = message.slice(++indexEnd, message.length)

    return `${sectionHead}${decrypt}${sectionTail}`
}


