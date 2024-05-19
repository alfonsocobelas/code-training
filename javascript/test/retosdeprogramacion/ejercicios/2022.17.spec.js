import { expect } from 'chai'
import { checkRace } from '../../../retosdeprogramacion/ejercicios/2022.17.solve.js'

describe('retosdeprogramacion/ejercicios/2022.17 unit-test', () => {
    describe('checkRace()', () => {
        it('case 1', () => {
            const athlete = [ "RUN", "JUMP", "RUN", "JUMP", "RUN" ]
            const track = '_|_|_'

            expect( checkRace(athlete, track) ).to.eq(true)
        })
    
        it('case 2', () => {
            const athlete = [ "RUN", "RUN", "RUN", "JUMP", "RUN" ]
            const track = '_|_|_'

            expect( checkRace(athlete, track) ).to.eq(false)
        })
    
        it('case 3', () => {
            const athlete = [ "RUN", "RUN", "JUMP", "JUMP", "RUN" ]
            const track = '_|_|_'

            expect( checkRace(athlete, track) ).to.eq(false)
        })
            
        it('case 4', () => {
            const athlete = [ "RUN", "RUN", "JUMP", "JUMP", "RUN" ]
            const track = '_|_|_|_'

            expect( checkRace(athlete, track) ).to.eq(false)
        })

        it('case 5', () => {
            const athlete = [ "RUN", "JUMP", "RUN", "JUMP" ]
            const track = '_|_|_'

            expect( checkRace(athlete, track) ).to.eq(false)
        })

        it('case 6', () => {
            const athlete = [ "RUN", "JUMP", "RUN", "JUMP", "RUN", "JUMP", "RUN" ]
            const track = '_|_|_'

            expect( checkRace(athlete, track) ).to.eq(false)
        })

        it('case 7', () => {
            const athlete = [ "JUMP", "JUMP", "JUMP", "JUMP", "JUMP" ]
            const track = '|||||'

            expect( checkRace(athlete, track) ).to.eq(true)
        })
    })
})
