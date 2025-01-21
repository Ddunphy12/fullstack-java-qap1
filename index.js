#!/usr/bin/env node

const args = process.argv.slice(1);

const helpMessage = `
Usage: qap [options] [arguments]

Options:
  --help, -h     Show this help message
  --version, -v  Show the version number
  --caps, -c     Include capital letters
  --numbers, -n  Include numbers
  --special, -s  Include special characters
  --length, -l   Length of the password (default: 8)
`;
