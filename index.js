// Array containing the questions
var questions = [
  "What is the capital of Spain?",
  "Who won the FIFA Women's World Cup in 2019?",
  "What is the smallest country in the world?",
  "Who invented the telephone?",
  "What is the tallest mountain in the world?"
];

// Function to select a random question from the array
function getRandomQuestion() {
  var randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

// Function to display the quiz
function displayQuiz(maxQuestions) {
  var quiz = document.getElementById("quiz");
  var numQuestionsDisplayed = 0;

  // Loop until max number of questions are displayed
  while (numQuestionsDisplayed < maxQuestions) {
    var question = getRandomQuestion();

    // Add the question to the quiz
    var questionDiv = document.createElement("div");
    questionDiv.innerHTML = question;
    quiz.appendChild(questionDiv);

    // Increment the number of questions displayed
    numQuestionsDisplayed++;
  }
}

// Call the function to display the quiz (10 questions in this example)
displayQuiz(10);