const CLOSE_SYMBOLS = [ '}', ')', ']' ]
const OPEN_SYMBOLS  = [ '{', '(', '[' ]
const SYMBOLS = [ ...CLOSE_SYMBOLS, ...OPEN_SYMBOLS ]
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

    const index = _getDeepestCloseSymbolIndex(symbols)
    if (!index) {
        return false 
    }

    const previousIndex = index - 1
    const closeSymbol = symbols[index]
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
