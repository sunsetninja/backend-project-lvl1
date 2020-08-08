import pairs from '@hexlet/pairs';
import {
  getUserName, greetUser, log, askQuestion,
} from './cli.js';

function playGameFlow({
  questionsCount = 3,
  rules,
  generateQuestionAnswerPair,
}) {
  log('Welcome to the Brain Games!');
  const userName = getUserName();
  greetUser(userName);
  log(rules);

  let questionsAsked = 0;
  let correctAnswersCount = 0;

  while (questionsAsked < questionsCount) {
    const question = generateQuestionAnswerPair();
    if (!pairs.isPair(question)) return;
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
