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
  {
    hints: [
      "Esta cidade está localizada no Chile e é cercada pela Cordilheira dos Andes.",
      "É famosa pelo Palácio de La Moneda e pelo Cerro San Cristóbal.",
      "É a capital do Chile."
    ],
    answer: "Santiago"
  },
  {
    hints: [
      "Esta cidade está localizada no Equador e é atravessada pela linha do Equador.",
      "É famosa pela Plaza Grande e pelo monumento 'Mitad del Mundo'.",
      "É a capital do Equador."
    ],
    answer: "Quito"
  },
  {
    hints: [
      "Esta cidade está localizada no Uruguai e tem uma famosa orla chamada 'Rambla'.",
      "É conhecida pelo Mercado del Puerto e pela Praça Independência.",
      "É a capital do Uruguai."
    ],
    answer: "Montevidéu"
  },
  {
    hints: [
      "Esta cidade está localizada na Bolívia e é uma das capitais mais altas do mundo.",
      "É famosa pelo teleférico e pelo Mercado das Bruxas.",
      "Sede do governo boliviano, mas não é a capital constitucional."
    ],
    answer: "La Paz"
  },
  {
    hints: [
      "Esta cidade está localizada no Paraguai e fica às margens do rio homônimo.",
      "É famosa pelo Palácio de los López e pela Costanera.",
      "É a capital do Paraguai."
    ],
    answer: "Assunção"
  },
  {
    hints: [
      "Esta cidade está localizada na Venezuela e é cercada por montanhas.",
      "É famosa pelo Parque Nacional El Ávila e pela Plaza Bolívar.",
      "É a capital da Venezuela."
    ],
    answer: "Caracas"
  },
  {
    hints: [
      "Esta cidade está localizada na América do Sul e tem um grande porto marítimo.",
      "É conhecida pela cidade histórica e pelas muralhas coloniais.",
      "É um dos principais destinos turísticos da Colômbia."
    ],
    answer: "Cartagena"
  },
  {
    hints: [
      "Esta cidade está localizada no sudeste do Brasil e é conhecida por ser o maior centro financeiro da América Latina.",
      "É famosa pela Avenida Paulista e pelo MASP.",
      "É a maior cidade do Brasil."
    ],
    answer: "São Paulo"
  },
  {
    hints: [
      "Esta cidade está localizada no nordeste do Brasil e é famosa pelo seu carnaval vibrante.",
      "É conhecida pelo Pelourinho, um bairro histórico e Patrimônio da Humanidade.",
      "É a capital da Bahia."
    ],
    answer: "Salvador"
  },
  {
    hints: [
      "Esta cidade está localizada no norte do Brasil e é conhecida por sua floresta tropical.",
      "É famosa pelo Encontro das Águas e pela Arena da Amazônia.",
      "É a capital do estado do Amazonas."
    ],
    answer: "Manaus"
  },
  {
    hints: [
      "Esta cidade está localizada no sul do Brasil e é famosa por sua culinária e arquitetura europeia.",
      "É conhecida por ser a 'capital brasileira da cerveja' e pela Oktoberfest.",
      "É a capital de Santa Catarina."
    ],
    answer: "Blumenau"
  },
  {
    hints: [
      "Esta cidade está localizada no centro-oeste do Brasil e é conhecida por ser a capital do país.",
      "É famosa pelo Congresso Nacional e pela Praça dos Três Poderes.",
      "É uma cidade planejada, projetada por Oscar Niemeyer e Lúcio Costa."
    ],
    answer: "Brasília"
  },
  {
    hints: [
      "Esta cidade está localizada no norte do Brasil e é a maior cidade do estado do Pará.",
      "É famosa pelo Mercado Ver-o-Peso e pela Círio de Nazaré.",
      "É um importante centro comercial da Amazônia."
    ],
    answer: "Belém"
  },
  {
    hints: [
      "Esta cidade está localizada no sul do Brasil e é conhecida por suas belezas naturais.",
      "É famosa pelas Cataratas do Iguaçu e pela Itaipu Binacional.",
      "Fica na tríplice fronteira entre Brasil, Argentina e Paraguai."
    ],
    answer: "Foz do Iguaçu"
  },
  {
    hints: [
      "Esta cidade está localizada no sul do Brasil e é famosa por sua arquitetura de estilo europeu.",
      "É conhecida pela Rua das Pedras e pelas suas belas praias.",
      "É a cidade mais famosa da Região dos Lagos do Rio de Janeiro."
    ],
    answer: "Búzios"
  },
  {
    hints: [
      "Esta cidade está localizada no sudeste do Brasil e é a maior cidade do estado de Minas Gerais.",
      "É famosa pela sua gastronomia e pela arquitetura colonial.",
      "É a cidade onde o famoso Inhotim, um museu de arte contemporânea, está localizado."
    ],
    answer: "Belo Horizonte"
  },
  {
    hints: [
      "Esta cidade está localizada no nordeste do Brasil e é famosa por suas praias de água quente.",
      "É conhecida pelo Forte de São José e pela cidade histórica de Olinda.",
      "É a capital de Pernambuco."
    ],
    answer: "Recife"
  },
  {
    hints: [
      "Esta cidade está localizada no sul do Brasil e é famosa pela sua rica cultura italiana.",
      "É conhecida pelo Parque Nacional de Aparados da Serra e pelas belas paisagens.",
      "É a capital do estado de Santa Catarina."
    ],
    answer: "Florianópolis"
  },
  // Cidades internacionais
  {
    hints: [
      "Esta cidade está localizada na Grécia e é considerada o berço da civilização ocidental.",
      "É famosa pela Acrópole e o Partenon.",
      "Foi a sede dos primeiros Jogos Olímpicos da era moderna."
    ],
    answer: "Atenas"
  },
  {
    hints: [
      "Esta cidade está localizada na Espanha e é conhecida pelo trabalho do arquiteto Antoni Gaudí.",
      "É famosa pela Sagrada Família e pelo Parque Güell.",
      "É uma cidade à beira-mar e é a capital da região da Catalunha."
    ],
    answer: "Barcelona"
  },
  {
    hints: [
      "Esta cidade está localizada no Reino Unido e é a capital do país.",
      "É famosa pelo Big Ben e pelo Palácio de Buckingham.",
      "Possui uma das maiores e mais antigas estações de metrô do mundo."
    ],
    answer: "Londres"
  },
  {
    hints: [
      "Esta cidade está localizada na Itália e é conhecida pela sua história antiga.",
      "É famosa pelo Coliseu, o Vaticano e pela Fontana di Trevi.",
      "Foi o centro do Império Romano."
    ],
    answer: "Roma"
  },
  {
    hints: [
      "Esta cidade está localizada na Espanha e é a capital do país.",
      "É famosa pelo Museu do Prado e pela Praça Maior.",
      "É conhecida pelo Real Madrid, um dos maiores clubes de futebol do mundo."
    ],
    answer: "Madrid"
  }
];

