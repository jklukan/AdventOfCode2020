export default function(policyAndPassword) {
  const [policy, password] = policyAndPassword.split(/: /, 2);
  const [, pos1, pos2, character] = (policy || '').match(/^(\d+)-(\d+) (\w)$/) || [];

  return (
    (password[pos1 - 1] === character) ^
    (password[pos2 - 1] === character)
  ) === 1;
}