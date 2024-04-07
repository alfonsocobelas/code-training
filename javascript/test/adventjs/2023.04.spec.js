import { expect } from 'chai'
import { decode } from '../../adventjs/2023.4.solve.js'

describe('adventjs/2023.04 unit-test', () => {
    describe('decode()', () => {
        it('case 1', () => {
            expect( decode('hola (odnum)') ).to.eq('hola mundo')
        })

        it('case 2', () => {
            expect( decode('(olleh) (dlrow)!') ).to.eq('hello world!')
        })
        
        it('case 3', () => {
            expect( decode('sa(u(cla)atn)s') ).to.eq('santaclaus')
        })
    })
})

