var startButton = document.querySelector("#button");
var timerDisplay = document.querySelector("#heading2");
var next = document.querySelector("#nxtQ");
var quest = document.querySelector("#question");
var ans1 = document.querySelector("#answer1");
var ans2 = document.querySelector("#answer2");
var ans3 = document.querySelector("#answer3");


var index = 0;
var score = 0;
var questions = [{q:"A _____________ can store different values at different times.", a1:"variable", a2:"boolean", a3:"string"},
                 {q:"Building a new string out of other strings is called _______________.", a2:"concatenating", a1:"declaring", a3:"arrays"},
                 {q:"To find the length of a string, add ___________ to the end.", a2:".length", a3:".querySelector", a1:".charAt"}
];

startButton.addEventListener("click", function(){   
   var time = 90;       
   var quizTimer = setInterval(function() {   
   time--;
   timerDisplay.textContent = "TIME... " + time;        
   if(time === 0) {
   clearInterval(quizTimer);
   }
   }, 1000);        
})

//Function to display question and answers
function showQuestions(){
    quest.textContent = questions[index].q; 

    ans1.textContent = questions[index].a1;
    
    ans2.textContent = questions[index].a2;
    
    ans3.textContent = questions[index].a3;
    
    index++;    
}

next.addEventListener("click", function(){
    showQuestions();
})




