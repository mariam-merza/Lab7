function countWithinRandomRange(inputString, character) {
    // Generate two random numbers between 0 and the length of the string
    const start = Math.floor(Math.random() * inputString.length);
    const end = Math.floor(Math.random() * inputString.length);

    // Determine the correct range for the substring
    const lowerBound = Math.min(start, end);
    const upperBound = Math.max(start, end);

    // Generate the substring using the two random numbers
    const substring = inputString.substring(lowerBound, upperBound);

    // Use a string template literal to output the substring and the range
    console.log(`Generated substring: "${substring}" from range: [${lowerBound}, ${upperBound}]`);

    // Initialize count
    let count = 0;

    // Loop over the substring and count occurrences of the character (case-insensitive)
    for (let char of substring) {
        if (char.toLowerCase() === character.toLowerCase()) {
            count++;
        }
    }

    // Return the count
    return count;
}

// Define the constant string, wrapping it for readability
const quote = 
    "So do all who live to see such times; but that is not for them to decide. " +
    "All we have to decide is what to do with the time that is given to us.";

// Call the function with the defined string and a character of your choosing
const characterToSearch = 'i'; // Change this character to test different cases
const countResult = countWithinRandomRange(quote, characterToSearch);

// Handle the output based on the count result
if (countResult === 0) {
    console.log(`Didn't find any ${characterToSearch}'s.`);
} else if (countResult % 2 === 0) {
    console.log(`Found ${countResult} ${characterToSearch}'s, which is even!`);
} else if (countResult % 3 === 0) {
    console.log(`Found ${countResult} ${characterToSearch}'s. That's divisible by three! :O`);
} else {
    console.log(`Sadly, ${countResult} isn't a very interesting number of ${characterToSearch}'s. Oh well!`);
}
