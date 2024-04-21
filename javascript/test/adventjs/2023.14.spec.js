import { expect } from 'chai'
import { maxGifts } from '../../adventjs/2023.14.solve.js'

describe.skip('adventjs/2023.14 unit-test', () => {
    describe('maxGifts()', () => {
        it('case 1', () => {
            expect( maxGifts([2, 4, 2]) ).to.eq(4)
        })
    
        it('case 2', () => {
            expect( maxGifts([5, 1, 1, 5]) ).to.eq(10)
        })
        
        it('case 3', () => {
            expect( maxGifts([4, 1, 1, 4, 2, 1]) ).to.eq(9)
        })

        it('case 3', () => {
            expect( maxGifts([1, 3, 1, 3, 100]) ).to.eq(103)
        })
    })  
})