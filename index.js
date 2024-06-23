// Importa o módulo readline para ler a entrada do usuário no terminal
const readline = require('readline');

// Cria uma interface de leitura e escrita no terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Inicializa o tabuleiro do jogo com todas as posições vazias
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

// Função para imprimir o tabuleiro atual no console
const printBoard = () => {
  console.log(`${board[0][0]} | ${board[0][1]} | ${board[0][2]}`);
  console.log(`---------`);
  console.log(`${board[1][0]} | ${board[1][1]} | ${board[1][2]}`);
  console.log(`---------`);
  console.log(`${board[2][0]} | ${board[2][1]} | ${board[2][2]}`);
};

// Função para verificar se o jogador atual venceu o jogo
const checkWin = (player) => {
  const lines = [
    // Linhas horizontais, verticais e diagonais para verificar a vitória
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],
    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]]
  ];

  // Verifica se alguma das linhas contém apenas o símbolo do jogador atual
  return lines.some(line => {
    return line.every(([row, col]) => {
      return board[row][col] === player;
    });
  });
};

// Função para verificar se o jogo terminou em empate
const checkTie = () => {
  // Verifica se todas as posições do tabuleiro estão preenchidas
  return board.every(row => {
    return row.every(cell => cell !== ' ');
  });
};

// Função para realizar uma jogada no tabuleiro
const makeMove = (row, col, player) => {
  // Verifica se a posição escolhida está vazia
  if (board[row][col] === ' ') {
    board[row][col] = player; // Preenche a posição com o símbolo do jogador
    return true;
  } else {
    console.log('Posição já ocupada, escolha outra.');
    return false;
  }
};

// Função para perguntar ao jogador atual sua jogada
const askMove = (player) => {
  rl.question(`Jogador ${player}, escolha uma linha e uma coluna (exemplo: 1 2): `, (answer) => {
    // Converte a resposta em coordenadas numéricas
    const [row, col] = answer.split(' ').map(num => parseInt(num, 10) - 1);
    // Verifica se a jogada é válida e a realiza
    if (row >= 0 && row <= 2 && col >= 0 && col <= 2 && makeMove(row, col, player)) {
      printBoard(); // Imprime o tabuleiro após a jogada
      // Verifica se o jogador atual venceu ou se o jogo terminou em empate
      if (checkWin(player)) {
        console.log(`Jogador ${player} venceu!`);
        rl.close(); // Encerra a leitura do terminal
      } else if (checkTie()) {
        console.log('Empate!');
        rl.close(); // Encerra a leitura do terminal
      } else {
        askMove(player === 'X' ? 'O' : 'X'); // Passa a vez para o outro jogador
      }
    } else {
      console.log('Entrada inválida, tente novamente.');
      askMove(player); // Pede novamente a jogada para o mesmo jogador
    }
  });
};

// Inicia o jogo imprimindo o tabuleiro vazio e pedindo a jogada do jogador X
console.log('Jogo da Velha');
printBoard();
askMove('X');