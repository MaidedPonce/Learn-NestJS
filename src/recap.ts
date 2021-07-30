const myName = 'Maided';
const myAge = 18;

const sume = (a: number, b: number) => {
    return a + b;
}

sume(12, 28);

class Persona {
    constructor(private age: number, private name: string) 
    {}
    getSummary() {
        return `my name is ${this.name}`
    }
}

const maided = new Persona(17, 'maided');
maided.getSummary()