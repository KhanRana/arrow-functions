/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

// function addTwoNumbers(a, b){
//     //code block
//     return a + b;
// }
// let sum = addTwoNumbers(3,5);
// console.log(sum)
// Arrow Function With Parameters

const addTwoNumbers = (a, b) => {
    //code block
    return a + b;
}
let sum = addTwoNumbers(3,7);
console.log(sum)

// Single Line Arrow Function With Parameters

const addTwoNumbers1 = (a, b) => a+b;
let sum1 = addTwoNumbers1(4,5);
console.log(sum1);
// Implicit Returns
const saySomething = message => console.log(message);
saySomething("Hello")

const sayHello = () => console.log("Hello there");
sayHello();
// Returning Multiple Lines

const multiLine = () => (
    `<p>
        This is a multiline string.
    </p>
    `
);
console.log(multiLine());

let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'maths','english', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', english: 'Joan', art: 'Simon'},
        results: {science: 93, maths: 95, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 79, art: 95},
    }
];

// const averagePoints = (arr, subject) => {
//     let total = 0;
//     let counter = 0;
//     for (let student of arr){
//         if (subject in student.results){
//         total += student.results[subject];
//         counter += 1;}
//     }
//     let average = total/counter;
//     return average;
// }

// average = averagePoints(students, 'maths');
// console.log(average);


const printStudent = (arr, subject) => {
    for (let student of arr)
        console.log(student.results[subject]);       
}

printStudent(students, 'english');