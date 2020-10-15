var quiz = [
    {
        question: "1. HTML stands for:",
        options: ["a. Hypertext Markup Language", "b. Hypertext Marketing Language", "c. Hypercoding Marker Language", "d. Hyperspeed Markup Language"],
        correctAnswer: 0
    },
    {
        question: "2. CSS stands for:", 
        options: ["a. Cool Sytle Sheet", "b. Cool Story Sis", "c. Cascading Style Sheets", "d. Cascading Sorter Sheet"],
        correctAnswer: 2
    }
]

var quizIndex = 0;
var startBtn = document.querySelector(".start-button"); 

function renderQuestion (currentIndex){
    var question = quiz[currentIndex].question;
    return question;
}

startBtn.addEventListener('click', function(){
    renderQuestion(quizIndex);
    console.log('clicked');
})