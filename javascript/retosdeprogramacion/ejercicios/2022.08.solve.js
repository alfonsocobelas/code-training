export function decimalToBinary(decimal) {
    let binary = ''

    while(decimal > 0) {
        binary = (decimal % 2) + binary
        decimal = Math.floor(decimal / 2)
    }

    return Number(binary)
}