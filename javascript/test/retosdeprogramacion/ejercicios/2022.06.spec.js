import { expect } from 'chai'
import { reverse } from '../../../retosdeprogramacion/ejercicios/2022.06.solve.js'

describe('retosdeprogramacion/ejercicios/2022.06 unit-test', () => {
    describe('reverse()', () => {
        it('case 1', () => {
            expect( reverse('Hola mundo') ).to.eq('odnum aloH')
        })
    
        it('case 2', () => {
            expect( reverse('Que hora es?') ).to.eq('?se aroh euQ')
        })
    
        it('case 3', () => {
            expect( reverse('mister potato') ).to.eq('otatop retsim')
        })
    })
})