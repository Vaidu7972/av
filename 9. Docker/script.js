const cells =
document.querySelectorAll(".cell");

const statusText =
document.getElementById("status");

let currentPlayer = "X";

let gameActive = true;



cells.forEach(cell => {

    cell.addEventListener(
        "click",
        cellClick
    );

});



function cellClick(){

    if(
        this.innerHTML !== ""
        || !gameActive
    ){

        return;

    }

    this.innerHTML =
    currentPlayer;


    currentPlayer =
    currentPlayer === "X"
    ? "O"
    : "X";


    statusText.innerHTML =
    "Player " +
    currentPlayer +
    " Turn";

}



function restartGame(){

    cells.forEach(cell => {

        cell.innerHTML = "";

    });

    currentPlayer = "X";

    statusText.innerHTML =
    "Player X Turn";

}