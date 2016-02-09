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
        "https://colorlib.com/wp/wp-content/uploads/sites/2/foliogine-lite-portfolio-theme.jpg"
      ]
    }
  ],
  "display": function() {
    var projectsSection = $('#projects');

    projectsSection.append(HTMLprojectStart);

    for (project in projects.projects) {
      var projectEntry = $('.project-entry').last();
      var projectTitle = HTMLprojectTitle.replace(placeHolderString, projects.projects[project].title);
      var projectDates = HTMLprojectDates.replace(placeHolderString, projects.projects[project].dates);
      var projectDescription = HTMLprojectDescription.replace(placeHolderString, projects.projects[project].description);

      if (projects.projects[project].images.length > 0) {
        for (image in projects.projects[project].images) {
          var projectImage = HTMLprojectImage.replace(placeHolderString, projects.projects[project].images[image]);
        }
      }

      projectEntry.append(projectTitle, projectDates, projectDescription, projectImage);
    }
  }
};

var bio = {
  "name": "Felipe Uliana",
  "role": "Web Developer and Designer",
  "welcomeMessage": "Hello There!",
  "contacts": {
    "mobile": "11 9.7034-3975",
    "email": "v.uliana@gmail.com",
    "github": "felipeuliana",
    "location": "São Paulo, Brasil"
  },
  "pic": 'images/me.jpg',
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

var formattedName = HTMLheaderName.replace(placeHolderString, bio.name);
var formattedRole = HTMLheaderRole.replace(placeHolderString, bio.role);
var formattedMobile = HTMLmobile.replace(placeHolderString, bio.contacts.mobile);
var formattedEmail = HTMLemail.replace(placeHolderString, bio.contacts.email);
var formattedGithub = HTMLgithub.replace(placeHolderString, bio.contacts.github);
var formattedLocation = HTMLlocation.replace(placeHolderString, bio.contacts.location);
var formattedPic = HTMLbioPic.replace(placeHolderString, bio.pic);

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

function displayWork () {
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
}

displayWork();

$(document).click(function (loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x, y);
})

function inName(name) {
  name = name.trim().split(' ');

  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
  return name.join(' ');
}

projects.display();

// $('#main').append(internationalizeButton);
