import { expect } from 'chai'
import { getDifferencesBetween } from '../../../retosdeprogramacion/ejercicios/2022.11.solve.js'

describe('retosdeprogramacion/ejercicios/2022.11 unit-test', () => {
    describe('getDifferencesBetween()', () => {
        it('case 1', () => {
            const str1 = 'casa'
            const str2 = 'zara'

            expect( getDifferencesBetween(str1, str2) ).to.have.members(['cs', 'zr'])
        })
    
        it('case 2', () => {
            const str1 = 'Me gusta Java'
            const str2 = 'Me gusta Kotlin'

            expect( getDifferencesBetween(str1, str2) ).to.have.members(['Jv', 'Kolin'])
        })
    
        it('case 3', () => {
            const str1 = 'así, habló, zaratrusta.'
            const str2 = 'asi. hablo; alfonso en 2024?'

            expect( getDifferencesBetween(str1, str2) ).to.have.members(['í,ózrtu', 'io;fne204?'])
        })
    })
})