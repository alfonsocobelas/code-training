const NATURAL_DICT = {
    "A": ".-",   "Ñ": "--.--", "1":  ".----",
    "B": "-...", "O": "---",   "2":  "..---",
    "C": "-.-.", "P": ".--.",  "3":  "...--",
    "D": "-..",  "Q": "--.-",  "4":  "....-",
    "E": ".",    "R": ".-.",   "5":  ".....",
    "F": "..-.", "S": "...",   "6":  "-....",
    "G": "--.",  "T": "-",     "7":  "--...",
    "H": "....", "U": "..-",   "8":  "---..",
    "I": "..",   "V": "...-",  "9":  "----.",
    "J": ".---", "W": ".--",   ".":  ".-.-.-",
    "K": "-.-",  "X": "-..-",  ",":  "--..--",
    "L": ".-..", "Y": "-.--",  "?":  "..--..",
    "M": "--",   "Z": "--..",  "\"": ".-..-.", 
    "N": "-.",   "0": "-----", "/" : "-..-." 
}

const MORSE_DICT = function() {
    const morseDict = {}

    for (const [word, code] of Object.entries(NATURAL_DICT)) {
        morseDict[code] = word
    }
    
    return morseDict
}()

const EMPTY_SPACE = ''
const BLANK_SPACE = ' ' 
const DOBLE_BLANK_SPACE = '  '
const SEPARATOR = '. '

export function translate(input) {
    if (_isNaturalText(input)) {
        return _decoderNaturalText(input)
    }

    return _decoderMorseCode(input)
} 

function _isNaturalText(text) {
    const re = /[a-zA-Z0-9]/

    return re.test(text)
}

function _decoderNaturalText(text) {
    let morseCode = ''

    for (const char of [...text.toUpperCase()]) {
        if (char === BLANK_SPACE) {
            morseCode = morseCode.concat(DOBLE_BLANK_SPACE)
        } else {
            const code = NATURAL_DICT[char]
            morseCode = morseCode.concat(code, BLANK_SPACE)
        }
    }

    return morseCode
}

function _decoderMorseCode(code) {
    const codes = code
        .replaceAll(DOBLE_BLANK_SPACE, BLANK_SPACE)
        .split(BLANK_SPACE)

    let naturalText = ''

    for (const code of codes) {
        if (code === EMPTY_SPACE) {
            naturalText = naturalText.concat(BLANK_SPACE)
        } else {
            const character = MORSE_DICT[code]
            naturalText = naturalText.concat(character)
        }
    }

    return _format(naturalText)
}

function _format(text) {
    return text
        .toLowerCase()
        .split(SEPARATOR)
        .map(_capitalizeFirstLetter)
        .join(SEPARATOR)
        .trim()
}

function _capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
