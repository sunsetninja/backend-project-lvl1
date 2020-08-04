import readlineSync from 'readline-sync';
import pairs from '@hexlet/pairs';
import { getUserName, greetUser } from './cli.js';

function startGameFlow({
  questionsCount = 3,
  rules,
  generateQuestion,
}) {
  console.log('Welcome to the Brain Games!');
  const userName = getUserName();
  greetUser(userName);
  console.log(rules);

  let questionsAsked = 0;
  let correctAnswersCount = 0;

  while (questionsAsked < questionsCount) {
    const question = generateQuestion();
    if (!pairs.isPair(question)) return;
    const currentQuestion = pairs.car(question);
    console.log(`Question: ${currentQuestion}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = pairs.cdr(question);

    questionsAsked += 1;

    if (answer === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      break;
    }
  }

  if (correctAnswersCount === questionsCount) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
}

export default startGameFlow;
