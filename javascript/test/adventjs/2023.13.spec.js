import { expect } from 'chai'
import { calculateTime } from '../../adventjs/2023.13.solve.js'

describe('adventjs/2023.11 unit-test', () => {
    describe('calculateTime()', () => {
        it('case 1', () => {
            expect( calculateTime(['00:10:00', '01:00:00', '03:30:00']) ).to.eq('-02:20:00')
        })

        it('case 2', () => {
            expect( calculateTime(['02:00:00', '05:00:00', '00:30:00']) ).to.have.members('00:30:00')
        })

        it('case 3', () => {
            const deliveries = [
                '00:45:00',
                '00:45:00',
                '00:00:30',
                '00:00:30'
              ]

            expect( calculateTime(deliveries) ).to.eq('-05:29:00')
        })
    })
})