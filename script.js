const questions = [
    { hint: "Esta cidade é famosa por uma torre que foi projetada para ser temporária, mas acabou se tornando um ícone mundial.", answer: "Paris" },
    { hint: "Conhecida por ser a sede de uma das 7 maravilhas do mundo antigo e pelas pirâmides.", answer: "Cairo" },
    { hint: "Esta cidade é conhecida por sua cultura e arquitetura antigas, além de ser famosa por seus canais.", answer: "Veneza" },
    { hint: "Aqui você pode encontrar a famosa estátua da liberdade e arranha-céus icônicos.", answer: "Nova York" },
    { hint: "Esta cidade tem a maior muralha de todos os tempos e é um centro político e cultural no leste asiático.", answer: "Pequim" },
    { hint: "Essa cidade é conhecida por suas gôndolas e pontes, além de ser uma das mais românticas do mundo.", answer: "Veneza" },
    { hint: "Essa cidade tem uma história de império que deixou sua marca por todo o continente americano.", answer: "Cidade do México" },
    { hint: "Famosa pela tecnologia, arquitetura futurista e cultura pop, é a maior cidade do Japão.", answer: "Tóquio" },
    { hint: "Essa cidade abriga o maior anfiteatro da Roma Antiga e um dos maiores impérios da história.", answer: "Roma" },
    { hint: "Famosa pela roda gigante de London Eye e pela Torre de Londres, além do Big Ben.", answer: "Londres" },
    { hint: "Cidade famosa por sua arquitetura medieval e pela Sagrada Família, uma obra inacabada de Gaudí.", answer: "Barcelona" },
    { hint: "Essa cidade foi a sede do Império Inca e está localizada nos Andes.", answer: "Cusco" },
    { hint: "Essa cidade está localizada na Rússia e é famosa por sua história durante a guerra e sua Praça Vermelha.", answer: "Moscou" },
    { hint: "Essa cidade australiana é conhecida pela sua famosa ópera e a Harbour Bridge.", answer: "Sydney" },
    { hint: "Conhecida pela sua culinária e pelo movimento de renascimento cultural, é a cidade que tem a famosa Torre Inclinada.", answer: "Pisa" },
    { hint: "Essa cidade foi a primeira a abrigar os Jogos Olímpicos Modernos, e é considerada o berço da civilização ocidental.", answer: "Atenas" },
    { hint: "Com sua enorme baía e tradição marítima, essa cidade é conhecida pela imponente Torre de Cristal.", answer: "Santiago" },
    { hint: "Conhecida por sua natureza selvagem e a biodiversidade única, esta cidade é a capital da maior floresta tropical do mundo.", answer: "Manaus" },
    { hint: "Cidade que já foi o centro de impérios coloniais e é famosa por sua arquitetura colonial e seus bairros vibrantes.", answer: "Buenos Aires" },
    { hint: "Cidade com uma das mais antigas universidades do mundo e localizada em uma das capitais mais antigas da Europa.", answer: "Praga" },
    { hint: "Essa cidade asiática é famosa por seu templo budista e pela arquitetura clássica que remonta à antiga capital do Sião.", answer: "Bangkok" },
    { hint: "É a maior cidade do Brasil e um centro financeiro importante, com uma das maiores populações do mundo.", answer: "São Paulo" },
    { hint: "Essa cidade é conhecida mundialmente pelo seu enorme Cristo Redentor e pelas praias de Copacabana e Ipanema.", answer: "Rio de Janeiro" },
    { hint: "Cidade famosa por sua grande ponte vermelha e pelos seus aclamados bairros e paisagens, com uma vista panorâmica da cidade.", answer: "São Francisco" },
    { hint: "Esta cidade na Ásia é conhecida pela sua vida noturna vibrante e pela arquitetura moderna que mistura o antigo e o novo.", answer: "Hong Kong" },
    { hint: "A capital espanhola é um centro cultural conhecido pelas suas grandes praças e avenidas, além de ser famosa pela sua gastronomia.", answer: "Madrid" },
    { hint: "Cidade famosa por sua história medieval e castelos, bem como por sua cultura de cerveja e seus pontes espetaculares.", answer: "Praga" }
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
