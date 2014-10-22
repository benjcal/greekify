"use strict";

var fs = require('fs');

var str = fs.readFileSync(process.argv[2], 'utf8'); //process.argv[2] is the file input

// Greek Unicode decimal values using the method charCodeAt()
// \u0370 == 880
// \u03FF == 1023

// \u1F00 == 7936
// \u1FFF == 8191

var demoStr = "There are three uses of the middle voice. The Reflexive Middle reflects the action \non the subject—ὁ ἄνθρωπος νίπτεται - \"the man is washing himself.\" The Intensive Middle stresses \nthe agent producing the action. It says this is the person and no other who is performing the \naction—ὁ κυρίος δοξάζεται τὴν ἐκκλησίαν - \"The Lord is glorifying the church.\" The point is that \nit is He and not other who is accomplishing the task. The Reciprocal Middle features the \ninterchange of the action among plural subjects—αἱ προφήται διδάσκονται - \"The prophets are \nteaching each other.\"";

/*** Receives a string and a location a returns true if the character
in that location is a greek character ***/
function isGreekChar(str, loc) {
  if ((str.charCodeAt(loc) >= 880 &&
      str.charCodeAt(loc) <= 1023) ||
    (str.charCodeAt(loc) >= 7936 &&
      str.charCodeAt(loc) <= 8191)) {
    return true;
  } else
    return false;
};

/*** Receives a string and a location and returns how many greek character are ***/
function isNext(str, loc) {

  if (isGreekChar(str, loc + 1)) { //this is true if the next char IS a greek char
    return true;
  }

  if (!isGreekChar(str, loc + 1)) { //this is true if the next char is NOT a greek char
    if (isGreekChar(str, loc + 2)) {
      return true;
    }
    if (!isGreekChar(str, loc + 2)) {
      return false;
    }
  }
}


var openTag = '<span class=greekFont>';
var closeTag = '</span>'

function main(inStr) {

  var tmpStr = '';

  for (var i = 0; i < inStr.length; i++) {

    if (isGreekChar(inStr[i])) {
      tmpStr += openTag;
      while (isNext(inStr, i)) {
        tmpStr += inStr[i];
        i++;
      }
      tmpStr += inStr[i];
      if (!isNext(inStr, i)) { //if next and char is not gree add it to the str
        tmpStr += closeTag;
      }

    } else {
      tmpStr += inStr[i]
    }
  }

  return tmpStr;
}

fs.writeFileSync(process.argv[2]  += '.greekify', main(str));
