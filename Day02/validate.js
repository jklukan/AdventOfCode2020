import fs from 'fs';
import Password from './Password.js';

export default function() {
  const policiesAndPasswords = fs.readFileSync('./data/passwords.dat').toString();
  const entries = policiesAndPasswords.split(/\n/g);

  const validated = entries.filter(Password);

  return validated;
}