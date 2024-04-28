import { expect } from 'chai'
import { isBalancedExpresion } from '../../../retosdeprogramacion/ejercicios/2022.09.solve.js'

describe.only('retosdeprogramacion/ejercicios/2022.09 unit-test', () => {
    describe('isBalancedExpresion()', () => {
        it('case 1', () => {
            const expr = '{ [ a * ( c + d ) ] - 5 }'
            expect( isBalancedExpresion(expr) ).to.eq(true)
        })
    
        it('case 2', () => {
            const expr = '{ a * ( c + d ) ] - 5 }'
            expect( isBalancedExpresion(expr) ).to.eq(false)
        })

        it('case 3', () => {
            const expr = '{ a + b [c] * (2x2) } } } }'
            expect( isBalancedExpresion(expr) ).to.eq(false)
        })

        it('case 4', () => {
            const expr = '{ { { a + b { [c] * (2x2) } } } }'
            expect( isBalancedExpresion(expr) ).to.eq(true)
        })

        it('case 5', () => {
            const expr = '{ a^4 + ( ( (ax4) ) ) }'
            expect( isBalancedExpresion(expr) ).to.eq(true)
        })

        it('case 6', () => {
            const expr = '{ a^4 + ( ( (ax4) }'
            expect( isBalancedExpresion(expr) ).to.eq(false)
        })

        it('case 7', () => {
            const expr = '{ ] a * ( c + d ) + ( 2 - 3 )[ - 5 }'
            expect( isBalancedExpresion(expr) ).to.eq(false)
        })

        it('case 8', () => {
            const expr = '{ [ a * ( c + d ) + ( 2 - 3 ) ] - 5 }'
            expect( isBalancedExpresion(expr) ).to.eq(true)
        })

        it('case 9', () => {
            const expr = '{{{{{{(}}}}}}'
            expect( isBalancedExpresion(expr) ).to.eq(false)
        })

        it('case 10', () => {
            const expr = '{{{{{{}}}}}}'
            expect( isBalancedExpresion(expr) ).to.eq(true)
        })

        it.only('case 11', () => {
            const expr = '(a'
            expect( isBalancedExpresion(expr) ).to.eq(false)
        })

        it('case 12', () => {
            const expr = '(a)'
            expect( isBalancedExpresion(expr) ).to.eq(true)
        })
    })
})