import {soma, multiplica} from './soma';


test('soma de 1 + 2 deve ser igual a 3', () => {
  expect(soma(1, 2)).toBe(3);
});

test('soma de -1 + 1 deve ser igual a 0', () => {
  expect(soma(-1, 1)).toBe(0);
});

test('soma de 0 + 0 deve ser igual a 0', () => {
  expect(soma(0, 0)).toBe(0);
});

it('deve multiplicar por 2', () => {
  expect(multiplica(1, 2)).toBe(2);
});

it('deve multiplicar por 3', () => {
  expect(multiplica(3, 3)).toBe(9);
});

it('deve informar um error como multiplicador diferente', () => {
  expect(multiplica(0, 0)).toBe('Multiplicador nao aceito');
});