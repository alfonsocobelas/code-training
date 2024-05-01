import { expect } from 'chai'
import { isPalindrome } from '../../../retosdeprogramacion/ejercicios/2022.12.solve.js'

describe('retosdeprogramacion/ejercicios/2022.12 unit-test', () => {
    describe('isPalindrome()', () => {
        it('case 1', () => {
            const text = 'Ana lleva al oso la avellana.'
            expect( isPalindrome(text) ).to.eq(true)
        })
    
        it('case 2', () => {
            const text = 'Adivina ya te opina, ya ni miles origina, ya ni cetro me domina, ya ni monarcas, a repaso ni mulato carreta, acaso nicotina, ya ni cita vecino, anima cocina, pedazo gallina, cedazo terso nos retoza de canilla goza, de pánico camina, ónice vaticina, ya ni tocino saca, a terracota luminosa pera, sacra nómina y ánimo de mortecina, ya ni giros elimina, ya ni poeta, ya ni vida'
            expect( isPalindrome(text) ).to.eq(true)
        })
    
        it('case 3', () => {
            const text = '¿Qué os ha parecido el reto?'
            expect( isPalindrome(text) ).to.eq(false)
        })
            
        it('case 4', () => {
            const text = 'oro'
            expect( isPalindrome(text) ).to.eq(true)
        })

        it('case 5', () => {
            const text = 'casa'
            expect( isPalindrome(text) ).to.eq(false)
        })

        it('case 4', () => {
            const text = 'tenet'
            expect( isPalindrome(text) ).to.eq(true)
        })
    })
})