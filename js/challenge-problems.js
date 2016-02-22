function getRelationship(argA, argB) {
  var bothAreNumbers = (typeof argA === 'number' && typeof argB === 'number');
  var bothAreNotNumbers = (typeof argA !== 'number' && typeof argB !== 'number');
  var isOrAre = bothAreNotNumbers ? 'are' : 'is';
  var numberOrNumbers = bothAreNotNumbers ? 'numbers' : 'number';

  if (bothAreNumbers) {
    if (argA > argB) {
      return argA + ' is major than ' + argB + '.';
    } else if (argA < argB) {
      return argA + ' is minor than ' + argB + '.';
    } else {
      return argA + ' is equal to ' + argB + '.';
    }
  } else {
    if (bothAreNotNumbers && isNaN(argA) || isNaN(argB)) {
      return 'Can\'t compare relationships because ' + argA + ' and ' + argB + ' ' + isOrAre + ' not ' + numberOrNumbers + '.';
    } else if (typeof argA !== 'number' || isNaN(argA)) {
      return 'Can\'t compare relationships because ' + argA + ' ' + isOrAre + ' not a ' + numberOrNumbers + '.';
    } else if (typeof argB !== 'number' || isNaN(argB)) {
      return 'Can\'t compare relationships because ' + argB + ' ' + isOrAre + ' not a ' + numberOrNumbers + '.';
    }
  }
}

console.log(getRelationship(1,4));
console.log(getRelationship(1,1));
console.log(getRelationship('that',2));
console.log(getRelationship('this','something else'));
console.log(getRelationship(3));
console.log(getRelationship('hi'));
console.log(getRelationship(NaN));
console.log(getRelationship(NaN, undefined));

 moonWalkers = [
  'Neil Armstrong',
  'Buzz Aldrin',
  'Pete Conrad',
  'Alan Bean',
  'Alan Shepard',
  'Edgar Mitchell',
  'David Scott',
  'James Irwin',
  'John Young',
  'Charles Duke',
  'Eugene Cernan',
  'Harrison Schmitt'
];

function alphabetizer(names) {
  // Your code goes here!
  var i = 0;
  var namesLength = names.length;
  var splitedName = [];
  var newName = {};
  var newNames = [];

  for (i; i < namesLength; i++) {
    splitedName = names[i].split(' ');
    newName = {
      firstName: splitedName[0].toLowerCase(),
      lastName: splitedName[1].toLowerCase(),
      fullName: splitedName[1] + ', ' + splitedName[0]
    };
    newNames.push(newName);
  }

  newNames.sort(function(a, b) {
    if (a.lastName < b.lastName) return -1;
    if (a.lastName > b.lastName) return 1;
    return 0;
  });

  return newNames;
}

// Try logging your results to test your code!
console.log(alphabetizer(moonWalkers));