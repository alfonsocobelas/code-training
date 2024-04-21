export function isAnagram(word1, word2) {
    const normalizeWord1 = word1.toLowerCase()
    const normalizeWord2 = word2.toLowerCase()

    if (normalizeWord1 === normalizeWord2) {
        return false
    }
    
    return compare(normalizeWord1, normalizeWord2)
}

function compare(word1, word2) {
    return [...word1].every(char => [...word2].includes(char))
}