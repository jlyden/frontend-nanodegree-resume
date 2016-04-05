var bio = {
  "name": "jennifer lyden",
  "role": "developer",
  "contacts": {
    "mobile": "(908)868-3185",
    "email": "jlyden1@alumni.nd.edu",
    "github": "https://github.com/jlyden",
    "location": "Bronx, NY"
  },
  "welcomeMsg": "I want to work for you!",
  "skills": ["programming - Python, HTML5, CSS, SQL", "teaching - philosophy, music, tech", "music - piano, guitar, percussion, voice"],
  "bioPic": "https://i.stack.imgur.com/hB170.jpg?s=328&g=1"
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.location);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedBioPic);
$("#header").append(formattedEmail);
$("#header").append(formattedMobile);
$("#header").append(formattedGithub);
$("#header").append(formattedLocation);
$("#header").append(formattedWelcomeMsg);
$("#header").append(HTMLskillsStart);
$("#header").append(formattedSkills);
