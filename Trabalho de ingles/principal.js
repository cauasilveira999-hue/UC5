console.log("executando arquivo")

const readline = require('readline');

// Cria a interface de leitura
const rl = readline.createInterface({
  input: process.stdin,   // Entrada padrão (teclado)
  output: process.stdout  // Saída padrão (console)
});


const perguntas = [
    {
        pergunta: "What is the translation of 'cachorro'?",
        resposta: "dog"
    },
    {
        pergunta: "What is the translation of 'casa'?",
        resposta: "house"
    },
    {
        pergunta: "What is the translation of 'livro'?",
        resposta: "book"
    },
    {
      pergunta: "What is the translation of 'cama'?",
      resposta: "bed"
    },
    {
      pergunta: "What is the translation of 'irmã'?",
      resposta: "sister"
    },
    {
      pergunta: "What is the translation of 'telefone'?",
      resposta: "phone"
    }
];

let indice = 0;
let pontos = 0;

function fazerPergunta() {
    if (indice >= perguntas.length) {
        console.log("\nQuiz finalizado!");
      
        console.log(`Pontuação: ${pontos}/${perguntas.length}`);
        menu()
        return;
    }

    rl.question(
        `${indice + 1}. ${perguntas[indice].pergunta}\n> `,
        (respostaUsuario) => {
            if (
                respostaUsuario.toLowerCase() ===
                perguntas[indice].resposta.toLowerCase()
            ) {
                console.log(" Correto!");
                pontos++;
            } else {
                console.log(
                    ` Errado! Resposta correta: ${perguntas[indice].resposta}`
                );
            }

            indice++;
            fazerPergunta();
        }
    );
}

function menu() {
  console.log(`=== QUIZ DE INGLÊS ===    Pontos: ${pontos}`);
  console.log("Escolha uma opção:")
  console.log("1 - Quiz")
  console.log("2 - Reiniciar")
  console.log("Sair")

  rl.question("Digite uma resposta", (respostaUsuario) => {

  if (respostaUsuario == 1) {
    fazerPergunta();
  } 
  else if (respostaUsuario == 2) {
    indice = 0;
    pontos = 0;
    menu();
  } 
  else {
    console.log("Saindo...")
    return;
  }
  
})
}

menu()
