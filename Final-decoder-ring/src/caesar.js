// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
// If the shift value isn't present, equal to 0, less than -25, or greater than 25, the function should return false
// inverse of encode, is decode. this will reverse the encoding process.
//Capital letters can be ignored.
//Results are a sting
//loop through "text" input 
// take each letter and shift by the "shift" parameter. 
// a with +3 shift = d | g with -4 shift = b
//use .charCodeAt() to assign numbers to a letter. 
// 122 = z & 97 = a in charCodeAt 
// if code is over 122, wrap with - 26 and if its under 97 wrap with +26
// new letter is result of charCode shift,
// encyprtion is newLetters added to a single string 
  
const caesarModule = (function () {
  

  function caesar(input, shift, encode = true) {
    if (!shift || shift===0 || shift < -25 || shift > 25) {
      return false;
    }
    if (!encode) shift *= -1;    
    let text = input.toLowerCase();   
    let results= "";    
    for (let i=0; i< text.length; i++) {     
      let letter= text[i];
      if (letter.match(/[a-z]/)) {
        let coded = text.charCodeAt(i) + shift;
        if (coded > 122) {
          coded = coded - 26;
        }
        if (coded < 97) {
          coded = coded + 26;
        }
        let newLetter = String.fromCharCode(coded);
        results += newLetter;
      } else {
        results += letter
      }
    }
    console.log(results);
    return results;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
