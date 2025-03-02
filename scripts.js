const gameItemElement = document.getElementById('game-items');
const userPick = document.getElementById('user-pick');
const cpuPick = document.getElementById('cpu-pick');
const result = document.getElementById('result');
let userPoints = 0;
let cpuPoints = 0;

const gameOptions = ['rock', 'paper', 'scissors'];
const gameRules = {
    paper: {
        rock : true,
        scissors : false
    },
    rock: {
        scissors : true,
        paper : false
    },
    scissors: {
        paper : true,
        rock : false
    }
}

let userSelection = null;
let cpuSelection = null;

const updateScores = () => {
    document.getElementById('user-points').textContent = userPoints;
    document.getElementById('cpu-points').textContent = cpuPoints;
};

const printChoices = () => {
    userPick.textContent = userSelection.toUpperCase();
    cpuPick.textContent = cpuSelection.toUpperCase();
};

const generateRandomGame = () => {
    cpuSelection = gameOptions[Math.floor(Math.random() * gameOptions.length)];
    printChoices();
    checkWinner();
    updateScores();
};

const checkWinner = () => {
    if (userSelection === cpuSelection) {
        result.textContent = 'It\'s a tie!';
    } else if (gameRules[userSelection][cpuSelection]) {
        result.textContent = 'You win!';
        userPoints++;
    }
    else {
        result.textContent = 'You lose!';
        cpuPoints++;
    }
};

const setUserSelection = (item) => {
    userSelection = item;
    userPick.innerHTML = item;
    generateRandomGame();
};

gameItemElement.addEventListener('click', (event) => {
    if (!event.target.classList.contains('game-item')) return;

    setUserSelection(event.target.dataset.item);
});