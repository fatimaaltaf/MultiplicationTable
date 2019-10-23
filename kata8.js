const multiplicationTable = function(maxValue) {
  let array = [];
  let number = 0;
  let newLine = "\n";
  for (let row = 1; row <= maxValue; row++) {
    for (let column = 1; column <= maxValue; column++) {
      number = row * column;
      array.push(number);
    } // end of inner loop
    array.push(newLine);
  } // end of outer loop
  return array.join(" ");
}; //end of function

  
console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));