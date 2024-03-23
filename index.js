// q1
var my2DArray = new Array(3);
for (let i = 0; i < my2DArray.length; i++) {
  my2DArray[i] = new Array(4);
}
console.log(my2DArray);

// q2
let matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
  ];
  console.log(matrix);


//   q3
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// q4
// Prompt the user to enter the table number and its length
const tableNumber = parseInt(prompt("Enter the table number:"));
const tableLength = parseInt(prompt("Enter the length of the table:"));

// Print the header of the table
console.log(`Multiplication Table of ${tableNumber}`);

// Print the table using a for loop
for (let i = 1; i <= tableLength; i++) {
  const result = tableNumber * i;
  console.log(`${tableNumber} x ${i} = ${result}`);
}

// q5
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// q6
// (A)
for (var i = 1; i <= 15; i++) {
    console.log(i);
  }

// (B) 
for (var i = 10; i > 0; i--) {
    console.log(i);
  }

// (C)
for (var i = 0; i <= 20; i += 2) {
    console.log(i);
  }

// (D)
for (var i = 1; i <= 19; i += 2) {
    console.log(i);
  }

// (E)
for (var k = 1, i = 2; i <= 20; k++, i += 2) {
    console.log(i + "k");
  }



