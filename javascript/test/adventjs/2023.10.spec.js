import { expect } from 'chai'
import { createChristmasTree } from '../../adventjs/2023.10.solve.js'

describe('adventjs/2023.10 unit-test', () => {
    describe('createChristmasTree()', () => {
        it('case 1', () => {
            const result = '   1\n  2 3\n 1 2 3\n1 2 3 1\n   |'
            expect( createChristmasTree('123', 4) ).to.eq(result)
        })
                
        it.only('case 2', () => {
            const result = '  *\n @ o\n* @ o\n  |'
            expect( createChristmasTree('*@o', 3) ).to.eq(result)
        })
    })
})
