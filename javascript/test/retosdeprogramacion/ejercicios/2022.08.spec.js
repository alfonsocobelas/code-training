import { expect } from 'chai'
import { decimalToBinary } from '../../../retosdeprogramacion/ejercicios/2022.08.solve.js'

describe('retosdeprogramacion/ejercicios/2022.08 unit-test', () => {
    describe('decimalToBinary()', () => {
        it('case 1', () => {
            expect( decimalToBinary(387) ).to.eq(110000011)
        })
    
        it('case 2', () => {
            expect( decimalToBinary(0) ).to.eq(0)
        })
    
        it('case 3', () => {
            expect( decimalToBinary(12) ).to.eq(1100)
        })
            
        it('case 4', () => {
            expect( decimalToBinary(6) ).to.eq(110)
        })
    })
})