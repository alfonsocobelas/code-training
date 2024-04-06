import { expect } from 'chai'
import { cyberReindeer } from '../../adventjs/2023.5.solve.js'

describe('adventjs/2023.4 unit-test', () => {
    describe('cyberReindeer()', () => {
        it('case 1', () => {
            const road = 'S..|...|..'
            const time = 10 
            const result = [
                'S..|...|..',
                '.S.|...|..',
                '..S|...|..',
                '..S|...|..',
                '..S|...|..',
                '...S...*..',
                '...*S..*..',
                '...*.S.*..',
                '...*..S*..',
                '...*...S..',
            ]

            expect( cyberReindeer({ road, time }) ).to.have.members(result)
        })

        it('case 2', () => {
            const road = 'S..|...|..'
            const time = 6 
            const result = [
                'S..|...|..',
                '.S.|...|..',
                '..S|...|..',
                '..S|...|..',
                '..S|...|..',
                '...S...*..',
            ]

            expect( cyberReindeer({ road, time }) ).to.have.members(result)
        })
        
        it('case 3', () => {
            const road = 'S..|...|..'
            const time = 0
            const result = [ 'S..|...|..' ]

            expect( cyberReindeer({ road, time }) ).to.have.members(result)
        })
    })
})

