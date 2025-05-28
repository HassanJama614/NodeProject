// password-generator.js
const generatePassword = require('generate-password');

function createAndLogPassword() {
  const password = generatePassword.generate({
    length: 12,
    numbers: true,
    symbols: true,
    uppercase: true,
    lowercase: true,
    strict: true
  });
  console.log('Generated Password:', password);
}
createAndLogPassword();