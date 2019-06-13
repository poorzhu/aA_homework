function mysteryScoping1() {
    var x = 'out of block';
    if (true) {
        var x = 'in block';
        console.log(x);
    }
    console.log(x);
}

function mysteryScoping2() {
    const x = 'out of block';
    if (true) {
        const x = 'in block';
        console.log(x);
    }
    console.log(x);
}

function mysteryScoping3() {
    const x = 'out of block';
    if (true) {
        var x = 'in block';
        console.log(x);
    }
    console.log(x);
}

function mysteryScoping4() {
    let x = 'out of block';
    if (true) {
        let x = 'in block';
        console.log(x);
    }
    console.log(x);
}

function mysteryScoping5() {
    let x = 'out of block';
    if (true) {
        let x = 'in block';
        console.log(x);
    }
    let x = 'out of block again';
    console.log(x);
}

function madLib(verb, adj, noun) {
    console.log("We shall " 
        + verb.toUpperCase()
        + " the " + adj.toUpperCase()
        + " " + noun.toUpperCase() + "."
    )
}

function input2(searchString, subString) {
    console.log(searchString.includes(subString));
}

function fizzBuzz(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 3 === 0 || array[i] % 5 === 0) {
            result.push(array[i]);
        }
    }

    return result;
}

function titleize(names, callback) {
    let jsnames = names.map(name => "Mx. " + name + " Jingleheimer Schmidt");
    jsnames.forEach(callback);
}

function printCallback(name) {
    console.log(name);
}

titleize(["Mary", "Brian", "Leo"], printCallback);