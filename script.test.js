const { sum, summationOf } = require('./script');

describe('A função sum', () => {
  test('dois mais dois é quatro', () => {
    expect(sum(2, 2)).toBe(4);
  });
  
  test('5.1 mais 6.55 é 11.65', () => {
    expect(sum(5.1, 6.55)).toBeCloseTo(11.65);
  });
  
  test('-5 mais -39 é -44', () => {
    expect(sum(-5, -39)).toBe(-44);
  });
});

describe('A função summationOf', () => {
  test('Espera que a função summationOF exista', () => {
    expect(typeof summationOf).toBe('function');
  });
  
  test('Espera-se que o somatório de 1 seja igual a 1', () => {
    expect(summationOf(1)).toBe(1);
  });
  
  test('Espera-se que o somatório de 3 seja igual a 6', () => {
    expect(summationOf(3)).toBe(6);
  });
  
  test('Espera-se que o somatório de 5 seja igual a 15', () => {
    expect(summationOf(5)).toBe(15);
  });
});


