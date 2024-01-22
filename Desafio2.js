// npm i promp-sync     Instalar a biblioteca que permite realizar leitura de dados via console.

//Criando uma constante chamada leia para efetuar leitura dos dados informados via teclado.
const leia = require("prompt-sync")();

//Declarando variáveis

let qtdeVitorias, qtdeDerrotas, ranking;
let sair = "n";
// Criando a função para calcular o saldo
function setSaldo(vitorias, derrotas) {
  return vitorias - derrotas;
}
function checkRanking(saldo) {
}
// Estrutura de repetição que verifica se o usuário não está saindo do programa.
while (sair !== "s") {
  if (sair == "s") {
    break;
  } else {
    // Leitura dos dados, precisamos converter o texto lido pela constante leia para inteiro. 
    console.log("Digite a quantidade de vitórias:");
    qtdeVitorias = parseInt(leia());
    console.log("Digite a quantidade de derrotas:");
    qtdeDerrotas = parseInt(leia());
    console.clear();
    // É possível passar uma função como parâmetro de outra!
     console.log(
      "O Herói tem de saldo de " +
        setSaldo(qtdeVitorias, qtdeDerrotas) +
        " está no nível de " +
        checkRanking(setSaldo(qtdeVitorias, qtdeDerrotas))
    );

  
 }
}