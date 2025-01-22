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
  console.log(helpMessage); //help message flag
  process.exit(0);
}

function showErrorAndExit(message) {
  console.error(`Error: ${message}`);
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

// Character pools
const smallSet = "abcdefghijklmnopqrstuvwxyz".split(""); // Lowercase letters
const largeSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""); // Uppercase letters

// Check if capital letters should be included
let includeCaps = args.includes("--caps") || args.includes("-c");

let charPool = [...smallSet]; // Start with lowercase letters
if (includeCaps) {
  charPool = charPool.concat(largeSet); // Add uppercase letters if flag is set
}

// Generate password
let password = "";
for (let i = 0; i < length; i++) {
  const randomIndex = Math.floor(Math.random() * charPool.length);
  password += charPool[randomIndex];
}

console.log(`Generated Password: ${password}`);
