import onChange from 'on-change';
import render from './render.js';
import view from './view.js';

export default () => {
  const elements = {
    result: document.querySelector('.feedback'),
    form: document.querySelector('.rss-form'),
    input: document.getElementById('url-input'),
    error: document.querySelector('.error'),
  };

  const state = onChange({
    result: [],
    error: '',
  }, render(elements));

  view(elements, state);
};
