// Input: “abce” Output: “d”

// Steps: 
// 1)  get the first letter = firstChar   ** strings are immutable; arrays are mutable
// 2)  check if next character is the next character in alphabet
// 3) check if another character is available
// 	4) repeat (aka: loop) line 2 with the next character
// 5) else
// 	6) Return undefined
// 7) else
// 	8) Return expected character

function fearNotLetter(str) {
  var firstLetter = str[0];
  
  console.log(firstLetter.charCodeAt(0));
  console.log("code for a is: ", "a".charCodeAt(0));
  console.log("code for a is: ", "b".charCodeAt(0));

  
  
  return str;
}

fearNotLetter("abce");