let currentQuestionIndex = 0;
let attempts = 0;
let isGameOver = false;

const questionElement = document.getElementById("question");
const hintElement = document.getElementById("hints");
const answerInput = document.getElementById("answer");
const checkButton = document.getElementById("check-btn");
const nextButton = document.getElementById("next-btn");
const resultMessage = document.getElementById("result");
const attemptsElement = document.getElementById("attempts");

const startGame = () => {
  loadQuestion();
};

const loadQuestion = () => {
  if (currentQuestionIndex >= questions.length) {
    resultMessage.textContent = "Fim de Jogo!";
    nextButton.style.display = "none";
    return;
  }

  const currentQuestion = questions[currentQuestionIndex];
  attempts = 0;
  isGameOver = false;
  attemptsElement.textContent = `Tentativas: ${attempts}/5`;
  nextButton.style.display = "none";
  resultMessage.textContent = "";
  answerInput.value = "";
  
  questionElement.textContent = currentQuestion.hints[0];
  hintElement.textContent = currentQuestion.hints.join(" | ");
};

const checkAnswer = () => {
  const currentQuestion = questions[currentQuestionIndex];
  const userAnswer = answerInput.value.trim();
  
  if (userAnswer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
    resultMessage.textContent = "Você acertou!";
    resultMessage.style.color = "green";
    nextButton.style.display = "block";
    nextButton.disabled = false;
  } else {
    attempts++;
    attemptsElement.textContent = `Tentativas: ${attempts}/5`;
    if (attempts >= 5) {
      resultMessage.textContent = "Você errou! Fim de J