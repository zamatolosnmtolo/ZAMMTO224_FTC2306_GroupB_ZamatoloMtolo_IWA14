const add = (a, b) => { return a + b; }
const multiply = (a, b) => { return a * b; }

function internal() {
    const added = this.add(this.internal.a, this.internal.b);
    const multiplied = this.multiply(this.internal.b, this.internal.a);
    console.log(multiplied);
    return this;
}
//removed "console.log(added);" as it was giving extra numbers

// Not allowed to change below this

const example1 = {
    internal: {
        a: 4,
        b: 12,
    },
    add,
    multiply,
    calculate: internal
}

const example2 = {
    internal: {
        a: 2,
        b: 6,
    },
    add,
    multiply,
    calculate: internal
}

example1.calculate();
example2.calculate();