import { expect } from 'chai'
import { organizeGifts } from '../../adventjs/2023.8.solve.js'

describe('adventjs/2023.8 unit-test', () => {
    describe('organizeGifts()', () => {
        it('case 1', () => {
            expect( organizeGifts('76a11b') ).to.eq('[a]{a}{a}(aaaaaa){b}(b)')
        })

        it('case 2', () => {
            expect( organizeGifts('43a11b76c') ).to.eq('{a}{a}{a}{a}(aaa){b}(b)[c]{c}{c}(cccccc)')
        })

        it('case 3', () => {
            expect( organizeGifts('5z') ).to.eq('(zzzzz)')
        })
    })
})