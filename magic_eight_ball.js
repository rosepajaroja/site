/**Magic Eight Ball Project | Codeacademy | Learn Javascript | Nov. 27, 2022 **/

let userName = "";
userName = "Rose"; //change the name
userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");

let userQuestion = ""; //change question
userQuestion = "Will I won the lottery?";
console.log(`${userName}: ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8); //generates random number between 0 and 8
console.log(`${randomNumber}`);

let eightBall = ""; //will be designed by the value of randomNumber

/* Switch Keyword */
switch (randomNumber) {
  case 0:
    eightBall = "It is certain";
    break;
  case 1:
    eightBall = "It is decidedly so";
    break;
  case 2:
    eightBall = "Reply hazy try again";
    break;
  case 3:
    eightBall = "Cannot predict now";
    break;
  case 4:
    eightBall = "Do not count on it";
    break;
  case 5:
    eightBall = "My sources say no";
    break;
  case 6:
    eightBall = "Outlook not so good";
    break;
  case 7:
    eightBall = "Signs point to yes";
    break;
  case 8:
    eightBall = "You'll nail it!";
    break;
  default:
    eightBall = "In your dreams!";
    break;
} 

/* If, Else If, Els Statements */

/* if (randomNumber === 0) {
  eightBall = "It is certain";
} else if (randomNumber === 1) {
  eightBall = "It is decidedly so";
} else if (randomNumber === 2) {
  eightBall = "Reply hazy try again";
} else if (randomNumber === 3) {
  eightBall = "Cannot predict now";
} else if (randomNumber === 4) {
  eightBall = "Do not count on it";
} else if (randomNumber === 5) {
  eightBall = "My sources say no";
} else if (randomNumber === 6) {
  eightBall = "Outlook not so good";
} else if (randomNumber === 7) {
  eightBall = "Signs point to yes";
} else if (randomNumber === 8) {
  eightBall = "You'll nail it!";
} else {
  eightBall = "In your dreams!";
} */

console.log(`${eightBall}, ${userName}.`);
