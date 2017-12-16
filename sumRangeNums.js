// var lowNum = [90, 92, 8];
// console.log(Math.min(lowNum));

// var highestNum = Math.max(90,92,8);
// console.log(highestNum);

//Example: MDN web docs
// const array1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// // 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer));
// // expected output: 10
// // 5 + 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer, 5));
// // expected output: 15

//My Set Up:
// Input: 2-digit array, unordered number array
// Output: addition of all numbers including the min number, and up to & including the max number; return the total sum value
// Steps:
// Of two numbers provided, determine lowest and highest values
// Starting at lowest, determine all values between the lowest and highest values
// Push all values into array
// Add all values within the array
// Return Sum Total


function sumAll(arr) {
  var pushedArray=[];
  for(var i=Math.min(arr[0],arr[1]); i<=Math.max(arr[0],arr[1]); i++){
    pushedArray.push(i);
  }
  
  function sumOfArray(total,num){
    return total + num;
  }
  
//   var sumOfArray=pushedArray.reduce(function(accumulator, currentValue){
//     console.log(accumulator + currentValue);
//     //console.log(accumulator + currentValue);
//   });
  return pushedArray.reduce(sumOfArray);
//   return 1;
  
}

console.log(sumAll([1, 4]));
//Output = 10


