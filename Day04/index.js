import fs from 'fs';

const data = fs.readFileSync('./data/passports.dat').toString();

const passports = data.split(/\n\n/g);

const parsePassport = (passport) => passport.split(/\n| /g).map((entry) => entry.match(/^(...):(.*)$/).slice(1)).reduce((dat, [key, value]) => ({
  ...dat,
  [key]: value,
}), {});

const requiredKeys = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

const isValidPassport = (passport) => requiredKeys.every((key) => (key in passport));

const between = (val, min, max) => val >= min && val <= max;

const validators = {
  byr: /* Birth Year */ (val) => between(val, 1920, 2002),
  iyr: /* Issue Year */ (val) => between(val, 2010, 2020),
  eyr: /* Expiration Year */ (val) => between(val, 2020,  2030),
  hgt: /* Height */ (val) => {
    const expr = /^(\d+)(cm|in)$/;
    if (!expr.test(val)) return false;

    const [_, height, unit] = val.match(expr);

    if (unit === 'cm') {
      return between(height, 150, 193);
    }

    return between(height, 59, 76);
  },
  hcl: /* Hair Color */ (val) => /^#[\da-f]{6}$/.test(val),
  ecl: /* Eye Color */ (val) => ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(val),
  pid: /* Passport ID */ (val) => /^\d{9}$/.test(val),
};

const validatePassportData = (passport) => Object.entries(passport).every(([key, value]) => (!(key in validators) || validators[key](value)));

const isValidPassport2 = (passport) => (isValidPassport(passport) && validatePassportData(passport));

const parsed = passports.map(parsePassport);

const validPassports = parsed.filter(isValidPassport);
const validPassports2 = parsed.filter(isValidPassport2);

console.log(validPassports, validPassports.length);
console.log(validPassports2, validPassports2.length);
