import { expect } from 'chai'
import { factorial } from '../../../retosdeprogramacion/ejercicios/2022.13.solve.js'

describe('retosdeprogramacion/ejercicios/2022.13 unit-test', () => {
    describe('factorial()', () => {
        it('case 1', () => {
            expect( factorial(0) ).to.eq(1)
        })
    
        it('case 2', () => {
            expect( factorial(7) ).to.eq(5040)
        })
    
        it('case 3', () => {
            expect( factorial(10) ).to.eq(3628800)
        })

        it('case 4', () => {
            expect( factorial(1) ).to.eq(1)
        })
            
        it('case 5', () => {
            try {
                factorial(-1)
            } catch(err) {
                expect(err.message).to.equal('Error: número negativo')
            }
        })
    })
})