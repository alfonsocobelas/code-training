export function fibonacci(n) {
    const sequence = [0, 1]

    for (let i = 1; i <= n; i++) {
        if (i > 2) {
            const sum = sequence[i-3] + sequence[i-2] 
            sequence.push(sum)
        }
    }

    return sequence
}