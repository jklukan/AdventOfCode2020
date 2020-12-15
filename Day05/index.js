import fs from 'fs';

import BoardingPass from './BoardingPass.js';

const data = fs.readFileSync('./data/boarding_passes.dat').toString().split(/\n/g);

const passes = data.map((passData) => new BoardingPass(passData));

const seatIDs = passes.map((pass) => pass.seatID);

const maxID = Math.max(...seatIDs);

console.log(maxID);

const missingIDs = [...seatIDs].sort((a, b) => a - b).filter((seatID, i, arr) => i > 0 && arr[i - 1] !== seatID - 1).map((seatID) => seatID - 1);

console.log(missingIDs);