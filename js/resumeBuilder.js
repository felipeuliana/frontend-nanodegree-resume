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
  skills: ['Web Developer', 'Web Design'],
  welcomeMessage: 'Hi there!'

};

var formattedName = HTMLheaderName.replace('%data%', bio.name);
var formattedRole = HTMLheaderRole.replace('%data%', bio.role);

$('#header').append(formattedName);
$('#header').append(formattedRole);
