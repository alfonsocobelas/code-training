import { expect } from 'chai'
import { getDaysBetween } from '../../../retosdeprogramacion/ejercicios/2022.15.solve.js'

describe('retosdeprogramacion/ejercicios/2022.15 unit-test', () => {
    describe('getDaysBetween()', () => {
        it('case 1', () => {
            expect( getDaysBetween('18/05/2022', '29/05/2022') ).to.eq(11)
        })
    
        it('case 2', () => {
            try {
                getDaysBetween('mouredev', '29/04/2022')
            } catch (err) {
                expect(err.message).to.eq('invalid date format')
            }
        })
    
        it('case 3', () => {
            expect( getDaysBetween('18/05/2022', '29/04/2022') ).to.eq(19)
        })
            
        it('case 4', () => {
            expect( getDaysBetween('25/03/2022', '04/04/2022') ).to.eq(10)
        })
    })
})
