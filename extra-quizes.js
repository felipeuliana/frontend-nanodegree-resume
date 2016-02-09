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

$(document).click(function (loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x, y);
})

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

var work = {
  "jobs": [
    {
      "employer": "Udacity",
      "title": "Course Developer",
      "location": "Mountain View, CA",
      "dates": "Feb 2014 - Current",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LearnBIG",
      "title": "Software Engineer",
      "location": "Seattle, WA",
      "dates": "May 2013 - Jan 2014",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LEAD Academy Charter High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jul 2012 - May 2013",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "Stratford High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jun 2009 - Jun 2012",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    }
  ]
};

// Your code goes here! Let me help you get started

function locationizer(work_obj) {
  var locationArr = [];

  for (job in work_obj.jobs) {
    var location = work_obj.jobs[job].location;

    locationArr.push(location);
  };

  return locationArr;
}

// Did locationizer() work? This line will tell you!
console.log(locationizer(work));