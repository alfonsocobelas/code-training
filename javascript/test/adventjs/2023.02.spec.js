import { expect } from 'chai'
import { manufacture } from '../../adventjs/2023.2.solve.js'

describe('adventjs/2023.02 unit-test', () => {
    describe('manufacture()', () => {
        it('case 1', () => {
            expect( manufacture(['tren', 'oso', 'pelota'], 'tronesa') ).to.have.members(["tren", "oso"])
        })
    
        it('case 2', () => {
            expect( manufacture(['juego', 'puzzle'], 'jlepuz') ).to.have.members(["puzzle"])
        })
    
        it('case 3', () => {
            expect( manufacture(['libro', 'ps5'], 'psli') ).to.be.an('array').that.is.empty
        })
    })
})