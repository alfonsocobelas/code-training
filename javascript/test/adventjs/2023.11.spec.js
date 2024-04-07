import { expect } from 'chai'
import { getIndexsForPalindrome } from '../../adventjs/2023.11.solve.js'

describe('adventjs/2023.11 unit-test', () => {
    describe('getIndexsForPalindrome()', () => {
        it('case 1', () => {
            expect( getIndexsForPalindrome('anna') ).to.have.members([])
        })

        it('case 2', () => {
            expect( getIndexsForPalindrome('abab') ).to.have.members([0, 1])
        })

        it('case 3', () => {
            expect( getIndexsForPalindrome('abac') ).to.be.null
        })

        it('case 4', () => {
            expect( getIndexsForPalindrome('aaaaaaaa') ).to.have.members([])
        }) 

        it('case 5', () => {
            expect( getIndexsForPalindrome('aaababa') ).to.have.members([1, 3])
        })

        it('case 6', () => {
            expect( getIndexsForPalindrome('caababa') ).to.be.null
        })
    })
})