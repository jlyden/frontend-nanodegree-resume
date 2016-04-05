var bio = {
  "name": "jennifer lyden",
  "role": "developer",
  "contacts": {
    "mobile": "(908) 868-3185",
    "email": "jlyden1@alumni.nd.edu",
    "github": "https://github.com/jlyden",
    "location": "Bronx, NY"
  },
  "welcomeMsg": "I want to work for you!",
  "skills": ["programming", "teaching", "music"],
  "bioPic": "https://i.stack.imgur.com/hB170.jpg?s=328&g=1"
};

// "skills": ["programming - Python, HTML5, CSS, SQL", "teaching - philosophy, music, tech", "music - piano, guitar, percussion, voice"],


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

var projects = {
  "projects": [
    {
      "title": "Straight Gin",
      "dates": "March 2016",
      "description": "Back-end for Straight Gin card game, designed for Google AppEngine deployment",
      "github": "https://github.com/jlyden/straight-gin",
      "images": []
    },
    {
      "title": "Gifter",
      "dates": "Jan - March 2016",
      "description": "Database-supported web app maintaining lists & associations of givers, recipients and gifts",
      "github": "https://github.com/jlyden/catalog",
      "images": []
    },
    {
      "title": "Book Connect",
      "dates": "Dec 2015",
      "description": "Social media web app to connect book buyers and sellers",
      "github": "https://github.com/jlyden/bookconnect",
      "images": []
    },
    {
      "title": "Tournament",
      "dates": "Nov 2015",
      "description": "Python app for running a Swiss-Pairings tournament with database support",
      "github": "https://github.com/jlyden/tournament",
      "images": []
    }
  ]
};

var work = {
  "jobs": [
    {
      "employer": "Udacity",
      "location": "remote",
      "title": "Code Reviewer",
      "dates": "2016 - present",
      "description": "Review code for FSND Project 4 - 'Design a Game'."
    },
    {
      "employer": "Bergen Community College",
      "location": "Paramus, NJ",
      "title": "Assistant Professor",
      "dates": "2007 - present",
      "description": ["Teach 5-6 philosophy or religion courses per semester.", "Built, updated, and taught 4 online or hybrid courses, including HTML & CSS files.", "Instruct colleagues in online teaching."]
    },
    {
      "employer": "Renew International",
      "location": "Plainfield, NJ",
      "title": "Web Designer & Writer",
      "dates": "2004 - 2007",
      "description": ["Created design and content for original CampusRenew webpage", "Wrote content for CampusRenew publications."]
    },
    {
      "employer": "Our Lady of the Mount Catholic Church",
      "location": "Warren, NJ",
      "title": "Director of Music",
      "dates": "2004-2006",
      "description": ["Planned, prepared and coordinated music for 5 weekly liturgies, plus weddings and funerals", "Directed adult, child and handbell choirs; created intergenerational “folk” choir"]
    },
    {
      "employer": "Marist High School",
      "location": "Bayone, NJ",
      "title": "Educator",
      "dates": "2003 - 2004",
      "description": "Taught Morality and Introduction to Christianity courses."
    }
  ]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedBioPic);
$("#header").append(formattedEmail);
$("#header").append(formattedMobile);
$("#header").append(formattedGithub);
$("#header").append(formattedLocation);
$("#header").append(formattedWelcomeMsg);

if (bio.skills.length > 0 ) {
  $("#header").append(HTMLskillsStart);
  var formattedSkill = "";
  for (var i=0; i < bio.skills.length; i++) {
    formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkill);
  }
}

for (job in work.jobs) {
  $("#workExperience").append(HTMLworkStart);
  if (work.jobs.hasOwnProperty(job)){
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle
    $(".work-entry:last").append(formattedEmployerTitle);
  }
}
