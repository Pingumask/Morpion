const CELLULES = document.querySelectorAll("td");
const PLAYER = document.querySelector("body");
const GAMEOVER = document.querySelector("#gameOver");
const WINNER = document.querySelector("#winner");
let gagnant = "";
let coups=0;

function getCellule(x, y){
    return document.querySelector(`[ligne="${x}"][colonne="${y}"]`).className;
}

function GameOver(){
    WINNER.innerText = gagnant;
    GAMEOVER.classList.add("show");
}

function Victoire(ligne,colonne){
    if (getCellule(ligne, 0) == getCellule(ligne, 1) && getCellule(ligne, 1) == getCellule(ligne, 2) && getCellule(ligne, 1)) return getCellule(ligne, 1)+" a gagné";
    if (getCellule(0, colonne) == getCellule(1, colonne) && getCellule(1, colonne) == getCellule(2, colonne) && getCellule(1, colonne)) return getCellule(1, colonne)+" a gagné";
    if (getCellule(0, 0) == getCellule(1, 1) && getCellule(1, 1) == getCellule(2, 2) && getCellule(1, 1)) return getCellule(1, 1)+" a gagné";
    if (getCellule(2, 0) == getCellule(1, 1) && getCellule(1, 1) == getCellule(0, 2) && getCellule(1, 1)) return getCellule(1, 1)+" a gagné";
    return "";
}

CELLULES.forEach( cellule =>{
    cellule.addEventListener("click", () =>{
        if(gagnant) return;
        if (!cellule.className){
            cellule.className=PLAYER.className;
            PLAYER.className == "X" ? PLAYER.className="O" : PLAYER.className="X";
            coups++;
            if (coups<6) return;
            gagnant = Victoire(cellule.getAttribute('ligne'),cellule.getAttribute('colonne'));
            if (gagnant=="" && coups==9) gagnant="Match nul";            
            if (gagnant) GameOver();   
        }          
          
    });
});

document.querySelector("#gameOver button").addEventListener("click", ()=>{
    CELLULES.forEach( cellule =>{
        cellule.className="";
    });
    gagnant="";
    GAMEOVER.classList.remove("show");
    coups=0;
})