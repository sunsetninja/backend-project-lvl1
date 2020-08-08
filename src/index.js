import pairs from '@hexlet/pairs';
import {
  log, askQuestion,
} from './cli.js';

function playGameFlow(
  gameRule,
  generateQuestionAnswerPair,
  questionsCount = 3,
) {
  log('Welcome to the Brain Games!');
  const userName = askQuestion('May I have your name?: ');
  log(`Hello, ${userName}`);
  log(gameRule);

  let questionsAsked = 0;
  let correctAnswersCount = 0;

  while (questionsAsked < questionsCount) {
    const question = generateQuestionAnswerPair();
    const currentQuestion = pairs.car(question);
    log(`Question: ${currentQuestion}`);
    const answer = askQuestion('Your answer: ');
    const correctAnswer = pairs.cdr(question);

    questionsAsked += 1;

    if (answer === correctAnswer) {
      log('Correct!');
      correctAnswersCount += 1;
    } else {
      log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      break;
    }
  }

  if (correctAnswersCount === questionsCount) {
    log(`Congratulations, ${userName}!`);
  } else {
    log(`Let's try again, ${userName}!`);
  }
}

export default playGameFlow;
