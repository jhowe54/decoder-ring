

const caesarModule = (function () {
 

  let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
    //sets direction of the shift based on whether decoding or encoding
    if (encode) {
      shift *= 1;
    } else {
      shift *= -1;
    }
    let inputArray = inputToArrayOfCharacters(input);
    const codedMessage = inputArray.map((character) => {
      let shiftedIndex = alphabet.indexOf(character) + shift;

      if (shiftedIndex > 25) {
        shiftedIndex -= 26;
      }
      if (shiftedIndex < 0) {
        shiftedIndex += 26;
      }
      if (character === " " || !alphabet.includes(character)) {
        return character;
      }
      character = alphabet[shiftedIndex];
      return character;
    });

    return codedMessage.join("");
  }
  // changes the input into an array of characters and makes all characters lowercase
  function inputToArrayOfCharacters(input) {
    let inputArray = [];
    for (let i = 0; i < input.length; i++) {
      let lowercase = input[i].toLowerCase();
      inputArray.push(lowercase);
    }
    return inputArray;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
