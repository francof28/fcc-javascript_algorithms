/* 
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) {
    let abc = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A'];
    let newArr = str.split('');
    let arrDecod = [];
    for(let i = 0; i < newArr.length; i++){
      let char = newArr[i];
      for(let j = 0; j < 26; j++){
        if(newArr[i] === abc[j]){
         if(j > 13){
           char = abc[j - 13]
         } else {
           char = abc[j + 13]
         } 
        }
      }
      arrDecod.push(char)
    }
  return arrDecod.join('');
}

rot13("SERR PBQR PNZC");