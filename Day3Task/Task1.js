// Q1:-
function calculateDiscount(price, discount = 10) {
    return price - discount;
}

console.log("Final Price: ", calculateDiscount(200));

// Q2:-


function MergeArrays(a, b) {
    return [...a, ...b]
}
const a = [1, 2, 3];
const b = [4, 5, 6];

console.log(MergeArrays(a, b));

//Q3:-
function LogArgs(...args) {
    args.forEach((args, index) => {
        console.log(`Arguments ${index + 1}`, args);
    });
}

console.log(LogArgs("Hello", 123, { name: "John" }, [1, 2, 3]));

// Q4:-

function createMessage(b, ...messages) {
    messages.forEach(message => {
        console.log(`${b}-${message}`);
    })
}

createMessage("John Doe", "hello", "hy", "by")

//Q5:-

function Sum(a, b, c) {
    return a + b + c;
}
const arr = [1, 2, 3];

console.log(Sum(...arr));

//Q6:-

function createUserProfile(name, age = 25, country = 'Unknown') {
    return {
        name: name,
        age: age,
        country: country,
        greeting: function () {
            return `Hello My name is ${name} and my age is ${age} lives in ${country} `;
        }
    };
};

const person = createUserProfile("Rishab Kumar");

console.log(person.greeting());


