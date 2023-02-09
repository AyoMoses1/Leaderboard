import { refreshBtn } from './modules/selectors.js';
import './style.css';
import getAllScores from './modules/controllers.js';

const gameId = 'adiAeDAyr0FjJcdQ8X9c';
localStorage.setItem('Game ID', gameId);

refreshBtn.addEventListener('click', getAllScores);
window.onload = getAllScores();