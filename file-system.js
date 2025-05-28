// file-system.js
const fs = require('fs');

// Part 1: Create "welcome.txt"
const contentToWrite = "Hello Node";
fs.writeFile('welcome.txt', contentToWrite, (err) => {
  if (err) {
    console.error('Error writing to welcome.txt:', err);
    return;
  }
  console.log('"welcome.txt" has been created successfully with the content: ' + contentToWrite);

  // Part 2: Read and console.log data from "welcome.txt"
  fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading welcome.txt:', err);
      return;
    }
    console.log('Content of "welcome.txt":', data);
  });
});