const fruits = () => {
    var fruit = 'Apple';
    console.log(fruit);
}

fruits()

console.log(undefined == fruits()); // true
console.log(undefined == fruits); // false


// Ejemplo 2

const anotherFunction = () => {
    var x = 1;
    var x = 2;
    let y = 1;
    // let y = 2;
    console.log(x);
    console.log(y);
}

anotherFunction();