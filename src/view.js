/* eslint-disable no-unused-vars */
/* eslint-disable radix */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
import sum from './sum.js';

const normalizationArray = (arr) => arr.map((item, index, arr) => {
  const number = parseInt(item);
  return isNaN(number) ? item : number;
});

const generateArr = (value) => {
  const arr = value.replace(/\s/g, '').split(',');
  const normalizeArr = normalizationArray(arr);
  const filterArr = normalizeArr.filter((el) => el !== '');
  return filterArr;
};

const view = (elements, state) => {
  elements.form.addEventListener('submit', (e) => {
    e.preventDefault();
    const { value } = elements.input;
    const arr = generateArr(value);
    try {
      const sumElements = sum(arr);
      state.result.push(sumElements);
    } catch (e) {
      state.error = e;
    }
  });
};

export default view;
