const fs = require('fs');

// Read data from input.json
fs.readFile('input.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading input file:', err);
        return;
    }

    try {
        // Parse the JSON data
        const jsonData = JSON.parse(data);

        // Process the data (e.g., filter out people under 30)
        const processedData = jsonData.filter(person => person.age >= 30);

        // Convert the processed data back to JSON string
        const outputData = JSON.stringify(processedData, null, 2);

        // Write the processed data to output.json
        fs.writeFile('output.json', outputData, 'utf8', err => {
            if (err) {
                console.error('Error writing output file:', err);
                return;
            }
            console.log('Data successfully processed and saved to output.json');
        });
    } catch (error) {
        console.error('Error processing data:', error);
    }
});


///node processData.js

// [
//     { "name": "John", "age": 30 },
//     { "name": "Jane", "age": 25 },
//     { "name": "Doe", "age": 35 }
// ]