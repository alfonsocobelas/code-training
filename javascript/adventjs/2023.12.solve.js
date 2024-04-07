const DEGRADE_SYMBOLS = ['#', '+', ':', '.', ' ']

export function checkIsValidCopy(original, copy) {
    const arrOriginal = [...original]
    const arrCopy = [...copy]

    if (arrOriginal.length !== arrCopy.length) {
        return false
    }

    let isValidCopy = true 
    
    for (let i = 0; i < arrOriginal.length; i++) {
        const originalChar = arrOriginal[i]
        const copyChar = arrCopy[i]
        
        if (DEGRADE_SYMBOLS.includes(copyChar)) {
            if (!_isDegradeToSymbols({ originalChar, copyChar })) {
                isValidCopy = false
                break
            }
        } else if (!_isDegradeToLowerCase({ originalChar, copyChar })) {
            isValidCopy = false
            break
        }
    }
   
    return isValidCopy
}

function _isDegradeToLowerCase({ originalChar, copyChar }) {
    if (copyChar === originalChar) {
        return true
    }

    if (copyChar === originalChar.toLowerCase()) {
        return true
    }

    return false
}

function _isDegradeToSymbols({ originalChar, copyChar }) {
    if (!DEGRADE_SYMBOLS.includes(originalChar)) {
        return true
    }

    const indexOriginalChar = DEGRADE_SYMBOLS.indexOf(originalChar)
    const indexCopyChar = DEGRADE_SYMBOLS.indexOf(copyChar)

    if (indexOriginalChar <= indexCopyChar) {
        return true
    } 

    return false 
}
