/* Include packages needed for this application */
const inquirer = require('inquirer');
const fs = require('fs');
const { isValidColorName, isValidRGB } = require('is-valid-css-color');
const generateSVG = require('./lib/generateSVG');

/** 
 * Create an array of questions for inquirer including the following keys:
 *  text - inquire using input and validate text length.
 *  textColor - inquire using input and validate color.
 *  shape - inquire using list with the choices [Circle, Triangle, Square].
 *  shapeColor - inquire using input and validate color.
 */ 
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'What text would you like in your logo? Please enter up to 3 characters. ',
        validate: validateText
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like your text? Please enter a color keyword or a hexadeimal number. ',
        validate: validateColor
    }, 
    {
        type: 'list',
        name: 'shape',
        message: 'Perfect! Now choose the shape of the logo you would like from the following list! ',
        choices: [
            'Circle',
            'Triangle',
            'Square'
        ],
        default: 'Circle'
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Sounds great! What color would you like the shape to be? Please enter a color keyword or a hexademical number. ',
        validate: validateColor
    }
];

/**
 * Uses the is-valid-css-color npm package to verify if the given color keyword or hexidecimal number is valid. 
 * @param {String} answer - The provided color keyword or hexadecimal provided by the user.
 * @returns {Boolean} - Returns true if color keyword or hex value is supported. Returns false if the provided String is an invalid color. 
 */
function validateColor(answer) {    
    var isValid = false;

    if (answer[0] === '#') {
        isValid = isValidRGB(answer);
    } else {
        isValid = isValidColorName(answer);
    }

    if (isValid) {
        return true;
    } else {
        console.log('\x1B[31m Please enter a valid color keyword or hexidecimal number. \x1B[31');
        return false;
    }
}

/**
 * Validate that the text entered is 3 characters or fewer.
 * @param {String} answer - Text entered by the user.
 * @returns {Boolean} - Returns false if over 3 characters. 
 */
function validateText(answer) {
    if (answer.length > 3) {
        console.log('\x1B[31m Please enter only up to 3 characters. \x1B[31');
        return false;
    }
    return true;
}

/**
 * Write contents into a file using npm fs package.
 * @param {String} fileName - the file name to write to. 
 * @param {String} content - the content to write into the file. 
 * If Error is encountered, it is logged into the console. If not, a success message is printed to the command line. 
 */
function writeToFile(fileName, content) {
    fs.writeFile(`./examples/${fileName}`, content, (err) => {
        err ? console.log(err) : console.log(`Success! Generated logo.svg!`);
    });
}

/* Create a function to initialize app */
function init() {
    console.log("Welcome to the SVG Logo Generator! Let's get started. Please answer the following prompts.");
    
    // Prompt the user with the questions and then write data into 'README.md'
    inquirer.prompt(questions)
    .then((data) => {
        // console.log(data);
        // Call the writeToFile function to write the content into the output file
        const fileName = 'logo.svg';
        const content = generateSVG(data);
        writeToFile(fileName, content);
    });
}

/* Function call to initialize app */
init();