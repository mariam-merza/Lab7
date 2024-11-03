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
