/*
This is empty on purpose! Your code to build the resume will go here.
 */
var work = {
  "jobs": [
    {
      "employer": "CVC - Travels and Tourism",
      "title": "Web Designer",
      "location": "St. André",
      "dates": "2014-2016",
      "description": "Web Designer at CVC"
    },
    {
      "employer": "Top Web Sites",
      "title": "Web Designer",
      "location": "Lapa",
      "dates": "2012-2014",
      "description": "Web Designer at Top Web Sites"
    }
  ]
};

var projects = {
  "projects": [
    {
      "title": "Portfolio",
      "dates": "2016",
      "description": "Felipe Uliana Portfolio",
      "images": [
        "images/me.jpg"
      ]
    }
  ]
};

var bio = {
  "name": "Felipe Uliana",
  "role": "Web Developer and Designer",
  "welcomeMessage": "Hello There!",
  "contacts": {
    "mobile": "11 9.7034-3975",
    "email": "v.uliana@gmail.com",
    "github": "felipeuliana",
    "location": "Roque Del Dono Street, 180"
  },
  "skills": [
    "Front End Development",
    "Web Design"
  ]
};

var education = {
  "schools": [
    {
      "name": "UniSant\'Anna",
      "location": "Voluntários da Pátria Street",
      "degree": "Technology Degree",
      "majors": [
        "Graphic Design"
      ],
      "dates": "2011-2012",
      "url": "www.unisantanna.br"
    }
  ],
  "onlineCourses": [
    {
      "title": "JavaScript Basics",
      "school": "Udacity",
      "dates": "2016",
      "url": "www.udacity.com/courses/ud804"
    }
  ]
};

var placeHolderString = '%data%';

var formattedName = HTMLheaderName.replace(placeHolderString, 'Felipe Uliana');
var formattedRole = HTMLheaderRole.replace(placeHolderString, 'Web Developer & Designer');
var formattedMobile = HTMLmobile.replace(placeHolderString, '11 9.7034-3975');
var formattedEmail = HTMLemail.replace(placeHolderString, 'v.uliana@gmail.com');
var formattedGithub = HTMLgithub.replace(placeHolderString, 'felipeuliana');
var formattedLocation = HTMLlocation.replace(placeHolderString, 'São Paulo, Brasil');
var formattedPic = HTMLbioPic.replace(placeHolderString, 'images/me.jpg');

$('#header').prepend(formattedName, formattedRole);
$('#header').append(formattedPic);

$('#topContacts').append(formattedMobile , formattedEmail , formattedGithub, formattedLocation);

if (bio.skills.length) {
  $('#header').append(HTMLskillsStart);
  var formattedSkill = HTMLskills.replace(placeHolderString, bio.skills[0]);
  $('#skills').append(formattedSkill);
  formattedSkill = HTMLskills.replace(placeHolderString, bio.skills[1]);
  $('#skills').append(formattedSkill);
};

for (job in work.jobs) {
  if (work.jobs.hasOwnProperty(job)) {
    $('#workExperience').append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace(placeHolderString, work.jobs[job].employer);
    var formattedWorkTitle = HTMLworkTitle.replace(placeHolderString, work.jobs[job].title);
    var formattedWorkDates = HTMLworkDates.replace(placeHolderString, work.jobs[job].dates);
    var formattedWorkLocation = HTMLworkLocation.replace(placeHolderString, work.jobs[job].location);
    var formattedWorkDescription = HTMLworkDescription.replace(placeHolderString, work.jobs[job].description);
    $('.work-entry:last').append(formattedEmployer + formattedWorkTitle, formattedWorkDates , formattedWorkLocation , formattedWorkDescription);
  };
};
