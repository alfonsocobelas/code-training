import { expect } from 'chai'
import { fibonacci } from '../../../retosdeprogramacion/ejercicios/2022.02.solve.js'

describe.only('retosdeprogramacion/ejercicios/2022.01 unit-test', () => {
    describe('fibonacci()', () => {
        it('case 1', () => {
            expect( fibonacci(3) ).to.have.members([0, 1, 1])
        })
    
        it('case 2', () => {
            expect( fibonacci(5) ).to.have.members([0, 1, 1, 2, 3])
        })
    
        it('case 3', () => {
            expect( fibonacci(8) ).to.have.members([0, 1, 1, 2, 3, 5, 8, 13])
        })
            
        it('case 4', () => {
            const result = [
                0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233,
                377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711,
                28657, 46368, 75025, 121393, 196418, 317811, 514229, 
                832040, 1346269, 2178309, 3524578, 5702887, 9227465,
                14930352, 24157817, 39088169, 63245986, 102334155, 
                165580141, 267914296, 433494437, 701408733, 1134903170,
                1836311903, 2971215073, 4807526976, 7778742049
            ]

            expect( fibonacci(50) ).to.have.members(result)
        })
    })
})