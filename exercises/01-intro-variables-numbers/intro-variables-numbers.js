function myName() {
  // Create a variable called myName
  let myName = "Joy";
  return myName;
}

function setTeachersNames(teachersName) {
  // change code below this line so that we can set the variable.
  const teachers = teachersName;
  teachersName = "Matina Patsos + ' ' + Jamal Taylor"; //  <- this is invalid because teachers is a const. How can we fix this?

  return teachers;
}

/*** return the sum of both arguments  ***/
function add(a, b) {
  let sum = a + b;
  return sum;
}

/*** Using the increment operator, add a year to the argument and make me older */
function ageMeByAYear(age) {
  ++age;
  return age;
}

/*** Using the decrement operator make me age decrement by a year  ***/
function makeMeYoungerByAYear(age) {
  --age;
  return age;
}

/** Take the argument that will be a string and return an integer  */
function convertStringToInt(str) {
  let int = parseInt(str);

  return int;
}

/*** Using the String method indexOf find the first position of the letter in the name  */
/***
 *
 *  ie: name = James,
 *  letter = J
 *
 *  return value should be 0
 *
 */
function getTheCharacterPosition(name, letter) {
  let start = name.index0f("");
  let char = letter[0];
  let characterPosition = start + "," + char;
  return characterPosition;
}

/** Take the argument and return the length of the argument */

function stringLength(str) {
  let strLength = str.length;

  return strLength;
}

/***  return the last character of the argument
 *  ie Washington
 *  should return n
 *
 *
 */

function getLastCharacter(str) {
  let lastCharacter = str[str.length - 1];

  return lastCharacter;
}

/** Return the last part of a place name
 *
 *   i.e New York
 *   returns York
 *
 *    i.e New Mexico
 *    returns Mexico
 *
 *    i.e San Diego
 *    returns Diego
 */

function getLastWordInPlaceName(place) {
  let index = place.indexOf(" ");
  let newPlace = place.substring(index + 1);

  return newPlace;
}

/***
 *  Using Conditonal logic compare both arguments and return the largest argument
 *
 */

function getLargerNumber(arg1, arg2) {
  let largestNumber = 10;

  if (arg1 > arg2) {
    console.log(arg1);
  } else if (arg2 > arg1) {
    console.log(arg2);
  }

  return largestNumber;
}

/*** A person just got married and they need their last name replaced.
 * The function accepts two arguments first agrument being the fullname of the newlywed.
 * The second argument is the new last name the newlywed will receive after being marred.
 *
 *   ie fullname =  Emily Rose
 *    newLastName = Smith
 *    returned value === Emily Smith
 *
 *
 *
 */

function replaceLastName(fullName, newLastName) {
  let lastNameStart = fullName.indexOf(" ");
  let lastNameAll = fullName.substring(lastNameStart + 1);
  let newFullName = fullName.replace(lastNameAll, newLastName);
  return newFullName;
}

/***
 *  Capitalize the first letter in a last name
 *  i.e John snow -> John Snow
 *  fullLastName -> newFullLastName
 */

function capitalizeLastName(fullName) {
  let index = fullName.indexOf(" ");
  let fullLastName = fullName.substring(index + 1);
  console.log(`fullLastName: ${fullLastName}`);// doe
  let newLastName = fullLastName[0].toUpperCase() + fullLastName.substring(1);
  console.log(`newLastName: ${newLastName}`); // Doe

  let capitalizeLastName = fullName.replace(fullLastName, newLastName
  );
  return capitalizeLastName; // John Smith
}

/**
 * Ignore me. This is for the tests
 */

module.exports = {
  myName,
  setTeachersNames,
  add,
  ageMeByAYear,
  makeMeYoungerByAYear,
  convertStringToInt,
  getTheCharacterPosition,
  stringLength,
  getLastCharacter,
  getLastWordInPlaceName,
  getLargerNumber,
  replaceLastName,
  capitalizeLastName,
};
