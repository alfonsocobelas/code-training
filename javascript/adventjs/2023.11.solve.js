export function getIndexsForPalindrome(word) {
    if (_isPalindrome(word)) {
        return []
    }

    const { isPalindrome, indexes } = _canBeFormedPalindrome(word)
    if (isPalindrome) {
        return indexes
    }

    return null
}

function _isPalindrome(word) {
    const reverse = [...word].reverse().join('')

    if (reverse === word) {
        return true
    }

    return false
}

function _canBeFormedPalindrome(word) {
    const characters = [...word]
    let isPalindrome = false
    let indexes = []

    for (let i = 0; i < characters.length; i++) {
        for (let j = 1; j < characters.length; j++) {
            const clone = [...characters]
            const swapWord = _swapPosition({ array: clone, i, j })
            
            if(_isPalindrome(swapWord)) {
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

