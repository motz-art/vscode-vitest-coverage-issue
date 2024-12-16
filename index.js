export function process(input) {
  const result = getResult(input);

  if (!result) return undefined;

  return result;
}

function getResult(input) {
  return input == "error" ? undefined : {};
}
