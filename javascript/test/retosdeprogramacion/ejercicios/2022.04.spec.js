import { expect } from 'chai'
import { Polygon, Triangle, Rectangle, Square, Circle, calculateArea } from '../../../retosdeprogramacion/ejercicios/2022.04.solve.js'

describe('retosdeprogramacion/ejercicios/2022.04 unit-test', () => {
    describe('calculateArea()', () => {
        it('case 1', () => {
            const triangle = new Triangle(4, 10)
            expect( calculateArea(triangle) ).to.eq(20)
        })
    
        it('case 2', () => {
            const rectangle = new Rectangle(2, 3)
            expect( calculateArea(rectangle) ).to.eq(6)
        })
    
        it('case 3', () => {
            const square = new Square(2)
            expect( calculateArea(square) ).to.eq(4)
        })
            
        it('case 4', () => {
            const circle = new Circle(3)
            expect( calculateArea(circle) ).to.eq('Circle is not polygon')
        })

        it('case 5', () => {
            try {
                new Polygon(2, 3) 
            } catch(err) {
                expect(err.message).to.equal('Class is of abstract type and cant be instantiated')
            }
        })
    })
})