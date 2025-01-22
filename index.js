#!/usr/bin/env node

const args = process.argv.slice(1);

const helpMessage = `
Usage: index.js [options] [arguments]

Options:
  --help, -h     Show this help message
  --caps, -c     Include capital letters
  --length, -l   Length of the password (default: 8)
`;

if (args.includes("--help") || args.includes("-h")) {
  console.log(helpMessage); //help message flag
  process.exit(0);
}

function showErrorAndExit(message) {
  console.error(`Error: ${message}`); //actual help message
  console.log('Use "index.js --help" for usage information.');
  process.exit(1);
}

const lengthIndex =
  args.indexOf("--length") !== -1
    ? args.indexOf("--length") + 1
    : args.indexOf("-l") + 1;

let length = 8; // Default length
if (lengthIndex > 0) {
  if (!args[lengthIndex] || isNaN(args[lengthIndex])) {
    showErrorAndExit(
      "Invalid or missing value for --length. Please provide a valid number."
    );
  } else {
    length = parseInt(args[lengthIndex]);
  }
}
// the caps and lowercase for the gen
const smallSet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const largeSet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

let includeCaps = false; //starts false
if (args.includes("--caps") || args.includes("-c")) {
  includeCaps = true;
}

let charPool = smallSet; // Starts with low
if (includeCaps) {
  charPool += largeSet; // Adds upp if flag is set off
}

let password = "";
for (let i = 0; i < length; i++) {
  //loop
  const randomIndex = Math.floor(Math.random() * charPool.length); //Main gen
  password += charPool[randomIndex];
}

console.log(`Generated Password: ${password}`);
