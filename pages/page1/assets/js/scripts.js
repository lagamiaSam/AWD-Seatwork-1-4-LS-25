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