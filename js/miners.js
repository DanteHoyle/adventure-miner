const FRAMETIME = 16.7; // 1/60th of second in miliseconds

// This stores the state of the game
game_state = {
    gold: 0,
    goldPerSecond: 0,
    goldPerClick: 1,
}

man = {
    owned: 0,
    goldPerSecond: .5,
    cost: 25,
    upgradeMultipliar: 1.2
}

dude = {
    owned: 0,
    goldPerSecond: 5,
    cost: 200,
    upgradeMultipliar: 1.2
}

gentleman = {
    owned: 0,
    goldPerSecond: 25,
    cost: 500,
    upgradeMultipliar: 1.2
}

function updateControlPanel() {
    // Gets the elements by IDs
    goldText = document.getElementById("gold-count");
    gpsText = document.getElementById("gps-count");

    goldText.innerHTML = Math.floor(game_state.gold);
    gpsText.innerHTML = game_state.goldPerSecond;
}

function update() {
    game_state.goldPerSecond = (man.owned * man.goldPerSecond);
    game_state.goldPerSecond += (dude.owned * dude.goldPerSecond);
    game_state.goldPerSecond += (gentleman.owned * gentleman.goldPerSecond)

    game_state.gold += game_state.goldPerSecond * FRAMETIME * .001;
    updateControlPanel();
}

function userClickMine() {
    game_state.gold += game_state.goldPerClick;
}


// Awful terrible way to do this, but it works for now
function purchase_man() {
    // If user can afford
    if (man.cost <= game_state.gold) {
        man.owned += 1 // Adds miner
        game_state.gold -= man.cost // removes gold
        man.cost = Math.floor(man.cost * man.upgradeMultipliar);

        cost_text = document.getElementById("man_cost");
        owned_text = document.getElementById("man_owned");
        cost_text.innerHTML = man.cost + "g";
        owned_text.innerHTML = man.owned;
    }
}

function purchase_dude() {
    if (dude.cost <= game_state.gold) {
        dude.owned += 1 // Adds miner
        game_state.gold -= dude.cost // removes gold
        dude.cost = Math.floor(dude.cost * dude.upgradeMultipliar);

        cost_text = document.getElementById("dude_cost");
        owned_text = document.getElementById("dude_owned");
        cost_text.innerHTML = dude.cost + "g";
        owned_text.innerHTML = dude.owned;
    }
}

function purchase_gentleman() {
    if (gentleman.cost <= game_state.gold) {
        gentleman.owned += 1 // Adds miner
        game_state.gold -= gentleman.cost // removes gold
        gentleman.cost = Math.floor(gentleman.cost * gentleman.upgradeMultipliar);

        cost_text = document.getElementById("gentleman_cost");
        owned_text = document.getElementById("gentleman_owned");
        cost_text.innerHTML = gentleman.cost + "g";
        owned_text.innerHTML = gentleman.owned;
    }
}

// Makes the loop happen
setInterval(()=>{update()}, FRAMETIME)



