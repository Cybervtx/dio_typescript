export const soma = (a: number, b: number): number => {
  return a + b;
}

export const multiplica = (a: number, mult: number): number | string => {
    if (mult == 2 || mult == 3) {
        return a * mult;
    }
  return 'Multiplicador nao aceito';
}