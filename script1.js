//Ajax GET request to Open Trivia Database
$.ajax({
    url:"https://opentdb.com/api.php?amount=10&category=18&difficulty=easy",
    method: "GET"
}).then(response => {
    let array = response.results;
    let newArray = array.map(trivia => {
        return {
            category: trivia.category,
            questions: trivia.question,
            0: trivia.incorrect_answers[0],
            1: trivia.incorrect_answers[1],
            2: trivia.incorrect_answers[2],
            3: trivia.correct_answer,
            answer: trivia.correct_answer
        } 
    }); 
    console.log(newArray);
});
