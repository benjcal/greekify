"use strict";

var fs = require('fs');

// var str = fs.readFileSync(process.argv[2], 'utf8'); //process.argv[2] is the file input

// Greek Unicode decimal values using the method charCodeAt()
// \u0370 == 880
// \u03FF == 1023

// \u1F00 == 7936
// \u1FFF == 8191


var demoStr = "There are three uses of the middle voice. The Reflexive Middle reflects the action on the subject—ὁ ἄνθρωπος νίπτεται - \"the man is washing himself.\" The Intensive Middle stresses the agent producing the action. It says this is the person and no other who is performing the action—ὁ κυρίος δοξάζεται τὴν ἐκκλησίαν - \"The Lord is glorifying the church.\" The point is that it is He and not other who is accomplishing the task. The Reciprocal Middle features the interchange of the action among plural subjects—αἱ προφήται διδάσκονται - \"The prophets are teaching each other.\"";



/*****
Receives a string and a location a returns true if the character
in that location is a greek character.
*****/
function isGreekChar(str, loc) {
  if ((str.charCodeAt(loc) >= 880 &&
      str.charCodeAt(loc) <= 1023) ||
    (str.charCodeAt(loc) >= 7936 &&
      str.charCodeAt(loc) <= 8191)) {
    return true;
  } else
    return false;
};

/*****
Receives a string and a location and returns how many greek character are
*****/
function howLong(str, loc) {
  var count = 1;

  if (isGreekChar(str, loc + 1)) { //this is true if the next char IS a greek char
    console.log('next char IS a greek char');
    console.log(str[loc], loc);
  }

  if (!isGreekChar(str, loc + 1)) { //this is true if the next char is NOT a greek char
    if (isGreekChar(str, loc + 2)) {
      console.log('next char is NOT a greek char BUT next IS');
      console.log(str[loc], loc);
    }

    if (!isGreekChar(str, loc + 2)) {
      console.log('next char is NOT a greek char AND next ISN\'T');
      console.log(str[loc], loc);
    }
  }


  // if (!isGreekChar(str, loc + 1) && isGreekChar(str, loc + 2)) { //this is true if the next char is NOT a greek char but the next after IS
  //   console.log('next char is NOT a greek char but the next afte IS');
  //   console.log(str[loc], loc);
  // }

  // if (!isGreekChar(str, loc + 1) && !isGreekChar(str, loc + 2)) { //this is true if the next char is NOT a greek char but the next after is NOT
  //   console.log('next char is NOT a greek char but the next afte is NOT');
  //   console.log(str[loc], loc);
  // }



}

var x = 0;

for (var i = 0; i < demoStr.length; i++) {
  if (isGreekChar(demoStr[i])) {
    howLong(demoStr, i);

    // x += 1;
    // console.log(demoStr[i], x);
  }
}



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
