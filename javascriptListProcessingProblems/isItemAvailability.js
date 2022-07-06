const { transactionsFor, transactions } = require('./transactionsFor');

const sumMovements = (movement, list) => list.filter(({ movement: m }) => m === movement)
  .reduce((sum, m) => sum + m.quantity, 0);

const isItemAvailable = (itemID, list) => {
  const itemTransactions = transactionsFor(itemID, list);
  const inMovements = sumMovements('in', itemTransactions);
  const outMovements = sumMovements('out', itemTransactions);
  return inMovements > outMovements;
};

console.log(isItemAvailable(101, transactions)); // false
console.log(isItemAvailable(105, transactions)); // true
