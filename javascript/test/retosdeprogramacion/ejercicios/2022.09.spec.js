import { expect } from 'chai'
import { translate } from '../../../retosdeprogramacion/ejercicios/2022.09.solve.js'

describe('retosdeprogramacion/ejercicios/2022.09 unit-test', () => {
    describe('translate()', () => {
        it('case 1', () => {
            const text = 'Chocapic. Es una marca de cereales?'
            const morse = '-.-. .... --- -.-. .- .--. .. -.-. .-.-.-   . ...   ..- -. .-   -- .- .-. -.-. .-   -.. .   -.-. . .-. . .- .-.. . ... ..--.. '

            expect( translate(text) ).to.eq(morse)
        })
    
        it('case 2', () => {
            const morse = '-.-. .... --- -.-. .- .--. .. -.-. .-.-.-   . ...   ..- -. .-   -- .- .-. -.-. .-   -.. .   -.-. . .-. . .- .-.. . ... ..--.. '
            const text = 'Chocapic. Es una marca de cereales?'

            expect( translate(morse) ).to.eq(text)
        })
    })
})
