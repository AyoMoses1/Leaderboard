import displayScores from './display.js';
import { gameId, submitBtn } from './selectors.js';
import apiHandler from './fetch.js';

const getAllScores = () => {
  const res = apiHandler('GET', gameId);
  res.then((response) => response.json())
    .then((json) => displayScores(json.result));
};

const createScore = async (e) => {
  e.preventDefault();
  const user = document.querySelector('input[name="name"]').value;
  const score = document.querySelector('input[name="score"]').value;
  const payload = {
    user,
    score,
  };
  const response = await apiHandler('POST', gameId, payload);
  getAllScores(response.json());
};

submitBtn.addEventListener('click', (e) => createScore(e));

export default getAllScores;