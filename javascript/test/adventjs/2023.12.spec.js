import { expect } from 'chai'
import { checkIsValidCopy } from '../../adventjs/2023.12.solve.js'

describe('adventjs/2023.11 unit-test', () => {
    describe('checkIsValidCopy()', () => {
        it('case 1', () => {
            const original = 'Santa Claus is coming'
            const copy = 'sa#ta Cl#us i+ comin#'

            expect( checkIsValidCopy(original, copy) ).to.equal(true)
        })

        it('case 2', () => {
            const original = 's#nta Cla#s is coming'
            const copy = 'p#nt: cla#s #s c+min#'

            expect( checkIsValidCopy(original, copy)  ).to.equal(false)
        })

        it('case 3', () => {
            const original = 'Santa Claus'
            const copy = 's#+:. c:. s'

            expect( checkIsValidCopy(original, copy) ).to.equal(true)
        })

        it('case 4', () => {
            const original = 'Santa Claus'
            const copy = 's#+:.#c:. s'

            expect( checkIsValidCopy(original, copy)  ).to.equal(false)
        }) 
    })
})