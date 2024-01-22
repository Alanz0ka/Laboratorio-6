const Palavra = require('./Palavra');
const Forca = require('./Forca');
const prompt = require('prompt-sync')();

class Jogo {
  constructor() {
    this.palavras = ['JavaScript', 'HTML', 'CSS', 'POO', 'Desafio', 'DevOps'];
    this.palavraSelecionada = this.selecionarPalavraAleatoria();
    this.maxTentativas = 6;
    this.tentativasRestantes = this.maxTentativas;
    this.letrasTentadas = [];
    this.forca = new Forca();
    this.pontuacao = 0;
    this.tempoInicial = new Date();
  }

  selecionarPalavraAleatoria() {
    return new Palavra(this.palavras[Math.floor(Math.random() * this.palavras.length)]);
  }

  exibirMensagemFinal(mensagem) {
    console.log(mensagem);
    if (!this.palavraSelecionada.isPalavraAdivinhada() && this.tentativasRestantes === 0) {
      console.log('Você perdeu! A palavra correta era: ' + this.palavraSelecionada.palavra);
      this.forca.mostrarForca();
    }
  }

  tentarLetra() {
    const letra = prompt('Digite uma letra: ');

    if (!this.letrasTentadas.includes(letra)) {
      this.letrasTentadas.push(letra);

      const ocorrencias = this.palavraSelecionada.adivinharLetra(letra);

      if (ocorrencias.length === 0) {
        this.tentativasRestantes--;
        console.log(`Letra '${letra}' não está na palavra. Tentativas restantes: ${this.tentativasRestantes}`);
        this.forca.avancarEstagio();
      } else {
        console.log(`A letra '${letra}' está na palavra nas posições: ${ocorrencias.join(', ')}`);
      }

      console.log(`Palavra: ${this.palavraSelecionada.getPalavraAdivinhada()}`);
      console.log(`Letras tentadas: ${this.letrasTentadas.join(', ')}`);

      if (this.palavraSelecionada.isPalavraAdivinhada()) {
        const tempoDecorrido = (new Date() - this.tempoInicial) / 1000; // tempo em segundos
        this.pontuacao += 100 - tempoDecorrido;
        this.exibirMensagemFinal(`Parabéns! Você adivinhou a palavra em ${tempoDecorrido.toFixed(2)} segundos! Pontuação: ${this.pontuacao.toFixed(2)}`);
      } else {
        this.exibirMensagemFinal('');
      }
    } else {
      console.log('Você já tentou esta letra. Tente outra.');
    }
  }

  tentarPalavra() {
    const palavra = prompt('Tente adivinhar a palavra: ');

    if (this.palavraSelecionada.palavra === palavra.toUpperCase()) {
      const tempoDecorrido = (new Date() - this.tempoInicial) / 1000; // tempo em segundos
      this.pontuacao += 50 - tempoDecorrido;
      this.exibirMensagemFinal(`Parabéns! Você adivinhou a palavra em ${tempoDecorrido.toFixed(2)} segundos! Pontuação: ${this.pontuacao.toFixed(2)}`);
    } else {
      this.tentativasRestantes--;
      console.log(`Palavra incorreta. Tentativas restantes: ${this.tentativasRestantes}`);
      this.forca.mostrarForca();
      this.exibirMensagemFinal('');
    }
  }
}

module.exports = Jogo;
