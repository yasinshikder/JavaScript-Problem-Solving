function deleteInvalids(array) {
    if (!Array.isArray(array)) {
        return "Invalid Array.";
    }else{
    const numbers = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            numbers.push(array[i]);
        }
    }

    return numbers;
}
}

// Example usage:
const inputArray = [1, 2,55, '3', 'four', 5, 'six', 7];
console.log(deleteInvalids(inputArray)); // Output: [1, 2, 5, 7]


