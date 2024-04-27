import { expect } from 'chai'
import { translate } from '../../../retosdeprogramacion/ejercicios/2022.08.solve.js'

describe('retosdeprogramacion/ejercicios/2022.08 unit-test', () => {
    describe('translate()', () => {
        it('case 1', () => {
            const text = 'Chocapic. Es una marca de cereales?'
            const morse = '-.-. .... --- -.-. .- .--. .. -.-. .-.-.-   . ...   ..- -. .-   -- .- .-. -.-. .-   -.. .   -.-. . .-. . .- .-.. . ... ..--.. '

            expect( translate(text) ).to.eq(morse)
        })
    
        it('case 2', () => {
            const morse = '-.-. .... --- -.-. .- .--. .. -.-. .-.-.-   . ...   ..- -. .-   -- .- .-. -.-. .-   -.. .   -.-. . .-. . .- .-.. . ... ..--.. '
            const text = 'Chocapic. Es una marca de cereales?'

            const t = translate(morse) 
            expect(t ).to.eq(text)
        })
    })
})
