/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {

  let obj = {}

  for (const transaction of transactions) {
    obj[transaction.category] = (obj[transaction.category] || 0) + transaction.price;
  }

  let ans = [];

  for (const category in obj) {
    const categoryTotal = {};
    categoryTotal[category] = obj[category];
    ans.push(categoryTotal);
  }

  return ans;
}

const transactions = [
  { itemName: 'Item 1', category: 'Groceries', price: 25, timestamp: 1631808000000 },
  { itemName: 'Item 2', category: 'Electronics', price: 350, timestamp: 1631718000000 },
  { itemName: 'Item 3', category: 'Groceries', price: 15, timestamp: 1631631600000 },
  { itemName: 'Item 4', category: 'Clothing', price: 50, timestamp: 1631545200000 },
  { itemName: 'Item 5', category: 'Electronics', price: 200, timestamp: 1631458800000 },
  { itemName: 'Item 6', category: 'Clothing', price: 30, timestamp: 1631372400000 },
  { itemName: 'Item 7', category: 'Groceries', price: 40, timestamp: 1631286000000 },
];

const expectedOutput = [
  { Groceries: 80 },
  { Electronics: 550 },
  { Clothing: 80 },
];

const result = calculateTotalSpentByCategory(transactions);
console.log(result)
console.log(JSON.stringify(result) === JSON.stringify(expectedOutput));

module.exports = calculateTotalSpentByCategory;
