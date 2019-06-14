function hammertime(time) {
    window.setTimeout( (time) => {
        alert(`${time} is HAMMERTIME`)
    });
}

function hammerTime(time) { 
    window.setTimeout( () => { 
        alert(`${time} is HAMMER TIME!`); 
    }); 
}
 
const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});