const questions = [
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
      "É conhecida pela Oktoberfest e pelo Parque Nacional de Aparados da Serra.",
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
      "Esta cidade está localizada no sul do Brasil e é famosa pelas suas belezas naturais.",
      "É famosa pelas Cataratas do Iguaçu e pela Itaipu Binacional.",
      "Fica na tríplice fronteira entre Brasil, Argentina e Paraguai."
    ],
    answer: "Foz do Iguaçu"
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
      "Esta cidade está localizada no sul do Brasil e é conhecida por sua rica cultura italiana.",
      "É conhecida pelo Parque Nacional de Aparados da Serra e pelas belas paisagens.",
      "É a capital do estado de Santa Catarina."
    ],
    answer: "Florianópolis"
  },
  {
    hints: [
      "Esta cidade está localizada no sudeste do Brasil e é famosa por ser um destino turístico popular, com praias e vida noturna.",
      "É famosa pelas praias de Copacabana e Ipanema.",
      "É a cidade-sede de um dos maiores carnavais do mundo."
    ],
    answer: "Rio de Janeiro"
  },
  {
    hints: [
      "Esta cidade está localizada no centro-oeste do Brasil e é conhecida como a capital do agronegócio.",
      "É famosa pelo Mercado Municipal e pelo Parque Nacional de Chapada dos Guimarães.",
      "É a capital de Mato Grosso."
    ],
    answer: "Cuiabá"
  },
  {
    hints: [
      "Esta cidade está localizada no norte do Brasil e é famosa pela sua arquitetura colonial.",
      "É a capital do estado do Acre.",
      "É uma das cidades mais conhecidas da Região Norte do Brasil."
    ],
    answer: "Rio Branco"
  },
  {
    hints: [
      "Esta cidade está localizada no nordeste do Brasil e é conhecida por sua rica história e por ser um importante polo comercial.",
      "É famosa pelo Mercado Central e pelo Museu do Frevo.",
      "É a capital de Alagoas."
    ],
    answer: "Maceió"
  },
  {
    hints: [
      "Esta cidade está localizada no sudeste do Brasil e é famosa pela sua importância histórica.",
      "É conhecida pelo Museu Paulista e pelo Parque da Independência.",
      "É a cidade onde foi proclamada a Independência do Brasil."
    ],
    answer: "São Bernardo do Campo"
  },
  {
    hints: [
      "Esta cidade está localizada no norte do Brasil e é conhecida por sua forte influência cultural indígena.",
      "É famosa pelo Mercado Municipal e pela Catedral de Nossa Senhora de Nazaré.",
      "É a capital do estado do Tocantins."
    ],
    answer: "Palmas"
  },
  {
    hints: [
      "Esta cidade está localizada no sudeste do Brasil e é famosa pelas suas termas e belezas naturais.",
      "É conhecida pelas águas termais e pelo Parque Nacional da Serra da Canastra.",
      "É uma cidade histórica localizada no estado de Minas Gerais."
    ],
    answer: "Poços de Caldas"
  },
  {
    hints: [
      "Esta cidade está localizada no centro-oeste do Brasil e é famosa por ser um polo industrial.",
      "É conhecida pelo Parque Nacional das Emas e pelo Mercado Municipal.",
      "É a capital do estado de Goiás."
    ],
    answer: "Goiânia"
  },
  {
    hints: [
      "Esta cidade está localizada no nordeste do Brasil e é famosa por suas praias paradisíacas.",
      "É conhecida por ser um importante destino turístico e pela vida noturna.",
      "É a capital do estado da Paraíba."
    ],
    answer: "João Pessoa"
  },
  {
    hints: [
      "Esta cidade está localizada no nordeste do Brasil e é famosa por suas praias.",
      "É conhecida pela Praia de Pajuçara e pela Fortaleza de Santo Antônio.",
      "É a capital do estado de Alagoas."
    ],
    answer: "Maceió"
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
  
  questionElement.textContent = "Adivinhe a cidade!";
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
      resultMessage.textContent = `Você errou! A resposta era: ${currentQuestion.answer}`;
      resultMessage.style.color = "red";
      nextButton.style.display = "block";
    }
  }
};

const nextQuestion = () => {
  currentQuestionIndex++;
  loadQuestion();
};

checkButton.addEventListener("click", checkAnswer);
nextButton.addEventListener("click", nextQuestion);

startGame();