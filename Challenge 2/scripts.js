// Define the functions
const add = (a, b) => { return a + b; }
const multiply = (a, b) => { return a * b; }

function internal() {
  const added = this.add(this.internal.a, this.internal.b);
  const multiplied = this.multiply(this.internal.a, this.internal.b);
  return added + multiplied; // Return the sum of added and multiplied
}

// Not allowed to change below this

const example1 = {
  internal: {
    a: 2,
    b: 4,
    c: 8,
  },
  add,
  multiply,
  calculate: internal
}

const example2 = {
  internal: {
    a: 2,
    b: 2,
    c: 3,
  },
  add,
  multiply,
  calculate: internal
}

console.log(example1.calculate()); // Should log 16 (8 + 8)
console.log(example2.calculate()); // Should log 8 (4 + 4)
