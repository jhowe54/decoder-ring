
const substitutionModule = (function () {
  
  //helper function to check for unique characters
  function uniqueCharacters(cipher) {
    let cipherArray = [];
    for(let i = 0; i < cipher.length; i++) {
      cipherArray.push(cipher[i].toLowerCase());
    };
    const sortedArray = cipherArray.sort((charA, charB) => charA > charB ? -1: 1);
    for(let i = 1; i < sortedArray.length; i++) {
      if(sortedArray[i] === sortedArray[i - 1]) {
        return false; 
      };
    };
  }
  
  
  function substitution(input, cipher, encode = true) {
  //check if the cipher alphabet exists or if the length is not 26 - return false if either of these conditions is true
    if(!cipher || cipher.length != 26) {
      return false; 
    }
  //check for unique characters (no repeated characters) - utilizes the uniqueCharacters() function
    const checkForUniqueCharacters = uniqueCharacters(cipher);
    if(checkForUniqueCharacters === false) return false; 
    
    
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r", "s", "t", "u", "v", "w", "x","y","z"];

    let decodeCipher = {}
    for(let i = 0; i < cipher.length; i++) {
      if(encode) {
        decodeCipher[alphabet[i]] = cipher[i];
      } else {
      decodeCipher[cipher[i]] = alphabet[i];
      }
    }

    let inputArray = [];
    for(let i = 0; i < input.length; i++) {
      inputArray.push(input[i].toLowerCase());
    }
 
    const codedMessage = inputArray.map((character) => {
      if(character === " ") {
        character = " ";
      } else {
      character = decodeCipher[character];
    }
      return character;
    });
    return codedMessage.join("");
    }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
