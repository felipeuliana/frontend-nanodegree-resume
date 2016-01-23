/*
This is empty on purpose! Your code to build the resume will go here.
 */
var name = 'Felipe Uliana';
var role = 'Web Developer & Designer';

var formattedName = HTMLheaderName.replace('%data%', name);
var formattedRole = HTMLheaderRole.replace('%data%', role);

$('#header').prepend(formattedRole).prepend(formattedName);
