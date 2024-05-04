import { expect } from 'chai'
import { transformTree } from '../../adventjs/2023.16.solve.js'

describe('adventjs/2023.16 unit-test', () => {
    describe('transformTree()', () => {
        it('case 1', () => {
            const tree = [3, 1, 0, 8, 12, null, 1] 
            const res = {
              value: 3,
              left: {
                value: 1,
                left: {
                  value: 8,
                  left: null,
                  right: null
                },
                right: {
                  value: 12,
                  left: null,
                  right: null
                }
              },
              right: {
                value: 0,
                left: null,
                right: {
                  value: 1,
                  left: null,
                  right: null
                }
              }
            }

            expect( transformTree(tree) ).to.nested.deep.eq(res)
        })
    })  
})