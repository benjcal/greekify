var fs = require('fs');

var file = fs.readFileSync(process.argv[2], 'utf8'); //process.argv[2] is the file input

// Greek Unicode decimal values using the method charCodeAt()
// \u0370 == 880
// \u03FF == 1023

// \u1F00 == 7936
// \u1FFF == 8191

function isGreek(str, x) {
  if ((str.charCodeAt(x) >= 880 && str.charCodeAt(x) <= 1023) || (str.charCodeAt(x) >= 7936 && str.charCodeAt(x) <= 8191)) {
    return true;
  } else
    return false;
};

var new_str = ''

for (i = 0; i < file.length; i++) {
  if (isGreek(file, i)) {
    new_str += ("<span class=\"greekFont\">" + file[i] + "</span>");
  } else {
    new_str += file[i];
  }
}

fs.writeFileSync(process.argv[3], new_str);
