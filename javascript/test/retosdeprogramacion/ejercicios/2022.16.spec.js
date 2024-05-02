import { expect } from 'chai'
import { capitalice } from '../../../retosdeprogramacion/ejercicios/2022.16.solve.js'

describe('retosdeprogramacion/ejercicios/2022.16 unit-test', () => {
    describe('capitalice()', () => {
        it('case 1', () => {
            expect( capitalice('hola') ).to.eq('Hola')
        })
    
        it('case 2', () => {
            expect( capitalice('churros') ).to.eq('Churros')
        })
    
        it('case 3', () => {
            expect( capitalice('¿hola qué tal estás?') ).to.eq('¿Hola Qué Tal Estás?')
        })

        it('case 4', () => {
            expect( capitalice('¿hola      qué tal estás?') ).to.eq('¿Hola      Qué Tal Estás?')
        })

        it('case 5', () => {
            expect( capitalice('El niño ñoño') ).to.eq('El Niño Ñoño')
        })
    })
})