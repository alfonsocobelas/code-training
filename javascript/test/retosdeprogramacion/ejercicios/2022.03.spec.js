import { expect } from 'chai'
import { getPrimes, isPrime } from '../../../retosdeprogramacion/ejercicios/2022.03.solve.js'

describe('retosdeprogramacion/ejercicios/2022.03 unit-test', () => {
    describe('isPrime()', () => {
        it('case 1', () => {
            expect( isPrime(1) ).to.eq(false)
        })
    
        it('case 2', () => {
            expect( isPrime(2) ).to.eq(true)
        })
    
        it('case 3', () => {
            expect( isPrime(3) ).to.eq(true)
        })
            
        it('case 4', () => {
            expect( isPrime(4) ).to.eq(false)
        })

        it('case 5', () => {
            expect( isPrime(9) ).to.eq(false)
        })

        it('case 6', () => {
            expect( isPrime(17) ).to.eq(true)
        })

        it('case 7', () => {
            expect( isPrime(56) ).to.eq(false)
        })
    })

    describe('getPrimes()', () => {
        it('case 1', () => {
            const result = [
                2, 3, 5, 7, 11, 13, 17, 
                19, 23, 29, 31, 37, 41, 
                43, 47, 53, 59, 61, 67,
                71, 73, 79, 83, 89, 97
            ]

            expect( getPrimes(100) ).to.have.members(result)
        })
    })
})