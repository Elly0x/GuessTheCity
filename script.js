let currentQuestionIndex = 0;
let currentHintIndex = 0;
let score = 0;
let attempts = 0; // Contador de tentativas

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
      "Esta cidade está localizada na América do Sul e é conhecida como a 'Cidade Maravilhosa'.",
      "É famosa pelo Cristo Redentor.",
      "Foi sede dos Jogos Olímpicos de 2016"
    ],
    answer: "Rio de Janeiro"
  },
  // Adicione mais cidades aqui...
];

function displayHint() {
  const hintElement = document.getElementById("hint");
  hintElement.textContent = questions[currentQuestionIndex].hints[currentHintIndex];
}

function checkAnswer() {
  const userAnswer = document.getElementById("answer").value.trim();
  const correctAnswer = questions[currentQuestionIndex].answer;

  if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    document.getElementById("feedback").textContent = "Parabéns, você acertou!";
    score += 1;
    document.getElementById("percentage").textContent = `Porcentagem: ${(score / questions.length) * 100}%`;
    document.getElementById("next-btn").classList.remove("hidden");  // O botão "Próxima pergunta" só aparece quando acertar
  } else {
    attempts += 1; // Incrementa o contador de tentativas
    document.getElementById("feedback").textContent = `Resposta errada, você tem ${5 - attempts} tentativas restantes.`;
    
    if (attempts >= 5) {
      // Se as tentativas se esgotarem
      document.getElementById("feedback").textContent = `Você não conseguiu! A resposta era: ${correctAnswer}`;
      document.getElementById("next-btn").classList.remove("hidden"); // O botão "Próxima pergunta" aparece
    } else {
      // Caso o jogador ainda tenha tentativas
      currentHintIndex += 1;
      if (currentHintIndex < questions[currentQuestionIndex].hints.length) {
        displayHint(); // Mostra a próxima dica
      }
    }
  }
}

function nextQuestion() {
  currentQuestionIndex += 1;
  currentHintIndex = 0;
  attempts = 0; // Reseta o contador de tentativas
  if (currentQuestionIndex < questions.length) {
    displayHint(); // Exibe a primeira dica da próxima pergunta
    document.getElementById("answer").value = ""; // Limpa o campo de resposta
    document.getElementById("feedback").textContent = ""; // Limpa o feedback
    document.getElementById("next-btn").classList.add("hidden"); // Esconde o botão "Próxima pergunta" até que o jogador acerte
  } else {
    document.getElementById("feedback").textContent = "Você completou todas as perguntas! Sua pontuação final é " + score;
    document.getElementById("next-btn").classList.add("hidden"); // Esconde o botão ao final do jogo
  }
}

displayHint(); // Exibe a primeira dica ao carregar o jogo