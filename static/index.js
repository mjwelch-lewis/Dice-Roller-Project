//calculates a random number between 1 and 6 and updates the html element value
function RollDice() {
    document.getElementById("dice").value = Math.floor(Math.random() * 6) + 1;
}