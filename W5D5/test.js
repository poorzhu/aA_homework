// function hammertime(time) {
//     window.setTimeout( (time) => {
//         alert(`${time} is HAMMERTIME`)
//     });
// }

// function hammerTime(time) { 
//     window.setTimeout( () => { 
//         alert(`${time} is HAMMER TIME!`); 
//     }); 
// }
 
// const readline = require('readline');

// const reader = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function teaAndBiscuits(callback) {
//     // Notice how nowhere do I return anything here! You never return in
//     // async code. Since the caller will not wait for the result, you
//     // can't return anything to them.

//     reader.question("Would you like some tea?", function (answer1) {
//         reader.question("Would you like some biscuits?", function (answer2) {
//             callback(answer1, answer2);
//         });
//     });
// }

// teaAndBiscuits(function (ans1, ans2) {
//     console.log(`So you ${ans1} want tea and you ${ans2} want coffee.`);
//     reader.close();
// });

// function teaAndBiscuits() { 
//     reader.question('Would you like some tea?', function (res) { 
//         console.log(`You replied ${res}.`); 

//         reader.question('Would you like some biscuits?', function (res2) { 
//             console.log(`You replied ${res2}.`); 
//             const first = (res === 'yes') ? 'do' : 'don\'t'; 
//             const second = (res2 === 'yes') ? 'do' : 'don\'t'; 
//             console.log(`So you ${first} want tea and you ${second} want biscuits.`); 
//             reader.close(); 
//         }); 
//     }); 
// }

// teaAndBiscuits();

// function teaAndBiscuits() {
//     let first, second;

//     reader.question('Would you like some tea?', (res) => {
//         first = res;
//         console.log(`You replied ${res}.`);
//     });

//     reader.question('Would you like some biscuits?', (res) => {
//         second = res;
//         console.log(`You replied ${res}.`);
//     });

//     const firstRes = (first === 'yes') ? 'do' : 'don\'t';
//     const secondRes = (second === 'yes') ? 'do' : 'don\'t';
//     console.log(`So you ${firstRes} want tea and you ${secondRes} want biscuits.`);
//     reader.close();
// }

function Cat() {
    this.name = 'Markov';
    this.age = 3;
}

function Dog() {
    this.name = 'Noodles';
    this.age = 4;
}

Dog.prototype.chase = function (cat) {
    console.log(`My name is ${this.name} and I'm chasing ${cat.name}! Woof!`)
};

const Markov = new Cat();
const Noodles = new Dog();

Noodles.chase(Markov);
Noodles.chase.apply(Markov, [Noodles])