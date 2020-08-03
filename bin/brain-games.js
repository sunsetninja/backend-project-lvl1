#!/usr/bin/env node

import { getUserName, greetUser } from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const userName = getUserName();
greetUser(userName);
