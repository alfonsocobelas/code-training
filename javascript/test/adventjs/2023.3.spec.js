import { expect } from 'chai'
import { findNaughtyStep } from '../../adventjs/2023.3.solve.js'

describe('adventjs/2023.3 unit-test', () => {
    describe('findNaughtyStep()', () => {
        it('case 1', () => {
            expect( findNaughtyStep('abcd', 'abcde') ).to.eq('e')
        })

        it('case 2', () => {
            expect( findNaughtyStep('stepfor', 'stepor') ).to.eq('f')
        })
        
        it('case 3', () => {
            expect( findNaughtyStep('abcde', 'abcde') ).to.eq('')
        })

        it('case 4', () => {
            expect( findNaughtyStep('', 'a') ).to.eq('a')
        })
    })
})