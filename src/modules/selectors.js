const refreshBtn = document.querySelector('.rfr-btn');
const scoresContainer = document.querySelector('.scores-container');
const submitBtn = document.querySelector('.form-handler button');
const gameId = localStorage.getItem('Game ID');

export {
  refreshBtn, scoresContainer, submitBtn, gameId,
};
