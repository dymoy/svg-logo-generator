/* Include packages needed for this application */
const inquirer = require('inquirer');
const fs = require('fs');

/** 
 * Create an array of questions for user input including the following sections:
 * Text (up to 3 characters), 
 * Text color (color keyword or hex),
 * Shape (list - circle, triangle, or square),
 * Shape color (color keyword or hex)
 */ 
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'What text would you like in your logo? Please enter up to 3 characters.',
        validate: validateText
    }
];

/**
 * Validate that the text entered is 3 characters or fewer.
 * @param {String} answer - text entered by the user 
 * @returns {Boolean} - Returns false if over 3 characters. 
 */
function validateText(answer) {
    return answer.length <= 3;
}

/* Create a function to initialize app */
function init() {
    console.log("Welcome to the README Generator! Let's get started. Please answer the following prompts.");
    
    // Prompt the user with the questions and then write data into 'README.md'
    inquirer.prompt(questions)
    .then((data) => {
        // Call the writeToFile function to write the content into the output file
        const fileName = 'logo.svg';
    });
}

/* Function call to initialize app */
init();