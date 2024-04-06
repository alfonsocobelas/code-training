import { expect } from 'chai'
import { drawGift } from '../../adventjs/2023.7.solve.js'

describe('adventjs/2023.7 unit-test', () => {
    describe('drawGift()', () => {
        it('case 1', () => {
            const result = '#'
            expect( drawGift(1, '^') ).to.eq(result)
        })
                
        it('case 2', () => {
            const result = ' ##\n###\n##\n'
            expect( drawGift(2, '*') ).to.eq(result)
        })

        it('case 3', () => {
            const result = '   ####\n  #++##\n #++#+#\n####++#\n#++#+#\n#++##\n####\n'
            expect( drawGift(4, '+') ).to.eq(result)
        })

        it('case 4', () => {
            const result = '    #####\n   #***##\n  #***#*#\n #***#**#\n#####***#\n#***#**#\n#***#*#\n#***##\n#####\n'
            expect( drawGift(5, '*') ).to.eq(result)
        })
    })
})
