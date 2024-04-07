const NOT_REPEAT = -1 

export function firstRepeatedId(giftIds) {
    let minIndex = giftIds.length
    let first

    giftIds.forEach((item, i) => {
        const nextIndex = giftIds.indexOf(item, ++i)
        
        if (nextIndex != -1 && nextIndex < minIndex) {
            minIndex = nextIndex
            first = item
        }
    
        return 
    })

    return first ?? NOT_REPEAT
} 