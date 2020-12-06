var readlineSync = require('readline-sync');
var chalk = require('chalk');

console.log(chalk.rgb(13, 209, 124)("Welcome to a quiz on Dream11 IPL 2020!!!"));

var userName = readlineSync.question(chalk.blue("Please enter your name : "));

var score = 0;

function play(question, options, answer){
  var userReply = readlineSync.keyInSelect(options, question);
  console.log(chalk.rgb(245, 114, 66)('You answered : ', options[userReply]));

  if (options[userReply] === answer){
    console.log(chalk.rgb(245, 114, 66)("That is the correct answer!"));
    score = score + 1;
  }
  else{
    console.log(chalk.rgb(245, 114, 66)("That is the wrong answer!"));
    console.log(chalk.rgb(245, 114, 66)("The correct answer is : ", answer));
  }

  console.log(chalk.blue("Current score : ", score));
  console.log("-----------------------------------------------")
}

var questionList = [
  {
    question : "Which team won this season of IPL ? ",
    options : ["Delhi Capitals", "Chennai Super Kings", "Mumbai Indians", "Royal Challengers Bangalore"],
    answer : "Mumbai Indians"
  },
  {
    question : "Who won the Orange Cap ? ",
    options : ["KL Rahul", "Shikhar Dhawan", "Virat Kohli", "Mayank Agrawal"],
    answer : "KL Rahul"
  },
  {
    question : "Who won the Purple Cap ? ",
    options : ["Jasprit Bumrah", "Trent Boult", "Mohammed Shammi", "Kagiso Rabada"],
    answer : "Kagiso Rabada"
  },
  {
    question : "Which batsman scored back-to-back centuries ? ",
    options : ["AB Devillears", "Jos Buttler", "Shikhar Dhawan", "KL Rahul"],
    answer : "Shikhar Dhawan"
  },
  {
    question : "Which team ended the league stage with the most points ? ",
    options : ["Delhi Capitals", "Mumbai Indians", "Sunrisers Hyderabad", "Kolkata Knight Riders"],
    answer : "Mumbai Indians"
  },
  {
    question : "How many super overs were witnessed in this season ? ",
    options : ["2", "3", "4", "5"],
    answer : "5"
  }
]

var highScores = [
  {
    name : "Rohit",
    score : 4
  },
  {
    name : "Param",
    score : 3
  },
  {
    name : "Rahil",
    score : 3
  },
  {
    name : "Elliot",
    score : 2
  }
]

var userReadyOrNot = readlineSync.keyInYN("Are you ready to begin " + userName + " ? ");
if (userReadyOrNot){
  for (var i = 0;i < questionList.length; i++){
    play(questionList[i].question, questionList[i].options, questionList[i].answer);
  }

  console.log(chalk.rgb(13, 209, 124)("You've reached the end of this game! Thanks for playing!"));
  console.log(chalk.rgb(13, 209, 124)("Final score :", score));
  console.log("-----------------------------------------------")

  console.log(chalk.rgb(13, 209, 124)("############ LEADERBOARD #################"));

  for (var i = 0; i<highScores.length; i++) {
    console.log(chalk.rgb(13, 209, 124)("Name : " + highScores[i].name + "\nScore : " + highScores[i].score + "\n"));
  }

  if (score >= highScores[highScores.length-1].score){
    console.log(chalk.rgb(170, 209, 13)("Congrats!!! You've made it to our leaderboard. \nSend us a screenshot of your score for verification in order to see your name displayed on our leaderboard."));
  }
  else {
    console.log(chalk.rgb(170, 209, 13)("You have just missed, play once more to get your name on the Leaderboard"));
  }

}
else {
  console.log(chalk.rgb(13, 209, 124)("You've exited the game!"));
}

