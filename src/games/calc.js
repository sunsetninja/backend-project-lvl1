import pairs from '@hexlet/pairs';
import { getRandomInt } from '../utils.js';
import playGame from '../index.js';

const operators = ['+', '-', '*'];
function getCorrectAnswer(operandA, operator, operandB) {
  switch (operator) {
    case '+':
      return operandA + operandB;
    case '-':
      return operandA - operandB;
    case '*':
      return operandA * operandB;
    default:
      return null;
  }
}

function generateQuestionAnswer() {
  const [operandA, operator, operandB] = [
    getRandomInt(1, 10),
    operators[getRandomInt(0, operators.length - 1)],
    getRandomInt(1, 10),
  ];
  const question = `${operandA} ${operator} ${operandB}`;
  const answer = String(getCorrectAnswer(operandA, operator, operandB));

  return pairs.cons(question, answer);
}

const gameRule = 'What is the result of the expression?';

function startGame() {
  playGame(
    gameRule,
    generateQuestionAnswer,
  );
}

export default startGame;
