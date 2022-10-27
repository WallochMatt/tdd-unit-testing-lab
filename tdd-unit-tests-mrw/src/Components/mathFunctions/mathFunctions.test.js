
import { addNums, multiplyNums, subNums, divideNums } from "./mathFunctions.js"

describe('math module', () => {

    describe('add nums:', () => {

        it('add 2 + 2 to equal 4', () => {
            expect(addNums(2, 2)).toBe(4)
        });
    
        it('add 5 + 5 to not equal 7', () => {
            expect(addNums(5, 5)).not.toBe(7)
        });
    
        it('add 2 + 2 to equal 4', () => {
            expect(addNums(2, 2)).toEqual(4)
        });

        it('add two + 2 to not equal two2', () => {
            expect(() => addNums('two', 2)).toThrow(TypeError)
        });

        it('add two + 2 to not equal two2', () => {
            expect(() => addNums(two, 2)).toThrow(ReferenceError)
        });
    })

    describe('sub nums:', () => {

        it('subtract 4 - 2 to equal 2', () => {
            expect(subNums(4, 2)).toBe(2)
        });
    
        it('subtract 5 - 5 to not equal 1', () => {
            expect(subNums(5, 5)).not.toBe(1)
        });
    
        it('subtract 4 - 4 to equal 0', () => {
            expect(subNums(4, 4)).toEqual(0)
        });
    })

    describe('multiply nums:', () => {

        it('multiply 3 x 3 to equal 9', () => {
            expect(multiplyNums(3, 3)).toBe(9)
        });
    
        it('multiply 5 x -5 to not equal 25', () => {
            expect(multiplyNums(5, -5)).not.toBe(25)
        });
    
        it('multiply 5 x -5 to equal -25', () => {
            expect(multiplyNums(5, -5)).toEqual(-25)
        });
    })

    describe('divivde nums:', () => {

        it('divide 16 / 4 to equal 4', () => {
            expect(divideNums(16, 4)).toBe(4)
        });
    
        it('divide 16 / 4 to not equal 12', () => {
            expect(divideNums(16, 4)).not.toBe(12)
        });
    
        it('divide 9 / 9 to equal 1', () => {
            expect(divideNums(9, 9)).toEqual(1)
        });
    })

})
// agftryer