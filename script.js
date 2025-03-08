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
  {
    hints: [
      "Esta cidade está localizada na Colômbia e é conhecida por sua cultura vibrante e história colonial.",
      "É famosa pelo centro histórico de La Candelaria e pelo Museu do Ouro.",
      "É a capital da Colômbia."
    ],
    answer: "Bogotá"
  },
  // ... outras perguntas
];

let currentQuestionIndex = 0;
let currentHintIndex = 0;
let attemptsLeft = 5;

function startGame() {
  // Exibe a primeira dica
  displayHint();
  // Atualiza a contagem de tentativas
  updateAttempts();
  // Esconde o botão "Próxima pergunta"
  document.getElementById("next-btn").classList.add("hidden");
}

function displayHint() {
  // Exibe a dica atual
  document.getElementById("hint").innerText = questions[currentQuestionIndex].hints[currentHintIndex];
}

function checkAnswer() {
  const answer = document.getElementById("answer").value.trim();

  // Verifica se a resposta está correta
  if (answer.toLowerCase() === questions[currentQuestionIndex].answer.toLowerCase()) {
    document.getElementById("feedback").innerText = "Resposta correta!";
    document.getElementById("next-btn").classList.remove("hidden"); // Mostra o botão "Próxima pergunta"
  } else {
    // Caso o jogador errou, incrementa o número de tentativas
    attemptsLeft--;
    if (attemptsLeft > 0) {
      document.getElementById("feedback").innerText = "Resposta incorreta. Tente novamente.";
      currentHintIndex++; // Exibe a próxima dica
      if (currentHintIndex < questions[currentQuestionIndex].hints.length) {
        displayHint();
      } else {
        document.getElementById("feedback").innerText = "Você esgotou todas as dicas.";
      }
    } else {
      document.getElementById("feedback").innerText = "Você não tem mais tentativas! A resposta correta era " + questions[currentQuestionIndex].answer + ".";
      document.getElementById("next-btn").classList.remove("hidden"); // Mostra o botão "Próxima pergunta"
    }
    updateAttempts();
  }

  document.getElementById("answer").value = ""; // Limpa o campo de resposta
}

function updateAttempts() {
  document.getElementById("percentage").innerText = `Tentativas restantes: ${attemptsLeft}`;
}

function nextQuestion() {
  // Reseta a quantidade de tentativas
  attemptsLeft = 5;
  currentHintIndex = 0;
  currentQuestionIndex++;
  
  if (currentQuestionIndex < questions.length) {
    // Reseta o feedback e o campo de resposta
    document.getElementById("feedback").innerText = "";
    document.getElementById("answer").value = "";
    // Esconde o botão "Próxima pergunta"
    document.getElementById("next-btn").classList.add("hidden");
    // Exibe a primeira dica da próxima pergunta
    displayHint();
    updateAttempts();
  } else {
    document.getElementById("feedback").innerText = "Parabéns! Você completou todas as perguntas!";
    document.getElementById("next-btn").classList.add("hidden");
  }
}

// Inicia o jogo quando o script é carregado
startGame();