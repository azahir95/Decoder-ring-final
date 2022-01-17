// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
const englishAlphabet = "abcdefghijklmnopqrstuvwxyz";

  function substitution(input, alphabet, encode = true) {
    if (!alphabet) return false;
    if (alphabet.length!== 26) return false;
    const alphabetArray = alphabet.split('');

    input = input.toLowerCase();
    alphabet = alphabet.toLowerCase();

    let uniqueTest = true;
    alphabetArray.forEach(character => {
      const uniqueList = alphabetArray.filter(element => element === character);
      if (uniqueList.length > 1) uniqueTest = false;
    });
    if (!uniqueTest) return uniqueTest;
    
    const inputArray = input.split('');

    return (encode ? subDecoderEncoder(inputArray, englishAlphabet, alphabet) : subDecoderEncoder(inputArray, alphabet, englishAlphabet));
  }

  function subDecoderEncoder(messageArray, messageAlphabet, translationAlphabet) {
    const result = [];
    messageArray.forEach(character => {
     
      

      const messageAlphabetIndex = messageAlphabet.indexOf(character);
      const translationAlphabetArray = translationAlphabet.split('');
      if (character === ' ') {
        result.push(character);
      } else {
          try {
            if (messageAlphabetIndex === -1) {
              throw new Error (`'${character}' is not in messageAlphabet`);
            };
            result.push(translationAlphabetArray[messageAlphabetIndex]);
          } catch (err) {
            console.error(err);
          }
      }
    });
    return result.join('');
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
