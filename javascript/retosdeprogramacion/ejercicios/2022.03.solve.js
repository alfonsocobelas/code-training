export function isPrime(n) {
    if (n <= 1) {
        return false
    }

    if (n % 2 === 0 && n > 2) {
        return false
    }

    for(let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) {
            return false
        }
    }

    return true
}

export function getPrimes(n) {
    const primes = []

    for (let i = 1; i <= n; i++) {
        if (isPrime(i)) {
            primes.push(i)
        }
    }

    return primes
}

