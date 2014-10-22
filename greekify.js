var fs = require('fs');

var str = fs.readFileSync(process.argv[2], 'utf8'); //process.argv[2] is the file input

// Greek Unicode decimal values using the method charCodeAt()
// \u0370 == 880
// \u03FF == 1023

// \u1F00 == 7936
// \u1FFF == 8191

function isGreekChar(i) {
  if ((i.charCodeAt(0) >= 880 && i.charCodeAt(0) <= 1023) || (i.charCodeAt(0) >= 7936 && i.charCodeAt(0) <= 8191)) {
  return true;
} else
  return false;
};

var new_str = ''

for (i = 0; i < str.length; i++) {
  if (isGreek(str, i)) {
    new_str += ("<span class=\"greekFont\">" + str[i] + "</span>");
  } else {
    new_str += str[i];
  }
}

// fs.writeFileSync(process.argv[3], new_str);
