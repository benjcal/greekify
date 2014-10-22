"use strict";

var fs = require('fs');

// var str = fs.readFileSync(process.argv[2], 'utf8'); //process.argv[2] is the file input

// Greek Unicode decimal values using the method charCodeAt()
// \u0370 == 880
// \u03FF == 1023

// \u1F00 == 7936
// \u1FFF == 8191


var demoStr = '\u0370\u0370\u0370';



/*****
Receives a string and a location a returns true if the character
in that location is a greek character.
*****/
function isGreekChar(str, x) {
  if ((str.charCodeAt(x) >= 880 &&
      str.charCodeAt(x) <= 1023) ||
    (str.charCodeAt(x) >= 7936 &&
      str.charCodeAt(x) <= 8191)) {
    return true;
  } else
    return false;
};

/*****
Receives a string and a location and returns how many greek character are
*****/
function howLong(str, x) {
  var n = 0;


  while (flag) {
    if (isGreekChar(str, x + 1)) {
      n += 1;
      x += 1;
      continue;
    }
    flag = false
    console.log('lol');
  }

}

var flag = true;
var x = 0;
howLong(demoStr, x)



// var new_str = ''
//
// for (i = 0; i < str.length; i++) {
//   if (isGreek(str, i)) {
//     new_str += ("<span class=\"greekFont\">" + str[i] + "</span>");
//   } else {
//     new_str += str[i];
//   }
// }
//
// // fs.writeFileSync(process.argv[3], new_str);
