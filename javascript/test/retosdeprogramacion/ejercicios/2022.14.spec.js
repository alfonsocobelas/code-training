import { expect } from 'chai'
import { isNarcissistic } from '../../../retosdeprogramacion/ejercicios/2022.14.solve.js'

describe('retosdeprogramacion/ejercicios/2022.14 unit-test', () => {
    describe('isNarcissistic()', () => {
        it('case 1', () => {
            expect( isNarcissistic(371) ).to.eq(true)
        })
    
        it('case 2', () => {
            expect( isNarcissistic(-371) ).to.eq(false)
        })
    
        it('case 3', () => {
            expect( isNarcissistic(372) ).to.eq(false)
        })
            
        it('case 4', () => {
            expect( isNarcissistic(153) ).to.eq(true)
        })

        it('case 4', () => {
            expect( isNarcissistic(1634) ).to.eq(true)
        })

        it('case 5', () => {
            expect( isNarcissistic(9) ).to.eq(true)
        })
    })
})