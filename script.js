const questions = [
    { hint: "Famosa pela Torre Eiffel.", answer: "Paris" },
    { hint: "Sede das pirâmides e uma das 7 maravilhas.", answer: "Cairo" },
    { hint: "Canais e arquitetura renascentista.", answer: "Veneza" },
    { hint: "Estátua da Liberdade e arranha-céus.", answer: "Nova York" },
    { hint: "A maior muralha do mundo.", answer: "Pequim" },
    { hint: "Conhecida por suas gôndolas e pontes.", answer: "Veneza" },
    { hint: "Centro de um antigo império americano.", answer: "Cidade do México" },
    { hint: "Cidade futurista do Japão.", answer: "Tóquio" },
    { hint: "Anfiteatro romano e império histórico.", answer: "Roma" },
    { hint: "Big Ben e a Torre de Londres.", answer: "Londres" },
    { hint: "Sagrada Família e arquitetura de Gaudí.", answer: "Barcelona" },
    { hint: "Sede do Império Inca nos Andes.", answer: "Cusco" },
    { hint: "Praça Vermelha e história da guerra.", answer: "Moscou" },
    { hint: "Ópera e Harbour Bridge.", answer: "Sydney" },
    { hint: "Torre inclinada e culinária renascentista.", answer: "Pisa" },
    { hint: "Berço dos Jogos Olímpicos e da civilização.", answer: "Atenas" },
    { hint: "Baía grande e Torre de Cristal.", answer: "Santiago" },
    { hint: "Floresta tropical e biodiversidade.", answer: "Manaus" },
    { hint: "Arquitetura colonial e bairros vibrantes.", answer: "Buenos Aires" },
    { hint: "Antiga universidade e cultura medieval.", answer: "Praga" },
    { hint: "Templo budista e arquitetura clássica.", answer: "Bangkok" },
    { hint: "Maior cidade do Brasil e centro financeiro.", answer: "São Paulo" },
    { hint: "Cristo Redentor e praias famosas.", answer: "Rio de Janeiro" },
    { hint: "Ponte vermelha e paisagens famosas.", answer: "São Francisco" },
    { hint: "Vida noturna vibrante e arquitetura moderna.", answer: "Hong Kong" },
    { hint: "Praças e gastronomia renomada.", answer: "Madrid" },
    { hint: "Castelos medievais e cerveja.", answer: "Praga" }
];

let currentQuestion = 0;
let correctAnswers = 0;
let progress = 0;

const corretoAudio = new Audio('correto.mp3');
const erradoAudio = new Audio('errado.mp3');

document.getElementById("hint").textContent = "Dica: " + questions[currentQuestion].hint;

function checkAnswer() {
    let userAnswer = document.getElementById("answer").value.trim();
    let feedback = document.getElementById("feedback");
    let nextBtn = document.getElementById("next-btn");
    let progressElement = document.getElementById("progress");

    if (userAnswer.toLowerCase() === questions[currentQuestion].answer.toLowerCase()) {
        feedback.innerHTML = "✅ Correto!";
        feedback.style.color = "green";
        corretoAudio.play();
        correctAnswers++;
        progress += 10;
    } else {
        feedback.innerHTML = "❌ Errado! A resposta era: " + questions[currentQuestion].answer;
        feedback.style.color = "red";
        erradoAudio.play();
    }

    // Atualizar a porcentagem
    progressElement.textContent = progress;

    // Esconder o campo de resposta e mostrar o botão de próxima pergunta
    document.getElementById("answer").classList.add("hidden");
    document.querySelector("button").classList.add("hidden");
    nextBtn.classList.remove("hidden");
    document.getElementById("percentage").classList.remove("hidden");
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        document.getElementById("hint").textContent = "Dica: " + questions[currentQuestion].hint;
        document.getElementById("answer").value = "";
        document.getElementById("feedback").innerText = "";

        // Mostrar os campos novamente
        document.getElementById("answer").classList.remove("hidden");
        document.querySelector("button").classList.remove("hidden");
        document.getElementById("next-btn").classList.add("hidden");
    } else {
        document.getElementById("hint").textContent = "Fim de jogo! Você acertou " + correctAnswers + " de " + questions.length + " perguntas.";
        document.getElementById("next-btn").classList.add("hidden");
    }
}

// const fimJogoAudio = new Audio('fim_jogo.mp3');
// fimJogoAudio.play();
