export function findNaughtyStep(original, modified) {
    const arrOriginal = [...original] 
    const arrModified = [...modified]

    if (original.length < modified.length) {
        return compare(arrModified, arrOriginal)
    }

    return compare(arrOriginal, arrModified)
}

function compare(a, b) {
    return a.reduce((naugthy, char) => {
        if (!b.includes(char)) {
            return char
        }

        return naugthy
    }, '')
}