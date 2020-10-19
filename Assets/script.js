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
    },
    {
        question: "3. Which HTML tage would you use for a paragraph of text?",
        options: ["a. <text>", "b. <p>", "c. <h1>", "d. <body>"],
        correctAnswer: 1
    }, 
    {
        question: "4. Which of the following tags is considered 'self-closing'?", 
        options: ["a. <body>", "b. <h2>", "c. <h4>", "d. <img>"],
        correctAnswer: 3
    },
    {
        question: "5. How many heading elements does HTML define?",
        options: ["a. Two", "b. Ten", "c. Six", "d. Twelve"],
        correctAnswer: 2
    },
    {
        question: "6. How would you style a paragraph with the ID 'content' in CSS?",
        options: ["a. #content", "b. .content", "c. $content", "d. *content"],
        correctAnswer: 0
    },
    {
        question: "7. Select the correct definition for padding:",
        options: ["a. Adds space between element and surrounding elements", "b. Forces element to center", "c. Aligns an element to the right", "d. Adds space between element and its own border"],
        correctAnswer: 3
    }, 
    {
        question: "8. In the Bootstrap grid system, how many columns is default?",
        options: ["a. Twelve", "b. Ten", "c. As many as you want", "d. One"],
        correctAnswer: 0
    },
    {
        question: "9. What is a media query?",
        options: ["a. A way to change the way a webpage is displayed based on device viewport", "b. A way to select something on a webpage", "c. A way to add a news widget to your webpage", "d. A way to make sure the user understands the content"],
        correctAnswer: 0
    },
    {
        question: "10. There are three fundamental programming language in the modern web. They are:",
        options: ["a. HTML, HTML4, HTML5", "b.HTML, CSS, Javascript", "c. Bootstrap, CSS3, CSS5", "d. Javascript, Java, jQuery"],
        correctAnswer: 1
    },
    {
        question: "11. What are commonly referred to as the nouns of programming?",
        options: ["a. Nouns", "b. Functions", "c. Variables", "d. Methods"],
        correctAnswer: 2
    },
    {
        question: "12. What is an array?",
        options: ["a. A type of variable", "b. A collection of data", "c. Contained in square brackets []", "d. All of the above"],
        correctAnswer: 3
    },
    {
        question: "13. If console.log is used in javascript, where would you find it displayed?",
        options: ["a. As a pop-up message in the browser", "b. On the webpage", "c. In the console of hte dev tools in the browser", "d. All of the above"],
        correctAnswer: 2
    },
    {
        question: "14. A block of code is usually referring to :",
        options: ["a. Code written inside curly brackets {}", "b. A file with code written in it", "c. An array", "d. A function"],
        correctAnswer: 0
    },
    {
        question: "15. A variable declearation or counter (iterator), a condition, and an increment are three parameters which compose:",
        options: ["a. An if statement", "b. An else statement", "c. A function", "d. a for loop"],
        correctAnswer: 3
    },
    {
        question: "16. In a for loop, the iterator often starts at zero. If the for loop is meant to run based on the length of an array, why is it important that the iterator starts at zero?",
        options: ["a. Because the shape of a loop is similar to a zero", "b. Because the first element of an array is at index 0", "c. Because an array is a variable", "d. None of the above"],
        correctAnswer: 1
    },
    {
        question: "17. A boolean is a phrase that can either be:",
        options: ["a. 1 or 2", "b. 0 or 1", "c. True or False", "d. Black or White"],
        correctAnswer: 2
    },
    {
        question: "18. In Javascript, how do you execute a function named 'MyFunction'?",
        options: ["a. myFunction()", "b. Call myFunction", "c. call.myFunction(run)", "d. Run myFunction()"],
        correctAnswer: 0
    },
    {
        question: "19. Which would display as a comment in Javascript?",
        options: ["a. <!-- This is a comment -->", "b. // This is a comment", "c. 'This is a comment'", "d. {This is a comment}"],
        correctAnswer: 1
    },
    {
        question: "20. If you wanted to select all <p> tags in an HTML file, which would you use?",
        options: ["a. document.querySelector(p)", "b. document.getElementByID(p)", "c. document.getElementByClass(p)", "d. document.querySelectorAll(p)"], 
        correctAnswer: 3
    }
]

var quizIndex = 0;
var startBtn = document.querySelector(".start-button"); 


function clearWelcome () {
    var clearWelcome = document.querySelector(".welcome");
    clearWelcome.innerHTML = ("");
}

function hideButton () {
    startBtn.style.display = "none";
}

function clearQuiz () {
    var quizContent = document.querySelector(".quiz-content")
    quizContent.innerHTML = ("");
}


var timer = document.querySelector(".timeLeft")
var secondsLeft = 61;

function setTime(){
    var highScoreEl = document.querySelector(".score-content")
    highScoreEl.style.display = "none";
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timer.textContent = secondsLeft;
        if (secondsLeft <6) {
            timer.style.color = "red";
        }
        
        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            timer.textContent = "Game Over!"
            clearQuiz();
            highScoreEl.style.display = "block";
        }
        
    }, 1000);
}


var score = 0;
var yourScore = document.querySelector(".your-score");
yourScore.textContent = score;

function setScore() {
    var scoreEl = document.querySelector(".score");
    scoreEl.textContent = (score);
}

var optionA = document.querySelector(".quiz-option-a");
var optionB = document.querySelector(".quiz-option-b");
var optionC = document.querySelector(".quiz-option-c");
var optionD = document.querySelector(".quiz-option-d");

function renderQuestion (currentIndex){
    var question = quiz[currentIndex].question;
    var writeQuestion = document.querySelector(".quiz-question");
    writeQuestion.textContent = question;
    
    optionA.textContent = quiz[currentIndex].options[0];
    optionB.textContent = quiz[currentIndex].options[1];
    optionC.textContent = quiz[currentIndex].options[2];
    optionD.textContent = quiz[currentIndex].options[3];    
}

startBtn.addEventListener('click', function(){
    setTime();
    clearWelcome();
    renderQuestion(quizIndex);
    hideButton();
    setScore();
})


var result = document.querySelector(".quiz-answer");

optionA.addEventListener('click', function(){
    if (quiz[quizIndex].correctAnswer === 0) {
        score++
        result.textContent = "Correct!"
    } else {
        result.Content = "Wrong Answer"
        secondsLeft = secondsLeft - 10;
    }
    quizIndex++
    renderQuestion(quizIndex)
})
optionB.addEventListener('click', function(){
    if (quiz[quizIndex].correctAnswer === 1) {
        score++
        result.textContent = "Correct!"
    } else {
        result.textContent = "Wrong Answer"
        secondsLeft = secondsLeft - 10;
    }
    quizIndex++
    renderQuestion(quizIndex)
})
optionC.addEventListener('click', function(){
    if (quiz[quizIndex].correctAnswer === 2) {
        score++
        result.textContent = "Correct!"
    } else {
        result.textContent = "Wrong Answer"
        secondsLeft = secondsLeft - 10;
    }
    quizIndex++
    renderQuestion(quizIndex)
})
optionD.addEventListener('click', function(){
    if (quiz[quizIndex].correctAnswer === 3) {
        score++
        result.textContent = "Correct!"
    } else {
        result.textContent = "Wrong Answer"
        secondsLeft = secondsLeft - 10;
    }
    quizIndex++
    renderQuestion(quizIndex)
    
})






