# Jogo da Velha

O Jogo da Velha é um jogo de estratégia simples para dois jogadores. O objetivo do jogo é ser o primeiro a formar uma linha de três de seus próprios símbolos (X ou O) horizontalmente, verticalmente ou diagonalmente em um tabuleiro 3x3.

## Como Jogar

### Pré-requisitos

Para jogar, você precisa ter um ambiente que possa executar código JavaScript, como um navegador com console de desenvolvedor ou um ambiente de desenvolvimento integrado (IDE) que suporte JavaScript e Node.js.

### Instruções

1. **Iniciar o Jogo**: O jogo é iniciado com um tabuleiro vazio de 3x3. Um jogador escolhe ser X e o outro O. Os jogadores então se alternam para fazer uma jogada.

2. **Fazer uma Jogada**: Uma jogada envolve o jogador atual escolhendo uma posição vazia no tabuleiro e colocando seu símbolo (X ou O) nessa posição. A posição é especificada por uma coordenada de linha e coluna.

3. **Verificar Vitória**: Após cada jogada, o jogo verifica se o jogador atual formou uma linha de três de seus símbolos. Se sim, esse jogador é declarado o vencedor.

4. **Verificar Empate**: Se todas as posições do tabuleiro estiverem preenchidas e nenhum jogador tiver vencido, o jogo termina em empate.

5. **Reiniciar o Jogo**: Após um jogo terminar, os jogadores podem iniciar um novo jogo com um tabuleiro vazio.

### Regras

- Os jogadores se alternam para fazer uma jogada.
- Um jogador não pode jogar em uma posição que já está ocupada.
- O jogo termina quando um jogador vence formando uma linha de três ou quando todas as posições estão preenchidas, resultando em um empate.

## Rodando o jogo

Para rodar o jogo diretamente no terminal, use:

```
node index.js