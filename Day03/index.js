import fs from 'fs';
import Terrain from './Terrain.js';

const data = fs.readFileSync('./data/terrain.dat').toString();

const instance = new Terrain(data);

const filter = (spot) => spot;

// r3d1
const one = instance.getLine(0, 0, 3, 1);
const oneFiltered = one.filter(filter).length;
console.log(one, oneFiltered);

// multiple
const slopes = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]];
const slopeFinds = slopes.map((slope) => instance.getLine(0, 0, ...slope));
const slopeCounts = slopeFinds.map((slope) => slope.filter(filter).length);
const multiplied = slopeCounts.reduce((a, b) => a * b);
console.log(slopeCounts, multiplied);