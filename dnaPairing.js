// DNA Pairing

// Input - String of “unmatched dna segments” --> Letters “ATCG”, will only give one case (capital),
// No limit to input length. 

// Output - array of dna pairs → 2 char arrays of A <-> T && C <->G, output will be the same length as the input 

// Solution

// Example:
// Input is a String: GCG  Output is an Array: [[G, C],[C, G], [G, C]];

// 1) split input into a char array
// 2) get first char = firstChar
// 3) check if firstChar is G
// 	4) Create pair [G,C]
// 5) else if firstChar is C
// 	6) Create pair [C,G]
// 7) else if firstChar is T
// 	8) Create pair [T,A]
// 9) else if firstChar is A
// 	10) Create pair [A,T]
// End if

// 11) push array to dna strand
// 12) repeat step 3 for additional chars
// 13) return the dna strand

function pairElement(str) {
  var dnaStrand = [];
  var charArray = str.split("");
  
  for (var i = 0; i<charArray.length; i++){
      if (charArray[i] === "G"){
          dnaStrand.push(["G", "C"]);
      } else if (charArray[i] === "C"){
          dnaStrand.push(["C", "G"]);
      } else if (charArray[i] === "T"){
          dnaStrand.push(["T", "A"]);
      } else if (charArray[i] === "A"){
          dnaStrand.push(["A", "T"]);
      } 
  }
  
  
  return dnaStrand;
//   return str;
}

pairElement("GCG");
