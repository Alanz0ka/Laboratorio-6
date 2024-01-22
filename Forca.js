class Forca {
    constructor() {
      this.estagios = [
        [
          '+---+',
          '|   |',
          '    |',
          '    |',
          '    |',
          '    |',
          '=========',
        ],
        [
          '+---+',
          '|   |',
          'O   |',
          '    |',
          '    |',
          '    |',
          '=========',
        ],
        [
          '+---+',
          '|   |',
          'O   |',
          '|   |',
          '    |',
          '    |',
          '=========',
        ],
        [
          '+---+',
          '|   |',
          'O   |',
          '/|\\  |',
          '    |',
          '    |',
          '=========',
        ],
        [
          '+---+',
          '|   |',
          'O   |',
          '/|\\  |',
          '/    |',
          '    |',
          '=========',
        ],
        [
          '+---+',
          '|   |',
          'O   |',
          '/|\\  |',
          '/ \\  |',
          '    |',
          '=========',
        ],
      ];
  
      this.estagioAtual = 0;
    }
  
    mostrarForca() {
      console.log('\nForca Atual:');
      this.estagios[this.estagioAtual].forEach((linha) => console.log(linha));
    }
  
    avancarEstagio() {
      this.estagioAtual = Math.min(this.estagioAtual + 1, this.estagios.length - 1);
      this.mostrarForca();
    }
  
    isForcaCompleta() {
      return this.estagioAtual === this.estagios.length - 1;
    }
  }
  
  module.exports = Forca;
  