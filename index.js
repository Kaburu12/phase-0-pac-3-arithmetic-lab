function add() {
	// block
}
  
function add(a, b) {
	return a + b;
}
console.log(add(1000,260))
  
function subtract() {
	//block
}

function subtract(a, b) {
	return a - b;
}
console.log(subtract(306,612))

function multiply() {
	//block
}

function multiply(a, b) {
	return a * b;
}
console.log(multiply(5334,5))

function divide() {
	//block
}

function divide(a, b) {
	return a/b;
}
console.log(divide(14.736842105263158, 2))


let start = 5;
start++;
start --;
console.log(start)

let number = 5;
number += 3;
console.log(number)

let n = 0;
function increment(n) {
	return n +1;
}
  console.log(0+1)

  let n1= 0;
function decrement(n) {
	return (n -1);
}
console.log(0 - 1)
  

//Parsing Numbers
parseInt("2", 10)
console.log(parseInt("2", 10))

parseInt("2.2222", 10);
console.log(parseInt("2.2222", 10))

parseInt("nonsense!", 10);
console.log(parseInt("nonsense!", 10))


//parseInt()
parseInt("2.222",10);
console.log(parseInt("2.222",10))

parseInt("0",10);
console.log(parseInt("0", 10))

parseFloat("2.222" ,10);
console.log(parseFloat("2.222", 10))

parseInt("2",10);
console.log(parseInt("2", 10))

//makeInt(n)
function makeInt(n){
	return parseInt(n, 10)
}
 console.log(parseInt(n, 10))


function preserveDecimal(n){
    return parseFloat(n)
}
console.log(parseFloat(n))