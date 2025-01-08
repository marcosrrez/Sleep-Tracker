const scoreForm = document.getElementById("scoreForm");
const scoreInput = document.getElementById("scoreInput");
const scoreHistory = document.getElementById("scoreHistory");
const averageScore = document.getElementById("averageScore");
const highestScore = document.getElementById("highestScore");
const lowestScore = document.getElementById("lowestScore");

let scores = [];

function updateStats() {
    if (scores.length === 0) {
        averageScore.textContent = "0";
        highestScore.textContent = "0";
        lowestScore.textContent = "0";
        return;
    }

    const sum = scores.reduce((a, b) => a + b, 0);
    const avg = (sum / scores.length).toFixed(2);
    const max = Math.max(...scores);
    const min = Math.min(...scores);

    averageScore.textContent = avg;
    highestScore.textContent = max;
    lowestScore.textContent = min;
}

function updateHistory() {
    scoreHistory.innerHTML = "";
    scores.forEach((score, index) => {
        const entry = document.createElement("div");
        entry.className = "history-entry";
        entry.textContent = `Score ${index + 1}: ${score}`;
        scoreHistory.appendChild(entry);
    });
}

scoreForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const score = parseInt(scoreInput.value);
    if (isNaN(score)) return;

    scores.push(score);
    scoreInput.value = "";

    updateStats();
    updateHistory();
});
