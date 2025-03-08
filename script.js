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
  // Adicione todas as outras cidades aqui...
];

const soundCorreto = new Audio('correto.mp3');
const soundErrado = new Audio('errado.mp3');

let currentQuestionIndex = 0;
let tentativas = 5;

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    const hint = document.getElementById('hint');
    hint.textContent = question.hints[0];
    document.getElementById('tentativas').textContent = `Tentativas restantes: ${tentativas}`;
    document.getElementById('next-btn').classList.add('hidden');
}

function checkAnswer() {
    const question = questions[currentQuestionIndex];
    const userAnswer = document.getElementById('answer').value.trim();

    if (userAnswer.toLowerCase() === question.answer.toLowerCase()) {
        document.getElementById('feedback').textContent = "Você acertou!";
        document.getElementById('next-btn').classList.remove('hidden');
        soundCorreto.play();
    } else {
        tentativas--;
        document.getElementById('tentativas').textContent = `Tentativas restantes: ${tentativas}`;
        if (tentativas > 0) {
            document.getElementById('feedback').textContent = "Resposta incorreta! Tente novamente.";
            soundErrado.play();
        } else {
            document.getElementById('feedback').textContent = `Você perdeu! A resposta correta era ${question.answer}.`;
            soundErrado.play();
            document.getElementById('next-btn').classList.remove('hidden');
        }
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        tentativas = 5;
        displayQuestion();
        document.getElementById('answer').value = '';
        document.getElementById('feedback').textContent = '';
    } else {
        document.getElementById('feedback').textContent = "Fim do jogo!";
    }
}

// Inicia o jogo com a primeira pergunta
displayQuestion();