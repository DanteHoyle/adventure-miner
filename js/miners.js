const FRAMETIME = 16.7; // 1/60th of second in miliseconds

// This stores the state of the game
game_state = {
    gold: 0,
    goldPerSecond: .5,
    goldPerClick: 1
}

function updateControlPanel() {
    // Gets the elements by IDs
    goldText = document.getElementById("gold-count");
    gpsText = document.getElementById("gps-count");

    goldText.innerHTML = Math.floor(game_state.gold);
    gpsText.innerHTML = game_state.goldPerSecond;
}

function update() {
    game_state.gold += game_state.goldPerSecond * FRAMETIME * .001/*Constant to make it decimal*/;
    
    updateControlPanel();
}

function userClickMine() {
    game_state.gold += game_state.goldPerClick;
}

// Makes the loop happen
setInterval(()=>{update()}, FRAMETIME)



