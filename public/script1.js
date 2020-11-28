const startBtn = document.getElementById("startButton");
const form = document.getElementById("form");
let amount;
let category;
let difficulty;

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
                questions: trivia.question,
                choices: shuffle(answers),
                answer: trivia.correct_answer
            } 
        }); 
        console.log(newArray);
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
  
  