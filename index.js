var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");
console.log(message);

var message = "Hello " + chalk.blue.bold("World");
console.log(message);

var message = chalk.bgBlueBright("Hello ") + chalk.red("World");
console.log(message);

var message = chalk.bold.italic( "Hello ") + chalk.yellow("World");
console.log(message);

var message = chalk.underline("Hello ") + chalk.yellow.bgCyan.white("World");
console.log(message);

var message = "Hello " + chalk.yellow("World");
console.log(message);


'use strict';

const ignoreChars = /[^!-~]/;

function rainbow(str, offset) {
  if (!str || str.length === 0) {
    return str;
  }

  const hueStep = 360 / str.replace(ignoreChars, '').length;

  let hue = offset % 360;
  const chars = [];
  for (const c of str) {
    if (c.match(ignoreChars)) {
      chars.push(c);
    } else {
      chars.push(chalk.hsl(hue, 100, 50)(c));
      hue = (hue + hueStep) % 360;
    }
  }

  return chars.join('');
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function animateString(str) {
  console.log();
  for (let i = 0; i < 360 * 5; i++) {
    console.log('\u001B[1F\u001B[G ', rainbow(str, i));
  //  await sleep(2); // eslint-disable-line no-await-in-loop
  }
}

console.log();
animateString('We hope you enjoy the new version of Chalk 2! <3');
