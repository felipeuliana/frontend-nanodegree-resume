/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var formattedName = HTMLheaderName.replace('%data%', 'Felipe Uliana');
 var formattedRole = HTMLheaderRole.replace('%data%', 'Web Developer & Designer');

 $('#header').prepend(formattedName).append(formattedRole);
