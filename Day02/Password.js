export default function(policyAndPassword) {
  const [policy, password] = policyAndPassword.split(/: /, 2);
  const [, min, max, character] = (policy || '').match(/^(\d+)-(\d+) (\w)$/) || [];
  const matches = [...password].filter((char) => char === character);
  return matches.length >= min && matches.length <= max;
}