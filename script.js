var startButton = document.querySelector("#button");
var timerDisplay = document.querySelector("#heading2");
var formH4Tag = document.querySelector("#nxtQuestion");
var trueBtn = document.querySelector("#answer1");
var falseBtn = document.querySelector("#answer2");
var labelA = document.querySelector("#choiceA1");
var labelB = document.querySelector("#choiceB1");
var labelC = document.querySelector("#choiceC1");

var index = 0;
var score = 0;

var questions = [{question:"A _____________ can store different values at different times.", answer1:"variable", answer2:"boolean", answer3:"string"},
                 {question:"Building a new string out of other strings is called _______________.", answer:"concatenating"},
                 {question:"To find the length of a string, add ___________ to the end.", answer:".length"}
                ];

//Countdown timer
startButton.addEventListener("click", function(){
   startButton.style.display = "none";
   var time = 90;
   showQuestions();
    console.log(time);
    var quizTimer = setInterval(function() {
        startButton = " ";
        time--;
        timerDisplay.textContent = "TIME... " + time;
        
        if(time === 0) {
            clearInterval(quizTimer);
        }
    }, 1000);

})

//Displays questions
function showQuestions(){
    formH4Tag.textContent = questions[index].question;
    labelA.textContent = questions[index].answer1;
    labelB.textContent = questions[index].answer2;
    labelC.textContent = questions[index].answer3;
    
}
//Need a way to show multiple choice buttons for each questions
trueBtn.addEventListener("click", function(){
    //when this button is clicked, alert Correct
    console.log("true button");

    if(questions[index].answer) {
        alert('You are correct!');
        score++;
    }
    else {
        alert("You are incorrect");
        score--;

    }


})
falseBtn.addEventListener("click", function(){
    //when this button is clicked, alert Incorrect
    console.log("false button");
})




