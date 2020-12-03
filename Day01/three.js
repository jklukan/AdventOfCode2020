import fs from 'fs';

export default function() {
  const data = fs.readFileSync('./data/expenses.csv').toString();
  const expenses = data.split(/\n/g).map(Number);

  const foundEntry = expenses.reduce((found, expense, index) => {
    if (found) return found;
    // iterate through the remaining numbers

    const remainder = 2020 - expense;
    const subset = expenses.slice(index + 1);

    const second = expenses.find((expense2) => {
      const third = remainder - expense2;
      return subset.includes(third);
    });

    if (!second) return null;

    return [expense, second, remainder - second];
  }, null);

  if (!foundEntry) return [];

  return [...foundEntry, foundEntry.reduce((a, b) => a * b)];
};
