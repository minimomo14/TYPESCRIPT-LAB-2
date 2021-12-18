import Greeter from "./Greeter";

class LoudGreeter extends Greeter {
        private extra: string = "";
        addVolume(): void {
            this.extra = this.extra + "!"
        }
        greet(name:string): string{
            return `${this.greeting}, ${name}!` + this.extra;
    }
    }

export default LoudGreeter;