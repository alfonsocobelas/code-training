const CLOSE_SYMBOLS = [ '}', ')', ']' ]
const SYMBOLS = [ '{', '}','(', ')', '[',']' ]
const DICTIONARY = {
    '}': '{',
    ')': '(',
    ']': '['
}
const DELETE_PAIR = 2

export function isBalancedExpresion(exp) {
    const symbols = [...exp].filter(char => SYMBOLS.includes(char))

    return _recursiveChecking(symbols)
}

function _recursiveChecking(symbols) {
    if (symbols.length === 0) {
        return true
    }

    const closeIndex = _getDeepestCloseSymbolIndex(symbols)
    if (!closeIndex) {
        return false 
    }

    const previousIndex = closeIndex - 1
    const closeSymbol = symbols[closeIndex]
    const previousSymbol = symbols[previousIndex]
    
    if (previousSymbol !== DICTIONARY[closeSymbol]) {
        return false
    }

    _dropSymbols({ symbols, index: previousIndex })
    return _recursiveChecking(symbols)
}

function _dropSymbols({ symbols, index }) {
    symbols.splice(index, DELETE_PAIR)
}

function _getDeepestCloseSymbolIndex(symbols) {
    for (let i = 0; i < symbols.length; i++) {
        const symbol = symbols[i]

        if (CLOSE_SYMBOLS.includes(symbol)) {
            return i
        }   
    }
}

