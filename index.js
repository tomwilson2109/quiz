const questions = [
  {
    question: "What is the capital of France?",
    answers: ["Berlin", "Madrid", "Paris", "Lisbon"],
    correct: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: ["Earth", "Mars", "Venus", "Jupiter"],
    correct: "Mars"
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: ["Atlantic", "Indian", "Arctic", "Pacific"],
    correct: "Pacific"
  },
  {
    question: "Which language is used for web apps?",
    answers: ["Python", "C#", "Java", "JavaScript"],
    correct: "JavaScript"
  },
  {
    question: "Which country is known for the maple leaf?",
    answers: ["USA", "Canada", "UK", "Germany"],
    correct: "Canada"
  }
];

let score = 0;
let currentQuestionIndex = 0;
let shuffledQuestions = [];

const questionElement = document.getElementById("question");
const answersContainer = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");
const resultElement = document.getElementById("result");

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function loadQuestion() {
  resetState();
  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.addEventListener("click", () => selectAnswer(button, currentQuestion));
    answersContainer.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = "none";
  answersContainer.innerHTML = "";
  resultElement.textContent = "";
}

function selectAnswer(button, question) {
  const selectedAnswer = button.textContent;
  const isCorrect = selectedAnswer === question.correct;
  if (isCorrect) {
    score++;
    resultElement.textContent = "Correct! +1 point.";
  } else {
    resultElement.textContent = "Wrong! 0 points.";
  }

  Array.from(answersContainer.children).forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === question.correct) {
      btn.style.backgroundColor = "#28a745"; // green
    } else {
      btn.style.backgroundColor = "#dc3545"; // red
    }
  });

  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < shuffledQuestions.length) {
    loadQuestion();
  } else {
    showFinalScore();
  }
});

function showFinalScore() {
  questionElement.textContent = `Quiz Finished! Your score: ${score} / ${shuffledQuestions.length}`;
  answersContainer.innerHTML = "";
  nextButton.style.display = "none";
  resultElement.textContent = "";
}

function startQuiz() {
  score = 0;
  currentQuestionIndex = 0;
  shuffledQuestions = shuffle([...questions]); // clone and shuffle
  loadQuestion();
}

startQuiz();
