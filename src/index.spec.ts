import { hello, message } from './index';

describe('Un ensemble de test de sur des variables', () => {
  test('Verification contenu variable', () => {
    expect(message).toBe('Hello World !');
  });

  test('Verification contenu variable', () => {
    expect(message).not.toBe('HelloWorld!');
  });
});

describe('Un ensemble de test de fonction', () => {
  test('Dis hello à Joseph', () => {
    const result = hello('Joseph');
    expect(result).toBe('Hello Joseph !');
  });

  test('Dis hello à un inconnu', () => {
    const result = hello();
    expect(result).toBe('Hello inconnu !');
  });
});
