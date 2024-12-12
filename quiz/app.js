const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "Who wrote 'Hamlet'?",
        options: ["Mark Twain", "Shakespeare", "Hemingway", "Dickens"],
        answer: "Shakespeare"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    }
];

const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');

function loadQuiz() {
    quizData.forEach((quizItem, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = `<h3>${quizItem.question}</h3>`;
        
        const optionsList = document.createElement('ul');
        optionsList.classList.add('options');
        
        quizItem.options.forEach(option => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<input type="radio" name="question${index}" value="${option}"> ${option}`;
            optionsList.appendChild(listItem);
        });

        questionElement.appendChild(optionsList);
        quizContainer.appendChild(questionElement);
    });
}

function calculateScore() {
    let score = 0;
    quizData.forEach((quizItem, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === quizItem.answer) {
            score++;
        }
    });
    resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`;
}

submitButton.addEventListener('click', calculateScore);

loadQuiz();