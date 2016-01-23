/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
  contacts: {
    mobile: '11 9.7034-3975',
    email: 'v.uliana@gmail.com',
    github: 'felipeuliana',
  },
  name: 'Felipe Uliana',
  bioPic: 'images/me.jpg  ',
  role: 'Web Developer & Designer',
  skills: ['Web Development', 'Web Design'],
  welcomeMessage: 'Hi there!'
};

var work = {};

work.city = 'St. André';
work.employer = 'CVC - Travels and Tourism';
work.jobPosition = 'Web Designer';
work.yearsWorked = 1;

var education = {
  "schools": [
    {
      "name": "UniSant\'Anna",
      "city": "S. Paulo",
      "degree": "Techology",
      "major": ["Graphic Design"]
    }
  ]
};

var formattedName = HTMLheaderName.replace('%data%', bio.name);
var formattedRole = HTMLheaderRole.replace('%data%', bio.role);

var formattedWorkEmployer = HTMLworkEmployer.replace('%data%', work.employer);
var formattedWorkPosition = HTMLworkTitle.replace('%data%', work.jobPosition);
var formattedEducationName = HTMLschoolName.replace('%data%', education['name']);
var formattedEducationSchool = HTMLschoolDegree.replace('%data%', education['lastSchool']);

$('#header').append(formattedName);
$('#header').append(formattedRole);

$('#workExperience').append(formattedWorkEmployer + formattedWorkPosition);
$('#education').append(formattedEducationName + formattedEducationSchool);

debugger;
