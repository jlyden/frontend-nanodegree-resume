var name = "jennifer lyden"
var role = "developer"

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

str1 = "audacity";
str1 = "U" + str1.slice(2);
console.log(str1);

// $("#main").append(["jennifer lyden"]);

// var awesomeThoughts = " I am jenny and I am AWESOME! "
// console.log(awesomeThoughts);

// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN")

// $("#main").append(funThoughts)
