// ************ Nums ***********

const score = 400;
console.log(score);

const balance = new Number(100)
console.log(balance);


console.log(balance.toString().length);
console.log(balance.toFixed(2));


const otherNumber1 = 823.4545
const otherNumber2 = 8233.4545

console.log("🚀 ~ otherNumber1:", otherNumber1.toPrecision(3))
console.log("🚀 ~ otherNumber2:", otherNumber2.toPrecision(3))


const hundered = 1000000;
console.log("🚀 ~ hundered:", hundered.toLocaleString())

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.EPSILON);
console.log(Number.isFinite());
console.log(Number.isInteger());
console.log(Number.NaN);




// ************ Math's ***********

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.4));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.9));
console.log(Math.sqrt(2));
console.log(Math.min(3, 4, 6, 2, 9, 0));

console.log(Math.random());
console.log(Math.random() * 10 + 1);
console.log((Math.random() * 10) + 1);
console.log(Math.ceil((Math.random() * 10)));


const min = 30
const max = 50

console.log(Math.ceil(Math.random() * (max - min)) + min);