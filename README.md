# Jogo da Adivinhação de Palavras Estilizado

Bem-vindo ao Jogo da Adivinhação de Palavras Estilizado! Este é um jogo de console em JavaScript que é uma variação do tradicional jogo da forca. Neste jogo, os jogadores têm a tarefa de adivinhar uma palavra oculta escolhida aleatoriamente de uma lista predefinida de palavras.

**Requisitos:**
- Node.js instalado no seu ambiente.

**Como Jogar:**
1. Clone este repositório:

```bash
git clone https://github.com/Alanz0ka/Laboratorio-6.git
cd jogo-adivinhacao
```

2. Instale as dependências:

```bash
npm install prompt-sync
```
3. Execute o jogo:

```javascript
node main.js
```
Siga as instruções no console para jogar!

**Funcionalidades:**
- *Seleção de Palavras:* O jogo inclui uma lista de palavras pré-definidas no código.
- *O Jogo:* Ao iniciar, o jogo escolhe aleatoriamente uma palavra da lista. A palavra escolhida é apresentada ao jogador na forma de espaços em branco ou sublinhado, onde cada espaço representa uma letra da palavra oculta.
- *Adivinhação de Letras:* O jogador pode adivinhar uma letra por vez, inserindo-a pelo console. Se a letra estiver presente na palavra, as ocorrências são reveladas nas posições corretas. Caso contrário, o jogo informa que a letra não está na palavra e registra um erro.
- *Controle de Erros:* O jogador tem um número limitado de tentativas para adivinhar a palavra completa. A cada letra incorreta, uma forca estilizada é desenhada no console.
- *Feedback ao Jogador:* O jogo fornece feedback constante sobre o estado atual da palavra (letras corretas adivinhadas, erros cometidos) e a condição do jogador (ganhou, perdeu).
- *Vitória ou Derrota:* O jogador ganha se conseguir adivinhar a palavra dentro do número máximo de tentativas permitidas. O jogador perde se exceder o número máximo de erros permitidos.
- *Interface Console:* Toda a interação com o jogador ocorre por meio do console, com mensagens amigáveis e claras.
- *Orientação a Objetos:* O jogo é implementado utilizando princípios de programação orientada a objetos, com classes como "Jogo", "Palavra", "Forca" e outras que representam entidades relevantes.

**Diferenciação:**
Adicionou-se uma característica única ao jogo que o diferencia do tradicional jogo da forca: a exibição de uma forca estilizada no console.

**Contribuições:**
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

