import { expect } from 'chai'
import { fizzBuzz } from '../../../retosdeprogramacion/ejercicios/2022.00.solve.js'

describe('retosdeprogramacion/ejercicios/2022.00 unit-test', () => {
    describe('fizzBuzz()', () => {
        const result = [
            "fizz", "buzz", "fizz", "fizz", "buzz", "fizz", "fizzbuzz", "fizz", 
            "buzz", "fizz", "fizz", "buzz", "fizz", "fizzbuzz", "fizz", "buzz", 
            "fizz", "fizz", "buzz", "fizz", "fizzbuzz", "fizz", "buzz", "fizz", 
            "fizz", "buzz", "fizz", "fizzbuzz", "fizz", "buzz", "fizz", "fizz", 
            "buzz", "fizz", "fizzbuzz", "fizz", "buzz", "fizz", "fizz", "buzz",
            "fizz", "fizzbuzz", "fizz", "buzz", "fizz", "fizz", "buzz"
        ]

        it('case 1', () => {
            expect( fizzBuzz() ).to.have.members(result)
        })
    })
})