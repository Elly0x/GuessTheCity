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
    // Adicione as demais cidades aqui
];

let currentQuestionIndex = 0;
let attemptsLeft = 5; // Número de tentativas
let hintsIndex = 0; // Índice das dicas

// Carregando os sons
const correctSound = new Audio('assets/correct.mp3');
const wrongSound = new Audio('assets/wrong.mp3');

// Função para tocar som de acerto
function playCorrectSound() {
    correctSound.play();
}

// Função para tocar som de erro
function playWrongSound() {
    wrongSound.play();
}

// Exibe a dica atual
function displayHint() {
    document.getElementById('hint').textContent = questions[currentQuestionIndex].hints[hintsIndex];
    document.getElementById('percentage').textContent = `Tentativas restantes: ${attemptsLeft}`;
}

// Função chamada ao clicar no botão de verificar resposta
function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.trim();
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        document.getElementById('feedback').textContent = "Resposta correta!";
        playCorrectSound(); // Toca o som de acerto
        document.getElementById('next-btn').classList.remove('hidden'); // Exibe o botão de próxima pergunta
    } else {
        attemptsLeft--; // Decrementa o número de tentativas
        document.getElementById('feedback').textContent = `Resposta incorreta! Tente novamente.`;
        playWrongSound(); // Toca o som de erro

        if (attemptsLeft > 0) {
            hintsIndex++; // Exibe a próxima dica
            displayHint(); // Atualiza a dica
        } else {
            document.getElementById('feedback').textContent = `Você perdeu todas as tentativas! A resposta correta era: ${correctAnswer}`;
            document.getElementById('next-btn').classList.remove('hidden'); // Exibe o botão de próxima pergunta
        }
    }
}

// Função para ir para a próxima pergunta
function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        attemptsLeft = 5; // Resetando as tentativas
        hintsIndex = 0; // Resetando as dicas
        displayHint(); // Exibindo a primeira dica
        document.getElementById('answer').value = ''; // Limpando o campo de resposta
        document.getElementById('feedback').textContent = ''; // Limpando feedback
        document.getElementById('next-btn').classList.add('hidden'); // Escondendo o botão de próxima pergunta
    } else {
        document.getElementById('feedback').textContent = "Você completou todas as perguntas!";
    }
}

// Inicializa a primeira dica
displayHint();