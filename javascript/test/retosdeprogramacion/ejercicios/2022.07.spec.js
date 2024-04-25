import { expect } from 'chai'
import { countWords } from '../../../retosdeprogramacion/ejercicios/2022.07.solve.js'

described('retosdeprogramacion/ejercicios/2022.07 unit-test', () => {
    describe('countWords()', () => {
        it('case 1', () => {
            const response = countWords('¡casa; sara!') 
            expect(response).to.have.property('a', 4)
            expect(response).to.have.property('c', 1)
            expect(response).to.have.property('s', 2)
            expect(response).to.have.property('r', 1)
        })

        it('case 2', () => {
            const response = countWords("Hola, mi nombre es brais. Mi nombre completo es Brais Moure (MoureDev).")
            expect(response).to.have.property('h', 1)
            expect(response).to.have.property('o', 7)
            expect(response).to.have.property('l', 2)
            expect(response).to.have.property('a', 3)
            expect(response).to.have.property('m', 7)
            expect(response).to.have.property('i', 4)
            expect(response).to.have.property('n', 2)
            expect(response).to.have.property('b', 4)
            expect(response).to.have.property('r', 6)
            expect(response).to.have.property('e', 8)
            expect(response).to.have.property('s', 4)
            expect(response).to.have.property('c', 1)
            expect(response).to.have.property('p', 1)
            expect(response).to.have.property('t', 1)
            expect(response).to.have.property('u', 2)
            expect(response).to.have.property('d', 1)
            expect(response).to.have.property('v', 1)
        })
    })
})