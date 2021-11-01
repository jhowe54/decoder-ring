# Decoder Ring
### The Decoder Ring is a web app that allows users to encode and decode messages via three main methods:
* [Caesar Shift](https://en.wikipedia.org/wiki/Caesar_cipher)
* [Polybius Square](https://en.wikipedia.org/wiki/Polybius_square)
* [Substitution Cipher](https://en.wikipedia.org/wiki/Substitution_cipher)

## Overview
### 1. Caesar Shift
#### Encode
![Caesar Shift](/screenshots/caesar-encode.png?raw=true "Caesar Shift")
The Caesar Shift takes the standard alphabet and then shifts the value of each letter by the user-defined shift amount.

e.g. If the shift is 5, the letter _'a'_ becomes _'f'_. If the shift is -5, the letter _'a'_ becomes _'v'_ ( in this case because not letter comes before '_a_', the shift wraps backwards through the alphabet)

Notes: 
* the shift amount is constrained between -25 and 25. Otherwise you will receive an error. 
* capital letters and spaces are ignored in the encoding/decoding algorithms 

#### Decode
![Caesar Shift](/screenshots/caesar-decode.png?raw=true "Caesar Shift")
For decoding a message, simply copy the encoded message into the text field and set the correct shift number

Note: the original shift amount is necessary to translate the original message.

### 2. Polybius Square
#### Encode
![Caesar Shift](/screenshots/polybius-encode.png?raw=true "Caesar Shift")
The Polybius Square uses a 5x5 grid to assign numeric values to each letter of the standard alphabet 

![Polybius Square](/screenshots/polybius-square-grid.png?raw=true "Polbius Square")

Note: the letters _i_ and _j_ are both assigned the value of 42 to keep the grid square. 
#### Decode
![Caesar Shift](/screenshots/polybius-decode.png?raw=true "Caesar Shift")
To decode a message, simply enter the original encoded message into the text box and press submit. 

Note: the output reads "_thi/js i/js a very secret message"_. This seems strange but because the letters _i_ and _j_ are both assigned the value of 42 the output displays _"i/j"_ - so you will have to use the context of the message to decide which character it is supposed to be. 

### 3. Substitution Cipher
#### Encode
![Substitution Cipher](/screenshots/substitution-encode.png?raw=true "Substitution Cipher")

The Substitution Cipher allows users to define a unique alphabet key for encoding and decoding messages. 

#### Decode
![Substitution Cipher](/screenshots/substitution-decode.png?raw=true "Substitution Cipher")

The order in which you enter the letters for alphabet key determines the corresponding value of each character. 

Note: The alphabet key must contain **26** letters (no numbers) and characters may be repeated. 

# Technologies
### Built with: 
* JavaScript, HTML, CSS
* Tested with [Chai](https://www.chaijs.com/)