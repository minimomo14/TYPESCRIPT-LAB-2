import Greeter from '../src/Greeter';

describe("Greeter" , () => {
    test("Hello, Grant!", () => {
        let potato : Greeter = new Greeter("Hello");
        let answer = potato.greet("Grant");
        expect(answer).toBe("Hello, Grant!");
    })
    test("Hello, Momo!", () => {
        let potato :
        Greeter = new Greeter("Hello");
        let answer = potato.greet("Momo");
        expect(answer).toBe("Hello, Momo!");
    });
});