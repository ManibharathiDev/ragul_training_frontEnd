//. No Return, No Arguments
function addTwoNumber()
{
    let a = 10;
    let b = 20;
    let result = a+b;
    console.log(result);
}
//addTwoNumber();
//No Return, With Arguments
function addNumber(a,b)
{
    let c = a+b;
    console.log(c);
}
//addNumber(10,20);
//addNumber(15,10);
//addNumber(5,6);

// With Return No arguments

function add()
{
    let a = 10;
    let b = 20;
    return a+b;
}

let result = add();
console.log(result);

// With Return, With Arguments
function adds(a,b)
{
    let first = a;
    let second = b;
    let result = first+second;
    return result;
}

let addition = adds(100,100);
console.log(addition);
