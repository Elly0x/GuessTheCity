let currentQuestionIndex = 0;
let attemptsLeft = 5;  // Número de tentativas
let currentHintIndex = 0;  // Índice da dica atual

const questions = [
    // Seu array de questões
];

function displayHint() {
    const hintElement = document.getElementById("hint");
    hintElement.textContent = questions[currentQuestionIndex].hints[currentHintIndex];
}

function updateAttempts() {
    const attemptsElement = document.getElementById("attempts");
    attemptsElement.textContent = `Tentativas restantes: ${attemptsLeft}`;
}

function checkAnswer() {
    const answer = document.getElementById("answer").value.trim().toLowerCase();
    const feedbackElement = document.getElementById("feedback");

    if (answer === questions[currentQuestionIndex].answer.toLowerCase()) {
        feedbackElement.textContent = "Resposta correta!";
        feedbackElement.style.color = "green";
        document.getElementById("next-btn").classList.remove("hidden");
        document.getElementById("next-btn").disabled = false;  // Habilitar o botão para próxima pergunta
    } else {
        attemptsLeft--;
        updateAttempts();
        
        if (attemptsLeft > 0) {
            feedbackElement.textContent = "Resposta incorreta. Tente novamente!";
            feedbackElement.style.color = "red";
            currentHintIndex++;  // Mostrar a próxima dica
            displayHint();
        } else {
            feedbackElement.textContent = "Você esgotou suas tentativas!";
            feedbackElement.style.color = "red";
            document.getElementById("next-btn").classList.remove("hidden");
            document.getElementById("next-btn").disabled = false;
        }
    }
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        attemptsLeft = 5;  // Resetar tentativas
        currentHintIndex = 0;  // Resetar índice das dicas
        document.getElementById("next-btn").classList.add("hidden");
        document.getElementById("answer").value = "";  // Limpar o campo de resposta
        updateAttempts();
        displayHint();
        document.getElementById("feedback").textContent = "";
    } else {
        document.getElementById("feedback").textContent = "Você completou todas as perguntas!";
        document.getElementById("feedback").style.color = "blue";
        document.getElementById("next-btn").classList.add("hidden");
    }
}

// Iniciar com a primeira dica e as tentativas
window.onload = function() {
    displayHint();
    updateAttempts();
};