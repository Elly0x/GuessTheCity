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
      "É a capital do estado de Mato Grosso."
    ],
    answer: "Cuiabá"
  },
  {
    hints: [
      "Esta cidade está localizada no norte do Brasil e é conhecida por sua arquitetura colonial.",
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
    document.getElementById('feedback').textContent = ''; // Limpa a mensagem anterior
}

function checkAnswer() {
    const question = questions[currentQuestionIndex];
    const userAnswer = document.getElementById('answer').value.trim();

    if (userAnswer.toLowerCase() === question.answer.toLowerCase()) {
        document.getElementById('feedback').textContent = "Você acertou!";
        document.getElementById('feedback').style.color = 'green'; // Cor verde para acerto
        document.getElementById('feedback').style.fontWeight = 'bold'; // Destacar texto
        document.getElementById('next-btn').classList.remove('hidden');
        soundCorreto.play();
    } else {
        tentativas--;
        document.getElementById('tentativas').textContent = `Tentativas restantes: ${tentativas}`;
        if (tentativas > 0) {
            document.getElementById('feedback').textContent = "Resposta incorreta! Tente novamente.";
            document.getElementById('feedback').style.color = 'red'; // Cor vermelha para erro
            document.getElementById('feedback').style.fontWeight = 'bold'; // Destacar texto
            soundErrado.play();
        } else {
            document.getElementById('feedback').textContent = `Você perdeu! A resposta correta era ${question.answer}.`;
            document.getElementById('feedback').style.color = 'red'; // Cor vermelha para erro
            document.getElementById('feedback').style.fontWeight = 'bold'; // Destacar texto
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
    } else {
        document.getElementById('feedback').textContent = "Fim do jogo!";
        document.getElementById('next-btn').classList.add('hidden');
    }
}

// Inicia o jogo com a primeira pergunta
displayQuestion();