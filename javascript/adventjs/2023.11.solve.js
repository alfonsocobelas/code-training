export function getIndexsForPalindrome(text) {
    if (_isPalindrome(text)) {
        return []
    }

    const { isPalindrome, indexes } = _canBeFormedPalindrome(text)
    if (isPalindrome) {
        return indexes
    }

    return null
}

function _isPalindrome(text) {
    const reverse = [...text].reverse().join('')

    if (reverse === text) {
        return true
    }

    return false
}

function _canBeFormedPalindrome(text) {
    const characters = [...text]
    let isPalindrome = false
    let indexes = []

    for (let i = 0; i < characters.length; i++) {
        for (let j = 1; j < characters.length; j++) {
            const clone = [...characters]
            const swapText = _swapPosition({ array: clone, i, j })
            
            if(_isPalindrome(swapText)) {
                isPalindrome = true
                indexes = [i, j]
                break
            }
        }

        if (isPalindrome) {
            break
        }
    }

    return { isPalindrome, indexes }
}

function _swapPosition({ array, i, j }) {
    [ array[i], array[j] ] = [ array[j], array[i] ]

    return array.join('')
}

