/**
 * En el taller de Santa, un elfo travieso ha estado jugando en 
 * la cadena de fabricación de regalos, añadiendo o eliminando
 * un paso no planificado.
 * 
 * Tienes la secuencia original de pasos en la fabricación 
 * original y la secuencia modificada modified que puede incluir
 *  un paso extra o faltar un paso.
 * 
 * Tu tarea es escribir una función que identifique y devuelva 
 * el primer paso extra que se ha añadido o eliminado en la 
 * cadena de fabricación. Si no hay ninguna diferencia entre las 
 * secuencias, devuelve una cadena vacía.
 */

const original1 = 'abcd'
const modified1 = 'abcde'
findNaughtyStep(original1, modified1) // 'e'

const original2 = 'stepfor'
const modified2 = 'stepor'
findNaughtyStep(original2, modified2) // 'f'

const original3 = 'abcde'
const modified3 = 'abcde'
findNaughtyStep(original3, modified3) // ''

/**
 * A tener en cuenta:
 *  - Siempre habrá un paso de diferencia o ninguno.
 *  - La modificación puede ocurrir en cualquier lugar de la cadena.
 *  - La secuencia original puede estar vacía
 */