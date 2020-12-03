import fs from 'fs';

export default function() {
  const data = fs.readFileSync('./data/expenses.csv').toString();
  const expenses = data.split(/\n/g).map(Number);

  const foundEntry = expenses.find((expense) => expenses.includes(2020 - expense));

  if (!foundEntry) return [];

  const otherEntry = 2020 - foundEntry;

  return [foundEntry, otherEntry, foundEntry * otherEntry];
};
