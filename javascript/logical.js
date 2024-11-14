//Logical Operators
// && Logical AND
// || Logical OR
// true&&true = true
// true&&false = false
// false&&false = false
// false&&true = false

// true||true = true
// true||false = true
// false||false = false
// false||true = true
// let b = 10
// let a = (b==10)&&(b>4);
// console.log(a);
// a = (b<5)&&(b>4);
// console.log(a);
// a = (b>5)&&(b==10);
// console.log(a);
// a = (b>1)&&(b==20);
// console.log(a);

let b = 10
let a = (b==10)||(b>4);
console.log(a); // true
a = (b<5)||(b>4);
console.log(a); // true
a = (b>5)||(b==10);
console.log(a); // true
a = (b>1)||(b==20);
console.log(a); //true

