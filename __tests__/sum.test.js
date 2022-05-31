import sum from '../src/sum.js';

test('number array', () => {
  const arr = [5, 3, 8, 2, 1];
  expect(sum(arr)).toEqual(3);
});

test('number and string array', () => {
  const arr = [5, 'as', 8, 'undefined', 1];
  expect(() => sum(arr)).toThrowError('Массив должен содержать только цифры');
});

test('array length < 2', () => {
  const arr = [5];
  expect(() => sum(arr)).toThrowError('Введите более двух цифр через запятую');
});
