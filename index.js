#!/usr/bin/env node

const args = process.argv.slice(2); // Correct slicing to exclude "node" and script name.

const helpMessage = `
Usage: index.js [options]

Options:
  --help, -h     Show this help message
  --caps, -c     Include capital letters
  --length, -l   Length of the password (default: 8)
`;

if (args.includes("--help") || args.includes("-h")) {
  console.log(helpMessage);
  process.exit(0);
}

function showErrorAndExit(message) {
  console.error(`Error: ${message}`); //actual help message
  console.log('Use "index.js --help" for usage information.');
  process.exit(1);
}

// Parse length argument
const lengthIndex =
  args.indexOf("--length") !== -1
    ? args.indexOf("--length") + 1
    : args.indexOf("-l") + 1;

let length = 8; // Default password length
if (lengthIndex > 0) {
  const lengthArg = args[lengthIndex];
  if (!lengthArg || isNaN(lengthArg)) {
    showErrorAndExit(
      "Invalid or missing value for --length. Please provide a valid number."
    );
  } else {
    length = parseInt(lengthArg);
  }
}

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
