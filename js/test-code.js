// Test Code for JavaScript Basics

// $("#main").append(["jennifer lyden"]);
// var awesomeThoughts = " I am jenny and I am AWESOME! "
// console.log(awesomeThoughts);
// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN")
// $("#main").append(funThoughts)

str1 = "audacity";
str1 = str1[1].toUpperCase() + str1.slice(2);
// console.log(str1);

// var skills = ["awesomeness", "programming", "teaching", "Python"];
// $("#main").append(skills[0]);

var nums = [1,2,3,4,5];
var end = nums.pop();
nums.push(end+1);
// console.log(nums);

name = "cAmEROn PittMAN";

function standardizeNameCapitalization(_name) {
  var nameArray = _name.split(' ');
  // manipulate first name and add space
  var firstName = nameArray[0];
  firstName = firstName[0].toUpperCase() +
              firstName.slice(1).toLowerCase() + " ";

  // manipulate second name
  var lastName = nameArray[1].toUpperCase();
  var finalName = firstName + lastName;

  return finalName;
}

function standardizeNameCapitalization2(_name) {
  var nameArray = _name.split(' ');
  // manipulate first name
  nameArray[0] = nameArray[0].slice(0,1).toUpperCase() +
                 nameArray[0].slice(1).toLowerCase();

  // manipulate second name
  nameArray[1] = nameArray[1].toUpperCase();
  var finalName = nameArray.join(' ');

  return finalName;
}
// console.log(standardizeNameCapitalization2(name));
