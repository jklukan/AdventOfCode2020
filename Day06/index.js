import fs from 'fs';

import { parseAllResponses } from './parseAllResponses.js';

const data = fs.readFileSync('./data/customs.dat').toString().split(/\n\n/g).map((r) => r.split(/\n/g));

// part 1 - sum of "yes" responses
const allResponses = parseAllResponses(data);
console.log({ allResponses });
const sums = Object.values(allResponses).reduce((sum, responses) => sum + Object.keys(responses).length, 0);
console.log(sums);

// part 2 - count of "all-yes" responses (where everyone responded with "yes")
const sumOfAllYesses = data.map((responses, i) => {
  const count = responses.length;
  const yesResponsesForAll = Object.values(allResponses[i]).filter((c) => c === count);
  console.log({ count, yesResponsesForAll });
  return yesResponsesForAll.length;
}).reduce((a, b) => a + b);
console.log(sumOfAllYesses);