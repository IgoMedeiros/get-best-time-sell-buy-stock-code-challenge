## **Overview**
The goal is to find the **maximum profit** by buying and selling a stock once. The solutions differ in their approach:

1. **Brutal Force Solution**: Tries every possible pair of buy/sell prices.
2. **Two Pointers Solution**: Uses two indices (pointers) to reduce the search space efficiently.
3. **Dynamic Solution**: Iteratively tracks the minimum price and calculates the maximum profit.

---

## **Solution Details**

### **1. Brutal Force Solution**

#### **Algorithm**
- Use **two nested loops**:
  - Outer loop (`leftBuy`): Picks the day to buy.
  - Inner loop (`rightSell`): Picks the day to sell after the buy day.
- For every combination of buy and sell:
  - Calculate `currentProfit = prices[rightSell] - prices[leftBuy]`.
  - Update `maxProfit` if `currentProfit` is greater.

#### **Variables**
- `leftBuy`: Index of the day we consider buying the stock.
- `rightSell`: Index of the day we consider selling the stock.
- `currentProfit`: Profit from buying on `leftBuy` and selling on `rightSell`.
- `maxProfit`: Tracks the maximum profit seen so far.

#### **Time Complexity**
- **Outer loop** runs \( n \) times.
- **Inner loop** runs \( n - 1, n - 2, \dots, 1 \) times.
- Total complexity: \( O(n^2) \) (quadratic).
- **Space Complexity**: \( O(1) \) (constant extra space).

---

### **2. Two Pointers Solution**

#### **Algorithm**
- Use **two pointers**: `leftBuy` (start) and `rightSell` (end).
- Compare the profit for the current pair of days:
  - If `prices[leftBuy]` is less than `prices[rightSell]`:
    - Calculate the `currentProfit` and update `maxProfit`.
    - Decrement `rightSell` (move closer to maximize profit).
  - Otherwise, increment `leftBuy` to find a better buy day.

#### **Variables**
- `leftBuy`: Tracks the index of the buy day.
- `rightSell`: Tracks the index of the sell day.
- `currentProfit`: Profit from buying on `leftBuy` and selling on `rightSell`.
- `maxProfit`: Tracks the maximum profit seen so far.

#### **Time Complexity**
- Both pointers traverse the array once.
- Total complexity: \( O(n) \) (linear).
- **Space Complexity**: \( O(1) \).

---

### **3. Dynamic Solution**

#### **Algorithm**
- Track the **minimum price** (`minPrice`) seen so far.
- As we iterate through the prices:
  - Calculate `currentProfit = currentPrice - minPrice`.
  - Update `maxProfit` if `currentProfit` is greater.
  - Update `minPrice` if `currentPrice` is lower.

#### **Variables**
- `minPrice`: Lowest price seen so far.
- `maxProfit`: Tracks the maximum profit seen so far.
- `currentPrice`: Current day's price.

#### **Time Complexity**
- Single pass through the array.
- Total complexity: \( O(n) \) (linear).
- **Space Complexity**: \( O(1) \).

---

## **Key Takeaways**
- **Brutal Force** is simple but inefficient with \( O(n^2) \) complexity.
- **Two Pointers** improves efficiency by reducing the search space with \( O(n) \) complexity.
- **Dynamic Programming** is the optimal solution with the same \( O(n) \) complexity but simpler logic.

Choose the solution based on your needs, considering simplicity vs. performance.