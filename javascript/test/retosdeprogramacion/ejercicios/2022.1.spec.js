import { expect } from 'chai'
import { isAnagram } from '../../../retosdeprogramacion/ejercicios/2022.1.solve.js'

describe('retosdeprogramacion/ejercicios/2022.1 unit-test', () => {
    describe('isAnagram()', () => {
        it('case 1', () => {
            expect( isAnagram('raza', 'zara') ).to.eq(true)
        })
    
        it('case 2', () => {
            expect( isAnagram('raza', 'casa') ).to.eq(false)
        })
    
        it('case 3', () => {
            expect( isAnagram('raza', 'raza') ).to.eq(false)
        })
            
        it('case 4', () => {
            expect( isAnagram('Raza', 'Zara') ).to.eq(true)
        })
    })
})