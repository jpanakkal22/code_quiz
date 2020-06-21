//questions and answers object

var questions = [{
    q:"What can store different values at different times?",
    opt1:"variable", 
    opt2:"boolean", 
    opt3:"string",
    a:"1"
},{
    q:"Building a new string out of other strings is called what?", 
    opt1:"declaring",
    opt2:"concatenating", 
    opt3:"arrays",
    a:"2"
},{
    q:"To find the length of a string, what should you add to the end?", 
    opt1:".charAt",
    opt2:".querySelector", 
    opt3:".length",
    a:"3"
}];

var startButton = document.querySelector("#button");
var timerDisplay = document.querySelector("#heading2");
var next = document.querySelector("#nxtQ");
var quest = document.querySelector("#question");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var answerButtons = document.querySelector("#answerBtns");
var container = document.querySelector(".container");

//var currentQuestions = 1;
var time = 90;  
var index = 0;
var score = 0;
var totQuestions = questions.length;


//hide buttons at start
option1.style.display = "none";
option2.style.display = "none";
option3.style.display = "none";
next.style.display = "none";

//timer
startButton.addEventListener("click", function(){
    startButton.style.display = "none";
    option1.style.display = "";
    option2.style.display = "";
    option3.style.display = "";
    next.style.display = "";
    showQuestions();
         
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
    option1.textContent = questions[index].opt1;    
    option2.textContent = questions[index].opt2;    
    option3.textContent = questions[index].opt3;    
       
    
}
//console.log(currentQuestions);
answerButtons.addEventListener("click", function(event){
//    console.log(questions[index].a);    
    if(event.target.value === questions[index].a) {
        alert("CORRECT!")
        score++;
        }
    else{
        alert("WRONG!");   
        score--;        
    } 
    index++; 
    if(index > totQuestions - 1){
     gameOver();
    }
    showQuestions();
    //currentQuestions++;      
})

function gameOver (){
    container.innerHTML = " ";
    var tag = document.createElement("h1");
    tag.textContent = "Your time is " + time;
    container.appendChild(tag);
}


//next.addEventListener("click", function(){
   
    //console.log(currentQuestions);
    //showQuestions();
    
    
//})




