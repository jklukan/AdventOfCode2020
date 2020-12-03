import fs from 'fs';
import Password2 from './Password2.js';

export default function() {
  const policiesAndPasswords = fs.readFileSync('./data/passwords.dat').toString();
  const entries = policiesAndPasswords.split(/\n/g);

  const validated = entries.filter(Password2);

  return validated;
}