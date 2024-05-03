import { expect } from 'chai'
import { autonomousDrive } from '../../adventjs/2023.15.solve.js'

describe('adventjs/2023.15 unit-test', () => {
    describe('autonomousDrive()', () => {
        it('case 1', () => {
            const store = ['..!....', '...*.*.']
            const movements = ['R', 'R', 'D', 'L']
            const result = ['.......', '...*!*.']

            expect( autonomousDrive({ store, movements }) ).to.have.members(result)
        })

        it('case 2', () => {
            const store = ['!............', '...*.*.....', '...*.*.....', '........***']
            const movements = ['D', 'D', 'D', 'R', 'R', 'R', 'R', 'U', 'U', 'U']
            const result = ['....!........', '...*.*.....', '...*.*.....', '........***']

            expect( autonomousDrive({ store, movements }) ).to.have.members(result)
        })
    })
})