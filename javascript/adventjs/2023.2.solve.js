export function manufacture(gifts, materials) {
    const manufactureGifts = []
    
    gifts.forEach(item => {
        const canBeManufacture = [...item].every(char => [...materials].includes(char))

        if (canBeManufacture) {
            manufactureGifts.push(item)
        }
    })

    return manufactureGifts
}