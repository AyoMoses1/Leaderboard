import { scoresContainer } from './selectors.js';

const displayScores = (response) => {
  scoresContainer.innerHTML = '';
  response.forEach((res) => {
    const list = document.createElement('li');
    list.textContent = `${res.user}: ${res.score}`;
    scoresContainer.appendChild(list);
  });
};

export default displayScores;
