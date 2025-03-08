const questions = [
  {
    hints: [
      "Esta cidade está localizada na América do Sul e é a capital da Argentina.",
      "É famosa pelo tango e pelo bairro colorido de La Boca.",
      "O time de futebol Boca Juniors, um dos mais conhecidos do mundo, nasceu aqui."
    ],
    answer: "Buenos Aires"
  },
  {
    hints: [
      "Esta cidade está localizada no Peru e foi a capital do Império Inca.",
      "É famosa pela Plaza de Armas e por ser a porta de entrada para Machu Picchu.",
      "É uma das cidades mais turísticas do Peru."
    ],
    answer: "Cusco"
  },
  // ... (outras perguntas aqui)
];

let currentQuestionIndex = 0;
let attemptsLeft = 5; // Tentativas
let hintsIndex = 0;

function displayHint() {
    document.getElementById('hint').textContent = questions[currentQuestionIndex].hints[hintsIndex];
    document.getElementById('percentage').textContent = `Tentativas restantes: ${attemptsLeft}`;
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.trim();
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        document.getElementById('feedback').textContent = "Resposta correta!";
        document.getElementById('next-btn').classList.remove('hidden'); // Mostrar o botão "Próxima pergunta"
    } else {
        attemptsLeft--; // Decrementar tentativas
        document.getElementById('feedback').textContent = `Resposta incorreta! Tente novamente.`;

        if (attemptsLeft > 0) {
            hintsIndex++; // Exibe próxima dica
            displayHint(); // Exibe a próxima dica
        } else {
            document.getElementById('feedback').textContent = "Você perdeu todas as tentativas! A resposta correta era: " + correctAnswer;
            document.getElementById('next-btn').classList.remove('hidden'); // Mostrar o botão "Próxima pergunta"
        }
    }
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        attemptsLeft = 5; // Resetando tentativas
        hintsIndex = 0; // Resetando as dicas
        displayHint(); // Exibindo a primeira dica
        document.getElementById('answer').value = ''; // Limpando o campo de resposta
        document.getElementById('feedback').textContent = ''; // Limpando feedback
        document.getElementById('next-btn').classList.add('hidden'); // Escondendo o botão de próxima pergunta
    } else {
        document.getElementById('feedback').textContent = "Você completou todas as perguntas!";
    }
}

// Inicializar a primeira dica
displayHint();