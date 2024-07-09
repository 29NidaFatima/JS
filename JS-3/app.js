// 'this' keyword
const student = {
    name: "nida",
    math: 98,
    eng: 95,
    phy: 97,
    getAvg() {
        console.log(this); // this methods is for student object
        let avg = (this.math + this.eng + this.phy) / 3;
        console.log(`${this.name} got average marks= ${avg}`);
    }
}
console.log(student);
function getAvg() {
    console.log(this);
}
console.log(this); // in browser--> window object
// TRY & CATCH
console.log("heloooo");
console.log("heloooo");
try {
    console.log(a);
} catch (err) {
    console.log("caught an error..a is not defined");
    console.log(err);
}
console.log("heloooo");
console.log("heloooo");
// ARROW FUNCTION
const sum = (a, b) => {
    console.log(a + b);
}
sum(2, 3);
const power = (a, b) => {
    return a ** b;
}
console.log(power(2, 3));
const cube = (n) => {
    return n * n * n;
}
console.log(cube(3));
// Another way to define arrow function when having single argument, we can remove parentheses but we can not remove when there is no argument
const cube = n => {
    return n * n * n;
}
console.log(cube(3));
// ARROW FUNCTION-- implicit return
const mul = (a, b) => (a * b)
console.log(mul(9, 3));
