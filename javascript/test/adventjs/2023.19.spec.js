import { expect } from 'chai'
import { revealSabotage } from '../../adventjs/2023.19.solve.js'

describe.only('adventjs/2023.19 unit-test', () => {
    describe('revealSabotage()', () => {
        it('case 1', () => {
            const store = [
                ['*', ' ', ' ', ' '],
                [' ', ' ', '*', ' '],
                [' ', ' ', ' ', ' '],
                ['*', ' ', ' ', ' ']
              ]

            const expected = [
                ['*', '2', '1', '1'],
                ['1', '2', '*', '1'],
                ['1', '2', '1', '1'],
                ['*', '1', ' ', ' ']
            ]
              
            const reveal = revealSabotage(store)

            for (let i = 0; i < expected.length; i++) {    
                expect(reveal[i]).to.be.an('array').to.have.members(expected[i])
            }
        })
    })
})