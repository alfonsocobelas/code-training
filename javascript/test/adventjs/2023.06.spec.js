import { expect } from 'chai'
import { maxDistance } from '../../adventjs/2023.6.solve.js'

describe('adventjs/2023.06 unit-test', () => {
    describe('maxDistance()', () => {
        it('case 1', () => {
            const movements = '>>*<'
            expect( maxDistance(movements) ).to.eq(2)
        })

        it('case 2', () => {
            const movements2 = '<<<>'
            expect( maxDistance(movements2) ).to.eq(2)
        })
        
        it('case 3', () => {
            const movements3 = '>***>'
            expect( maxDistance(movements3) ).to.eq(5)
        })

        it('case 3', () => {
            const movements4 = '>***<'
            expect( maxDistance(movements4) ).to.eq(3)
        })
    })
})

