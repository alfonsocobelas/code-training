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

        const { rawBoxs, bags } = _calculateBags(gitfsOfType)
        const { boxs, pallets } = _calculatePalletsAndBoxes({ rawBoxs })
        
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

function _calculateBags(total) {
    const bags = total % RULES.BOX
    const rawBoxs = (total - bags) / RULES.BOX

    return { rawBoxs, bags }
}

function _calculatePalletsAndBoxes({ rawBoxs }) {
    const boxs = rawBoxs % RULES.PALLET
    const pallets = Math.floor(rawBoxs / RULES.PALLET) 

    return { boxs, pallets }
}

function _buildPackaging({ type, pallets, boxs, bags }) {
    const symbolPallets = `[${type}]`.repeat(pallets)
    const symbolBoxs = `{${type}}`.repeat(boxs)
    const symbolBags = `(${type.repeat(bags)})`

    return `${symbolPallets}${symbolBoxs}${symbolBags}`
}