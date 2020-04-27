// //function expression
// const speak = function(){
//     console.log('good day');
// };

// greet();
// greet();
// greet();

// // speak();
// // speak();
// // speak();

// //function declaration
// function greet(){
//     console.log('hello there')
// }

//arguments & parameters

// const speak = function(name = 'Adrian', time = 'night'){
//     console.log(`good ${time} ${name}`);
// }

// speak();
// speak('armando');

// regular function 
// const calArea = function(radius){
//     return 3.14 * radius**2;
// }

//arrow function
// const calArea = (radius) => 3.14 * radius**2;


// const area = calArea(5);
// console.log('Area = ', area); 

//practise arrow functions
// const greet = function(){
//     return 'gello, world';
// }

// const greet = () => 'hello wolrd;'
// const result = greet();
// console.log(result); 

// const bill = function(products, tax){
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }

// const bill = (products, tax) => {
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// };

// console.log(bill([10,15,30], 0.2));

// const name = 'Sheila';

// // functions

// const greet = () => 'hello';

// let resultOne = greet();
// console.log(resultOne); 

// //methods

// let resultTwo = name.toUpperCase();
// console.log(resultTwo);


// callbacks & foreach

// const myFunc = (callbackFunc) => {
//     // do something
//     let value = 50;
//     callbackFunc(value);
// };

// myFunc(value => {
//     // do something
//     console.log(value);
// });

// let people = ['Sheila', 'Armando', 'Adrian', 'Artemio', 'Juan'];

// const logPerson = (person, index) => {
//     console.log(`${index} - hello ${person}`);
// }
// people.forEach(logPerson);

// get a reference to the 'ul'
const ul = document.querySelector('.people');

const people = ['Sheila', 'Armando', 'Adrian', 'Artemio', 'Juan'];

let html = ``;

people.forEach(person => {
    //create html template
    html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;