import readlineSync from 'readline-sync';

export function log(message) {
  console.log(message);
}

export function getUserName() {
  return readlineSync.question('May I have your name?: ');
}

export function greetUser(userName) {
  log(`Hello, ${userName}`);
}
