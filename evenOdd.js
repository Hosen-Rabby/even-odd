"use strict";
const print = console.log; 

// const ps = require("prompt-sync");
// const input = ps();



// function evenOdd(num) {
// 	if (num %2 == 0) {
// 		console.log("It's an even number!");
// 	}
// 	else if (num % 2 != 0) {
// 		console.log("It's an Odd number!");
// 	}
// }

// evenOdd(25);

// ===== using return =====

// function evenOdd(num) {
// 	if (num %2 == 0) {
// 		return ("It's an even number!");
// 	}
// 	else if (num % 2 != 0) {
// 		return ("It's an Odd number!");
// 	}
// }

// console.log(evenOdd(2566668));

// =====

// ==== from an array ====


let evenOddArray = [2, 55, 22, 55, 121, 66];

let l = evenOddArray.length;
let even = [];
let odd = [];
for (var i = 0; i < l; i++) {
	let arrNum = evenOddArray[i];
	if (arrNum % 2 == 0) {
		even.push(arrNum);
		// print("Even :: ",arrNum);
		// print("Even :: ",even);
	}
	else if(arrNum % 2 != 0){
		// print(odd.push(arrNum));
		odd.push(arrNum);
	}

	// print(arrNum);
}


print("Even : ", even);
print("Odd : ",odd);


print("This is working!");