/* eslint-disable no-param-reassign */
const renderError = (elements, value) => {
  if (value === '') {
    return;
  }
  const error = value;
  elements.error.textContent = error;
  elements.error.classList.add('text-danger');
};

const createTitle = (name, title) => {
  if (name.querySelector('.card')) {
    return;
  }
  const div = document.createElement('div');
  name.appendChild(div);
  div.classList.add('card', 'border-0');
  const ul = document.createElement('ul');
  const card = document.createElement('div');
  div.appendChild(card);
  card.classList.add('card-body');
  div.appendChild(ul);
  ul.classList.add('list-group', 'border-0', 'rounded-0');
  const h2 = document.createElement('h2');
  card.appendChild(h2);
  h2.classList.add('card-title', 'h4');
  h2.textContent = title;
};

const renderResult = (elements, value) => {
  elements.error.textContent = '';
  const { result } = elements;
  createTitle(result, 'Результат вычеслений');
  const ul = result.querySelector('.list-group');
  ul.innerHTML = '';
  value.forEach((element) => {
    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    ul.prepend(li);
    li.classList.add('list-group-item', 'border-0', 'border-end-0');
    li.appendChild(h3);
    h3.classList.add('h6', 'm-0');
    h3.textContent = element;
  });
  elements.input.value = '';
  elements.input.focus();
};

const render = (elements) => (path, value) => {
  switch (path) {
    case 'result':
      renderResult(elements, value);
      break;

    case 'error':
      renderError(elements, value);
      break;

    default:
      break;
  }
};

export default render;
