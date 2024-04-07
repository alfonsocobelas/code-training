import { expect } from 'chai'
import { adjustLights } from '../../adventjs/2023.9.solve.js'

describe('adventjs/2023.09 unit-test', () => {
    describe('adjustLights()', () => {
        it('case 1', () => {
            expect( adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']) ).to.eq(1)
        })

        it('case 2', () => {
            expect( adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢']) ).to.eq(1)
        })

        it('case 3', () => {
            expect( adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴']) ).to.eq(2)
        })

        it('case 4', () => {
            expect( adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢']) ).to.eq(0)
        })
        
        it('case 5', () => {
            expect( adjustLights(['🟢', '🟢', '🟢', '🟢', '🟢']) ).to.eq(2)
        })

        it('case 6', () => {
            expect( adjustLights(['🔴', '🔴', '🔴', '🟢']) ).to.eq(1)
        })

        it('case 7', () => {
            expect( adjustLights(['🔴', '🔴', '🔴', '🔴']) ).to.eq(2)
        })

        it('case 8', () => {
            expect( adjustLights(['🔴', '🔴', '🔴']) ).to.eq(1)
        })

        it('case 9', () => {
            expect( adjustLights(['🔴', '🔴', '🟢']) ).to.eq(1)
        })

        it('case 10', () => {
            expect( adjustLights(['🔴', '🔴']) ).to.eq(1)
        })
    })
})