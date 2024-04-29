export function getDifferencesBetween(str1, str2) {
    const out1 = [...new Set(str1)].filter(char => !str2.includes(char)).join('')
    const out2 = [...new Set(str2)].filter(char => !str1.includes(char)).join('')

    return [ out1, out2 ]
}   