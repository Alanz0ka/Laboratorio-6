const Jogo = require('./Jogo');

const jogo = new Jogo();
console.log('Bem-vindo ao Jogo de Adivinhação de Palavras Sobre Tecnologia!');
console.log(`Palavra: ${jogo.palavraSelecionada.getPalavraAdivinhada()}`);

while (!jogo.palavraSelecionada.isPalavraAdivinhada() && jogo.tentativasRestantes > 0) {
  jogo.tentarLetra();
}

if (!jogo.palavraSelecionada.isPalavraAdivinhada()) {
  console.log('Você perdeu! A palavra correta era: ' + jogo.palavraSelecionada.palavra);
  jogo.exibirMensagemFinal('');
}
