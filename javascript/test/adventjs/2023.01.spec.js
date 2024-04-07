import { expect } from 'chai'
import { firstRepeatedId } from '../../adventjs/2023.1.solve.js'

describe('adventjs/2023.01 unit-test', () => {
    describe('firstRepeatedId()', () => {
        it('case 1', () => {
            expect( firstRepeatedId([2, 1, 3, 5, 3, 2]) ).to.eq(3)
        })
    
        it('case 2', () => {
            expect( firstRepeatedId([1, 2, 3, 4]) ).to.eq(-1)
        })
        
        it('case 3', () => {
            expect( firstRepeatedId([5, 1, 5, 1]) ).to.eq(5)
        })
    })  
})