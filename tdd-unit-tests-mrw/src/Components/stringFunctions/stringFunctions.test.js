import {capFistLetter, concatStrings, secondWord} from "./stringFunctions"

describe('strings module', () => {

    describe('capitalize first:', () => {

        it('capitalize C in cat', () => {
            expect(capFistLetter('cat')).toBe("Cat")
        });

        it('capitalize D in dog not be DOG', () => {
            expect(capFistLetter('dog')).not.toBe("DOG")
        });

        it('capitalize M in matt', () => {
            expect(capFistLetter('matt')).not.toBe("matt")
        });
    });

    describe('concatenate two strings:', () => {

        it('combine cat and dog to be catdog', () => {
            expect(concatStrings('cat', 'dog')).toBe("catdog")
        });

        it('combine PB and &J to be PB&J', () => {
            expect(concatStrings('PB', '&J')).toBe("PB&J")
        });

        it('combine B and B to not be B+B', () => {
            expect(concatStrings('B','B')).not.toBe("B+B")
        });
    });

    describe('give second word:', () => {

        it('second word in: "as a professional" as "a" ', () => {
            expect(secondWord('as a professional')).toBe("a")
        });

        it('second word in: "call me back" not as " me" ', () => {
            expect(secondWord('call me back')).not.toBe(" me")
        });

        it('second word in: "Billy Bob is not real" not as " Bob " ', () => {
            expect(secondWord('Billy Bob is not real')).not.toBe(" Bob ")
        });
    })

})