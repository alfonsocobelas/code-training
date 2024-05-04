import { expect } from 'chai'
import { optimizeIntervals } from '../../adventjs/2023.17.solve.js'

describe('adventjs/2023.17 unit-test', () => {
    describe('optimizeIntervals()', () => {
        it('case 1', () => {
            const intervals = [[5, 8], [2, 7], [3, 4]]
            const expected = [[2, 8]]

            const optimize = optimizeIntervals(intervals) 
            compareResults(expected, optimize)
        })

        it('case 2', () => {
            const intervals = [[1, 3], [8, 10], [2, 6]]
            const expected = [[1, 6], [8, 10]]

            const optimize = optimizeIntervals(intervals) 
            compareResults(expected, optimize)
        })

        it('case 3', () => {
            const intervals = [[3, 4], [1, 2], [5, 6]]
            const expected = [[1, 2], [3, 4], [5, 6]]

            const optimize = optimizeIntervals(intervals) 
            compareResults(expected, optimize)
        })

        it('case 4', () => {
            const intervals = [[9, 14], [1,7], [5,10], [2,3]]
            const expected = [[1, 14]]

            const optimize = optimizeIntervals(intervals) 
            compareResults(expected, optimize)
        }) 

        it('case 5', () => {
            const intervals = [[1, 3], [8, 10], [2, 6], [9, 15]]
            const expected = [[1, 6], [8, 15]]

            const optimize = optimizeIntervals(intervals) 
            compareResults(expected, optimize)
        }) 
    })

    function compareResults(expected, actual) {
        for (let i = 0; i < expected.length; i++) {
            const interval = actual[i]

            expect(interval).to.be.an('array').to.have.members(expected[i])
        }
    }
})