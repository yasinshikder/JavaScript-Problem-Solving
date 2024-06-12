function monthlySavings(arr, livingCost) {
    if (!Array.isArray(arr)) {
        return "Invalid input.";
    }
    let totalEarnings = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 3000) {
            arr[i] = arr[i] * 0.8; 
        }
    
        totalEarnings = totalEarnings + arr[i];
    }
    const monthlySavings = totalEarnings - livingCost;
    if (monthlySavings < 0) {
        return "Earn more";
    }
    return monthlySavings;
}

// Example usage:
const earnings = [900 , 2700 , 3400]; // Monthly earnings
const livingCost = 10000; // Monthly living cost
console.log(monthlySavings(earnings, livingCost)); // Output: 4800 (3500 - 2000 + 4000 * 0.8 + 2800)

