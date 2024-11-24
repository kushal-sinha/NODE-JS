// create an array
const fruits = ['orange', 'apple', 'banana'];
//ab spread operator use krna hai
const multifruits = ['guava', ...fruits, 'pineapple'];
console.log(multifruits);

// if we have objects
const identity = {
    name: 'kushal',
    age: 20
};
const kushal = {
    ...identity,
    adress: "gola road patna"
}
console.log(kushal);


// rest operator
function getsum(...args) {
    let sum = 0;
    for (let arg of args) {
        sum += arg;
    }
    return sum;
}

console.log("Sums is ", getsum(1, 2, 3, 4, 5, 6, 7, 8, 9));