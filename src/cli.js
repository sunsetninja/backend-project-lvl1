import readlineSync from 'readline-sync';

export function log(message) {
  console.log(message);
}

export function askQuestion(question) {
  return readlineSync.question(question);
}
