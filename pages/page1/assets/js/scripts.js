let players = [];

document.addEventListener("DOMContentLoaded", loadPlayers);

function addPlayer() {
    let name = document.getElementById("playerName").value.trim();
    let score = parseInt(document.getElementById("playerScore").value);
    let level = parseInt(document.getElementById("playerLevel").value);

    if (name && !isNaN(score) && !isNaN(level)) {
        let player = { name, score, level };
        players.push(player);

        savePlayers();
        updatePlayerList();

        document.getElementById("playerName").value = "";
        document.getElementById("playerScore").value = "";
        document.getElementById("playerLevel").value = "";
    } else {
        alert("Please enter valid values for name, score, and level.");
    }
}

function updatePlayerList() {
    let playerList = document.getElementById("playerList");
    playerList.innerHTML = "";

    players.forEach((player, index) => {
        let playerDiv = document.createElement("div");
        playerDiv.classList.add("player-item");
        playerDiv.innerHTML = `
            <strong>Name:</strong> ${player.name} | 
            <strong>Score:</strong> ${player.score} | 
            <strong>Level:</strong> ${player.level} 
            <button onclick="deletePlayer(${index})">Delete</button>`;
        playerList.appendChild(playerDiv);
    });
}

function savePlayers() {
    localStorage.setItem("players", JSON.stringify(players));
}

function loadPlayers() {
    let storedPlayers = localStorage.getItem("players");
    if (storedPlayers) {
        players = JSON.parse(storedPlayers);
        updatePlayerList();
    }
}

function sortByName() {
    players.sort((a, b) => a.name.localeCompare(b.name));
    updateDisplay();
}

function sortByScore() {
    players.sort((a, b) => b.score - a.score); 
    updateDisplay();
}

function sortByLevel() {
    players.sort((a, b) => b.level - a.level);
    updateDisplay();
}

function sortByFirstLetter() {
    players.sort((a, b) => a.name.charAt(0).localeCompare(b.name.charAt(0)));
    updateDisplay();
}

function sortPlayers() {
    let criteria = document.getElementById("sortCriteria").value;

    switch (criteria) {
        case "name":
            sortByName();
            break;
        case "score":
            sortByScore();
            break;
        case "level":
            sortByLevel();
            break;
        case "firstLetter":
            sortByFirstLetter();
            break;
    }
}

function updateDisplay() {
    updatePlayerList();
    savePlayers();
}

function deletePlayer(index) {
    players.splice(index, 1);
    updateDisplay(); 
}
