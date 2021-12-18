import LoudGreeter from '../src/LoudGreeter';

describe("LoudGreeter" , () => {
    test("Hello, Kitty!!", () => {
        let potato:LoudGreeter = new LoudGreeter("Hello");//this is "arranging"
        potato.addVolume();
        let answer = potato.greet("Kitty");//this is "acting"
        expect(answer).toBe('Hello, Kitty!!');//this is "asserting"
    })

    test("Good morning, USA!!", () => {
        let potato:LoudGreeter = new LoudGreeter("Good morning");//this is "arranging"
        potato.addVolume();
        let answer = potato.greet("USA");//this is "acting"
        expect(answer).toBe('Good morning, USA!!');//this is "asserting"
    })

});