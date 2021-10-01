/*
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
*/

function convertToRoman(num) {
    var remainingVal = num;
    var newRomanNum = "";
  
    var romanNum  = [{
      numeral: "M",
      value: 1000
    }, {
      numeral: "CM",
      value: 900
    }, {
      numeral: "D",
      value: 500
    }, {
      numeral: "CD",
      value: 400
    }, {
      numeral: "C",
      value: 100
    }, {
      numeral: "XC",
      value: 90
    }, {
      numeral: "L",
      value: 50
    }, {
      numeral: "XL",
      value: 40
    }, {
      numeral: "X",
      value: 10
    }, {
      numeral: "IX",
      value: 9
    }, {
      numeral: "V",
      value: 5
    }, {
      numeral: "IV",
      value: 4
    }, {
      numeral: "I",
      value: 1
    }];
  
    for (var i = 0; i < 13; i++) {
      var cantidadRepCaracter = Math.floor(remainingVal / romanNum[i].value);
      while (remainingVal >= romanNum[i].value) {
        newRomanNum += romanNum[i].numeral.repeat(cantidadRepCaracter);
        remainingVal -= (romanNum[i].value * cantidadRepCaracter);
      }
    }
  
      return newRomanNum;
  }
  
  convertToRoman(6);