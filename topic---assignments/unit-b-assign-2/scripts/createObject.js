
const fs = require('fs');
const path = require('path');

// Function to read JSON files in the current directory
function readJSONFiles(directory) {
    const files = fs.readdirSync(directory);
    const weatherData = {};

    files.forEach(file => {
        const filePath = path.join(directory, file);
        if (fs.statSync(filePath).isFile() && path.extname(filePath) === '.json') {
            const fileName = path.parse(file).name;
            const fileContent = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            weatherData[fileName] = fileContent;
        }
    });

    return weatherData;
}

// Main function to execute the script
function main() {
    const currentDirectory = process.cwd();
    const weatherData = readJSONFiles(currentDirectory);
    console.log(JSON.stringify(weatherData, null, 2));
}

// Call the main function
main();