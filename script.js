const startBtn = document.getElementById("startButton");
const form = document.getElementById("form");
const question = document.getElementById("question");
const choices = document.getElementById("choices");
const choice1 = document.getElementById("choice1");
const choice2 = document.getElementById("choice2");
const choice3 = document.getElementById("choice3");
const choice4 = document.getElementById("choice4");
const alert1 = document.getElementById("alert1");
const alertText1 = document.getElementById("alertText1");
const closeBtn1 = document.getElementById("closeBtn1");
const gameOver = document.getElementById("gameOver");
const score = document.getElementById("score");
const timer = document.getElementById("timer");

let amount;
let category;
let difficulty;
let newArray;
let i = 0;
let counter = 0;
let time;

initialize();
playQuiz();

function initialize() {

    // Make certain elements hidden initially
    gameOver.style.display = "none";
    alert1.style.display = "none";
        
    const queryString = window.location.search;

    // URL SearchParams Constructor
    const urlParams = new URLSearchParams(queryString);

    // Update global variables with url params
    amount = urlParams.get('amount');
    category = urlParams.get('category');
    difficulty = urlParams.get('difficulty');
    
    // Set Timer
    if(amount <= 8) {
        time = 60;
    }
    else if (amount >= 9 && amount <= 11) {
        time = 90;
    }
    else {
        time = 180;
    }
    // Make Ajax call to API
    getQuestions();
}

//Ajax GET request to Open Trivia Database
function getQuestions() {    
    $.ajax({
        url:"https://opentdb.com/api.php?amount=" + amount + "&category=" + category + "&difficulty=" + difficulty + "&type=multiple",
        method: "GET"
    }).then(response => {
        let array = response.results;
        newArray = array.map(trivia => {
            let answers = [trivia.incorrect_answers[0], trivia.incorrect_answers[1], trivia.incorrect_answers[2], trivia.correct_answer];
            return {
                category: trivia.category,
                question: trivia.question,
                choices: shuffle(answers),
                answer: trivia.correct_answer
            } 
        }); 
        
        render(newArray);
    });
}

// Fisher-Yates Shuffle Algorithm
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}

// Render question and choices to html
function render(array) {

    score.textContent = counter;

    // Replace special characters before rendering
    question.textContent = array[i].question.replace(/&#039;/g, "'").replace(/&quot;/ig, '"');
    choice1.textContent = array[i].choices[0].replace(/&#039;/g, "'").replace(/&quot;/ig, '"');
    choice2.textContent = array[i].choices[1].replace(/&#039;/g, "'").replace(/&quot;/ig, '"');
    choice3.textContent = array[i].choices[2].replace(/&#039;/g, "'").replace(/&quot;/ig, '"');
    choice4.textContent = array[i].choices[3].replace(/&#039;/g, "'").replace(/&quot;/ig, '"');
}

// Play Quiz
function playQuiz() {    
    let quizTimer = setInterval(function() {   
        time--;
        timer.textContent = time;        
            if(time === 0 || i > amount - 1) {
                clearInterval(quizTimer);
                gameCheck();
            }
    }, 1000);
   
    // Check answers using event delegation
    choices.addEventListener("click", function(event) {
        if(event.target.textContent === newArray[i].answer) {
            alert1.style.display = "";
            alert1.className = "alert alert1";            
            alertText1.textContent = "CORRECT!"; 
            counter++;              
        }         
        else {
            alert1.style.display = "";
            alert1.className = "alert alert2";
            alertText1.textContent = "Incorrect - " + `${newArray[i].answer.toUpperCase().replace(/&#039;/g, "'").replace(/&quot;/ig, '"')}`;
        }       
    }); 
    
    // Close alert and go to next question or end quiz
    closeBtn1.addEventListener("click", function() {
        i++;         
        gameCheck();                        
    });         
}

// End Quiz
function gameCheck() {
    if(i > amount - 1 || time === 0) {
        question.style.display = "none";
        choice1.style.display = "none";
        choice2.style.display = "none";
        choice3.style.display = "none";
        choice4.style.display = "none";
        gameOver.style.display = "";
    }
    else {
        render(newArray);         
    }  
}





  
  