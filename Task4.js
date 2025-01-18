// Q1:-

// const ask = (question, yes, no) => {
//     if (confirm(question)) yes();
//     else no();
// }
// ask(
//     "Do you agree?",
//     () => alert("You agreed."),
//     () => alert("You canceled the execution.")
// );

// Q2:-
const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];
console.log(materials.map((material) => material.length));

// Ans [8,6,7,9]

// Q3:-

const square = (number) => {
    return number * number;
}
console.log(square(5));
console.log(square(6));

//Q4:-

const arr1 = (number) => {
    return number * number
}
const arr = [1, 2, 3];
console.log(arr1(arr));

//Q5:-
const reverseString = (string) => string.split('').reverse('').join('');

console.log(reverseString("Hello"))

//Q6:-

const chainable = (initialvalue) => ({
    value: initialvalue,
    add: function (num) {
        this.value += num;
        return this;
    },
    multiply: function (num) {
        this.value *= num;
        return this;
    },
    getResult: function () {
        return this.value;
    },

})

const result = chainable(5).add(3).multiply(2).getResult();
console.log(result);
