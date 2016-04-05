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


var work = {};
work.Employer = "Bergen Community College";
work.Location = "Paramus, NJ";
work.Title = "Assistant Professor";
work.Dates = "2007 - present";
work.Description = "I taught stuff.";

var education = {
  "schools": [
    {
      "name": "University of Notre Dame",
      "location": "South Bend, IN",
      "degree": ["M.A.", "M.Div."],
      "major": ["Philosophy", "Theology"],
      "dates": ["1999", "2003"],
      "url": "http://www.nd.edu"
    },
    {
      "name": "University of Scranton",
      "location": "Scranton, PA",
      "degree": ["B.S"],
      "major": ["Biophysics", "Philosophy"],
      "minor": "Math",
      "dates": "1997",
      "url": "http://www.uofs.edu"
    }
  ],
  "onlineCoursework": [
    {
      "program": "Full Stack NanoDegree",
      "school": "Udacity",
      "dates": "in progress",
      "url": "https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004"
    },
    {
      "course": "CS50 - Intro to Computer Science",
      "school": "edX - HarvardX",
      "dates": "Dec 2015",
      "url": "https://www.edx.org/course/introduction-computer-science-harvardx-cs50x",
      "certificate": "https://courses.edx.org/certificates/42725cfdc1d74c6e8900f0cff2e6499c"
    },
    {
      "course": "6.00.1x - Intro to Comp Sci using Python",
      "school": "edX - MITx",
      "dates": "Mar 2016",
      "url": "https://www.edx.org/course/introduction-computer-science-mitx-6-00-1x-6",
      "certificate": "https://courses.edx.org/certificates/c9b1fdebb5824683a45385acee7bead4"
    },
    {
      "course": "Intro to Linux",
      "school": "edX - Linux Foundation",
      "dates": "Jan 2016",
      "url": "https://www.edx.org/course/introduction-linux-linuxfoundationx-lfs101x-0",
      "certificate": "https://s3.amazonaws.com/verify.edx.org/downloads/f4780e815d1f44809de01a3a07e2ef9e/Certificate.pdf"
    },
    {
      "course": "Essentials of Linux System Administration",
      "school": "edX - Linux Foundation",
      "dates": "in progress",
      "url": "https://www.edx.org/course/linux-system-administration-essentials-linuxfoundationx-lfs201x"
    }
  ]
};

$("#main").append(work["Title"]);
$("#main").append(education.Name);
