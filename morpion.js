const GAMECELLS = document.querySelectorAll("td");
const PLAYER = document.querySelector("body");
const GAMEOVER = document.querySelector("#gameOver");
const WINNER = document.querySelector("#winner");
let turnsPlayed=0;

function getCell(x, y){
    return document.querySelector(`[row="${x}"][column="${y}"]`).className;
}

GAMECELLS.forEach( gamecell =>{
    //Ajout d'une gestion d'evenement de type click sur chaque cellule du plateau de jeu
    gamecell.addEventListener("click", () =>{        
        handleTurn(gamecell);//Exécution de la gestion du tour de jeu en lui indicant la case jouée
    });
});

function handleTurn(gamecell){
    if(WINNER.innerHTML) return;//Ne rien faire si la partie est déjà finie
    if(gamecell.className) return;//Ne rien faire si la case n'est pas vide
    gamecell.className=PLAYER.className;//Attribuer la case au joueur en cours
    PLAYER.className == "X" ? PLAYER.className="O" : PLAYER.className="X";//Changer de joueur
    turnsPlayed++;//Incrémenter le compteur de coups joués
    if (turnsPlayed<5) return;//Si moins de 5 coups ont été joués, pas besoin de tester la victoire
    let result = victoryCheck(gamecell);//Execution de la fonction de test des conditions de victoire pour la case jouée
    if (result) GameOver(result);//Affichage de l'ecran de fin de partie
}

function victoryCheck(gamecell){
    //On commence par récupérer les coordonnées de la case jouée pour ne tester que les lignes et colonnes concernées
    let row = gamecell.getAttribute('row');
    let column = gamecell.getAttribute('column');
    if (getCell(row, 0) == getCell(row, 1) && getCell(row, 1) == getCell(row, 2) && getCell(row, 1)) return getCell(row, 1)+" a gagné";//Vérification de la ligne jouée
    if (getCell(0, column) == getCell(1, column) && getCell(1, column) == getCell(2, column) && getCell(1, column)) return getCell(1, column)+" a gagné";//Vérification de la colonne jouée
    if (getCell(0, 0) == getCell(1, 1) && getCell(1, 1) == getCell(2, 2) && getCell(1, 1)) return getCell(1, 1)+" a gagné";//Vérification de la diagonale descendente
    if (getCell(2, 0) == getCell(1, 1) && getCell(1, 1) == getCell(0, 2) && getCell(1, 1)) return getCell(1, 1)+" a gagné";//Vérification de la diagonale ascendente
    if (turnsPlayed===9) return "Match nul";//Vérification du remplissage du plateau
    return "";
}

function GameOver(result){
    WINNER.innerText = result;//Affichage du texte de fin de partie dans le panneau
    GAMEOVER.classList.add("show");//Passage du panneau en mode visible
}

document.querySelector("#gameOver button").addEventListener("click", ()=>{
    GAMECELLS.forEach( gamecell =>{
        gamecell.className="";
    });
    WINNER.innerHTML="";
    GAMEOVER.classList.remove("show");
    turnsPlayed=0;
})