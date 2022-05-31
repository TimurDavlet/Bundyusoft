/* eslint-disable no-unused-vars */
const isStringInArr = (arr) => arr.some((elem) => typeof elem === 'string');

const sumOfMinimumElements = (arr) => {
  if (arr.length < 2) {
    throw new Error('Введите более двух цифр через запятую');
  }
  if (isStringInArr(arr)) {
    throw new Error('Массив должен содержать только цифры');
  }
  const sortArr = arr.sort((a, b) => a - b);
  const [one, two, ...tail] = sortArr;
  return one + two;
};

export default sumOfMinimumElements;
