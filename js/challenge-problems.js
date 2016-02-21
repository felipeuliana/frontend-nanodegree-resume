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

// console.log(getRelationship(1,4));
// console.log(getRelationship(1,1));
// console.log(getRelationship("that",2));
// console.log(getRelationship("this","something else"));
// console.log(getRelationship(3));
console.log(getRelationship("hi"));
console.log(getRelationship(NaN));
console.log(getRelationship(NaN, undefined));