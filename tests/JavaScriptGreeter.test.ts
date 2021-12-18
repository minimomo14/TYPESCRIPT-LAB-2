import JavaScriptGreeter from '../src/JavaScriptGreeter';

describe("JavaScriptGreeter" , () => {
    test("Hello, Tiia!", () => {
        let potato : JavaScriptGreeter = new JavaScriptGreeter("Hello");//this is "arranging"
        let answer = potato.greet("Tiia");//this is "acting"
        expect(answer).toBe("console.log('Hello, Tiia!')");//this is "asserting"
    })
    test("Hi how are you today, Jenny!", () => {
        let potato : JavaScriptGreeter = new JavaScriptGreeter("Hi how are you today");//this is "arranging"
        let answer = potato.greet("Jenny");//this is "acting"
        expect(answer).toBe("console.log('Hi how are you today, Jenny!')");//this is "asserting"
    });
});