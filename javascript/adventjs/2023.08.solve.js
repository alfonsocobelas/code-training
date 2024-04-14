const RULES = {
    PALLET: 5,
    BOX: 10,
}

export function organizeGifts(gifts) {
    let packaging = ''
    const store = _separateGitfsByType(gifts)
    const types = Object.keys(store)

    types.forEach(type => {
        const gitfsOfType = store[type]

        const { restBoxs, bags } = _calculateBags(gitfsOfType)
        const { boxs, pallets } = _calculatePalletsAndBoxes(restBoxs)
        
        packaging += _buildPackaging({ type, pallets, boxs, bags })
    })

    return packaging
}

function _separateGitfsByType(gifts) {
    const re = /[a-z]/g
    const letters = gifts.match(re)
    const numbers = gifts
        .split(re)
        .filter(char => char != '')
        .map(char => Number(char))

    return function _buildStoreObject() {
        const store = {}

        letters.forEach((char, i) => {
            store[char] = numbers[i]
        })

        return store
    }()
}

function _calculateBags(gifts) {
    const bags = gifts % RULES.BOX
    const rawBoxs = (gifts - bags) / RULES.BOX

    return { restBoxs, bags }
}

function _calculatePalletsAndBoxes(restBoxs) {
    const boxs = restBoxs % RULES.PALLET
    const pallets = Math.floor(restBoxs / RULES.PALLET) 

    return { boxs, pallets }
}

function _buildPackaging({ type, pallets, boxs, bags }) {
    const symbolPallets = `[${type}]`.repeat(pallets)
    const symbolBoxs = `{${type}}`.repeat(boxs)
    const symbolBags = `(${type.repeat(bags)})`

    return `${symbolPallets}${symbolBoxs}${symbolBags}`
}