/**
 * BRUTAL FORCE SOLUTION
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */
const maxProfitBrutalForceSolution = (prices) => {  
    let maxProfit = 0; // Stores the maximum profit found so far.

    for (let leftBuy = 0; leftBuy < prices.length; leftBuy++) {
        for (let rightSell = leftBuy; rightSell < prices.length; rightSell++) {
            const currentProfit = prices[rightSell] - prices[leftBuy]; // Profit for current buy/sell pair.
            maxProfit = Math.max(maxProfit, currentProfit); // Update maxProfit if currentProfit is higher.
        }
    }

    return maxProfit;
};

/**
 * TWO POINTERS SOLUTION
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
const maxProfitTwoPointersSolution = (prices) => {  
    let maxProfit = 0; // Stores the maximum profit found so far.
    let leftBuy = 0; // Start of the array (buy day).
    let rightSell = prices.length - 1; // End of the array (sell day).

    while (leftBuy < rightSell) {
        const currentProfit = prices[rightSell] - prices[leftBuy]; // Profit for current buy/sell pair.
        maxProfit = Math.max(maxProfit, currentProfit); // Update maxProfit if currentProfit is higher.

        // Adjust pointers:
        if (prices[leftBuy] < prices[rightSell]) {
            rightSell--; // Move sell pointer leftwards.
        } else {
            leftBuy++; // Move buy pointer rightwards.
        }
    }

    return maxProfit;
};

/**
 * DYNAMIC SOLUTION
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
const maxProfitDynamicSolution = (prices) => {  
    let minPrice = Number.MAX_VALUE; // Smallest price seen so far.
    let maxProfit = 0; // Stores the maximum profit found so far.

    for (let currentPrice of prices) {
        minPrice = Math.min(minPrice, currentPrice); // Update the minimum price.
        maxProfit = Math.max(maxProfit, currentPrice - minPrice); // Update maxProfit if currentProfit is higher.
    }

    return maxProfit;
};

// Test Cases
const prices1 = [7, 1, 5, 3, 6, 4]; // Expected Max Profit: 5
const prices2 = [7, 6, 4, 3, 1];    // Expected Max Profit: 0

console.log('###### Brutal Force Solution ######');
console.log(`Max Profit for prices1: ${maxProfitBrutalForceSolution(prices1)}`);
console.log(`Max Profit for prices2: ${maxProfitBrutalForceSolution(prices2)}`);
console.log(' ');
console.log('###### Two Pointers Solution ######');
console.log(`Max Profit for prices1: ${maxProfitTwoPointersSolution(prices1)}`);
console.log(`Max Profit for prices2: ${maxProfitTwoPointersSolution(prices2)}`);
console.log(' ');
console.log('###### Dynamic Solution ######');
console.log(`Max Profit for prices1: ${maxProfitDynamicSolution(prices1)}`);
console.log(`Max Profit for prices2: ${maxProfitDynamicSolution(prices2)}`);
