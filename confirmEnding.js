function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  if (str.substr(str.length - target.length) === target){
    return true;
  } else {
    return false;
  }
}

confirmEnding("Bastian", "n");


// str.substring(indexStart[, indexEnd])
// Parameters
// indexStart
// An integer between 0 and the length of the string, specifying the offset into the string of the first character to include in the returned substring.
// indexEnd
// Optional. An integer between 0 and the length of the string, which specifies the offset into the string of the first character not to include in the returned substring.
// Return value
// A new string containing the extracted section of the given string.
