let players = []

function addPlayer(){
    let name = document.getElementById("playerName").value.trim();
    let score = parseInt(document.getElementById("playerScore").value);
    let level = parseInt(document.getElementById("playerLevel").value);

    if(name && !isNaN(score) && !isNaN(level1)) {
        let player = {name, score, level};
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

    players.forEach(player => {
        let playerDiv = document.createElement("div");
        playerDiv.classList.add("player-item");
        playerDiv.innerHTML = `<strong>Name:</strong> ${player.name} | <strong>Score:</strong> ${player.score} | <strong>Level:</strong> ${player.level}`;
        playerList.appendChild(playerDiv);
    });

}

function savePlayers() {
    localStorage.setItem("players", JSON.stringify(players));
}

function loadPlayers() {
    let storedPlayers = localStorage.getItem("players");
    if (storedPlayers){
        players = JSON.parse(storedPlayers);
        updatePlayerList();
    }
}

function sortByName() {
    players.sort((a, b) => a.name.localeCompare(b.name));
    updateDisplay();
}

function sortByScore() {
    players.sort((a,b) => b.score - a.score);
}

function sortByLevel() {
    players.sort((a, b) => b.level - a.level);
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

function updateDisplay(){
    updatePlayerList();
    savePlayers();
}
}
