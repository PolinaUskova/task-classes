export class Counter {
    counter: number;
    constructor(start: number = 0) {
        this.counter = start;
    }
    increment() {
        this.counter++;
        return this.counter;
    }
    decrement() {
        this.counter--;
        return this.counter;
    }
}
