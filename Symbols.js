const sym1 = Symbol("identifier1");
const sym2 = Symbol("identifier2");
const sym3 = Symbol("identifier1");

console.log(sym1 === sym2);
console.log(sym1 === sym3);

const person = {
    name: "Sanjay",
    [sym1]: "Unique ID 101",
    age: 22
};

console.log(person[sym1]);

console.log(Object.keys(person));