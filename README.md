# Password Generator CLI Application

## Overview
This Command-Line Interface (CLI) application generates random passwords based on user-provided flags. It allows customization such as password length and the inclusion of uppercase letters, offering a simple and secure way to generate strong passwords.

---

## How to Use
### Installation
1. Ensure you have [Node.js](https://nodejs.org/) installed on your system.
2. Save the script as `index.js` in your desired directory.
3. Make the script executable by running:
   ```bash
   chmod +x index.js
   ```

### Running the Application
Run the script with appropriate flags from the terminal:
```bash
./index.js [options]
```

### Available Options
- **`--help` or `-h`**: Displays the help message with usage instructions.
  ```bash
  ./index.js --help
  ```

- **`--length` or `-l`**: Specifies the length of the generated password. Defaults to 8 characters if not provided.
  ```bash
  ./index.js --length 12
  ```

- **`--caps` or `-c`**: Includes uppercase letters in the password.
  ```bash
  ./index.js --caps
  ```

### Example Commands
1. Generate a password with default settings (8 lowercase characters):
   ```bash
   ./index.js
   ```

2. Generate a password of 10 characters:
   ```bash
   ./index.js --length 10
   ```

3. Generate a password with uppercase letters:
   ```bash
   ./index.js --caps
   ```

4. Generate a password with both uppercase letters and a length of 12:
   ```bash
   ./index.js --length 12 --caps
   ```

---

## Error Handling
The application gracefully handles invalid inputs:
- If an invalid or missing value is provided for `--length`:
  ```bash
  ./index.js --length abc
  ```
  Output:
  ```
  Error: Invalid or missing value for --length. Please provide a valid number.
  Use "index.js --help" for usage information.
  ```

- For unrecognized flags:
  ```bash
  ./index.js --unknown
  ```
  Output:
  ```
  Warning: Unrecognized flags: --unknown
  ```

---

## How It Works
1. **Parse Arguments**: The script processes command-line arguments to identify flags such as `--help`, `--length`, and `--caps`.
2. **Character Pool**: Based on the flags, it creates a pool of characters for password generation:
   - Lowercase letters are always included.
   - Uppercase letters are added if the `--caps` flag is provided.
3. **Password Generation**:
   - A random password is generated by selecting characters from the pool until the specified length is reached.
4. **Output**: The password is displayed in the terminal.

---

## Project Features
- **Default Settings**: Generates an 8-character password with lowercase letters by default.
- **Customization**: Add uppercase letters or specify a custom length.
- **Help Message**: Provides clear instructions on how to use the application.
- **Error Handling**: Ensures graceful responses to invalid inputs.

---

## Notes
- The script supports additional customization in the future (e.g., adding numbers or symbols).
- It uses only built-in Node.js features for simplicity and portability.

