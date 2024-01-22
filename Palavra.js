class Palavra {
    constructor(palavra) {
      this.palavra = palavra.toUpperCase();
      this.palavraAdivinhada = Array(this.palavra.length).fill('_');
    }
  
    adivinharLetra(letra) {
      letra = letra.toUpperCase();
      const ocorrencias = [];
  
      this.palavra.split('').forEach((char, index) => {
        if (char === letra) {
          this.palavraAdivinhada[index] = letra;
          ocorrencias.push(index);
        }
      });
  
      return ocorrencias;
    }
  
    isPalavraAdivinhada() {
      return this.palavraAdivinhada.join('') === this.palavra;
    }
  
    getPalavraAdivinhada() {
      return this.palavraAdivinhada.join(' ');
    }
  }
  
  module.exports = Palavra;
  