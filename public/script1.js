const startBtn = document.getElementById("startButton");
const form = document.getElementById("form");
const question = document.getElementById("question");
const choices = document.getElementById("choices");
const choice1 = document.getElementById("choice1");
const choice2 = document.getElementById("choice2");
const choice3 = document.getElementById("choice3");
const choice4 = document.getElementById("choice4");

let amount;
let category;
let difficulty;
let i = 0;

query();

function query() {
    const queryString = window.location.search;

    // URL SearchParams Constructor
    const urlParams = new URLSearchParams(queryString);

    // Update global variables with url params
    amount = urlParams.get('amount');
    category = urlParams.get('category');
    difficulty = urlParams.get('difficulty');
    
    // Make Ajax call to API
    getQuestions();
}

function getQuestions() {
    //Ajax GET request to Open Trivia Database
    $.ajax({
        url:"https://opentdb.com/api.php?amount=" + amount + "&category=" + category + "&difficulty=" + difficulty + "&type=multiple",
        method: "GET"
    }).then(response => {
        let array = response.results;
        let newArray = array.map(trivia => {
            let answers = [trivia.incorrect_answers[0], trivia.incorrect_answers[1], trivia.incorrect_answers[2], trivia.correct_answer];
            return {
                category: trivia.category,
                question: trivia.question,
                choices: shuffle(answers),
                answer: trivia.correct_answer
            } 
        }); 
        console.log(newArray);
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
    question.textContent = array[i].question;
    choice1.textContent = array[i].choices[0];
    choice2.textContent = array[i].choices[1];
    choice3.textContent = array[i].choices[2];
    choice4.textContent = array[i].choices[3];

}
  
  