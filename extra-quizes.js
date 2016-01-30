// change the string from 'audacity' to 'Udacity'
var stc = 'audacity';

function udacityizer (string) {
  var ns = stc.slice(2);
  var cl = stc.slice(1, 2).toUppercase;
  var cs = cl + ns;
  console.log(cs);
}

udacityizer(stc);

// increment the value of the last item of the array by 1
var sampleArray = [0,0,7];

function incrementArrayItem (arr) {
  var lastIndex = arr.length - 1;
  arr[lastIndex] += 1;
  console.log(arr);
}

incrementArrayItem(sampleArray);

// transform a mixed string separated by a space into an string of two names
// the first capitalized and the second in uppercase
var str = 'cAmEROn PittMAN';

function transformName (s) {
  var arrStr = s.split(' ');
  // arrStr[0] = arrStr[0].toLowerCase().replace(arrStr[0][0], arrStr[0][0].toUpperCase());
  arrStr[0] = arrStr[0].charAt(0).toUpperCase() + arrStr[0].slice(1).toLowerCase();
  arrStr[1] = arrStr[1].toUpperCase();
  var finalName = arrStr.join(' ');
  console.log(finalName);
}

transformName(str);
