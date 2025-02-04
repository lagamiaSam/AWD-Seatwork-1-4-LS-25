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