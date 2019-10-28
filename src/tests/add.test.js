const add = (a, b) => a + b;
const genGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add 2 numbers', () => {
  const result = add(3, 4);
  expect(result).toBe(7)
})

test('should generate greeting with a given name', () => {
  const result = genGreeting('Ibidapo');
  expect(result).toBe('Hello Ibidapo!');
})


test('should generate greeting with no name', () => {
  const result = genGreeting();
  expect(result).toBe('Hello Anonymous!');
})