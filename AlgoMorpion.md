```Algorithme Jeu de Morpion
Variables   plateau : [][]
            caseVisee : []
            joueur ← "X" , gagnant: chaine de caracteres
Début
    Faire
        Lire(caseVisee)
        Si plateau[caseVisee[0]][caseVisee[1]] == "" Alors
            plateau[caseVisee[0]][caseVisee[1]] ← joueur
            Si joueur == "X" Alors
                Alors
                    joueur ← "O"
                Sinon
                    joueur ← "X"
            fSi        
            Victoire()
            Si gagnant == "" Alors
                gagnant ← PlateauPlein()
            fSi
        fSi
    TantQue gagnant == ""
    Afficher(gagnant)
Fin

Fonction PlateauPlein() : Booléen
Variables x, y : entiers
Debut
    Pour y ← 0 à y < 3
        Pour x ← 0 à x < 3
            Si tableau[x][y] != "O" ET tableau[x][y] != "X" Alors 
                Retourner ""
            fSi
        fPour
    fPour
    Retourner Retourner "Match nul"
Fin

Fonction Victoire() : Booléen
Debut
    //Vérification des lignes
    Pour ligne ← 0 à ligne < 3
        Si plateau[ligne][0] == plateau[ligne][1] ET plateau[ligne][1] == plateau[ligne][2] Alors
            Retourner plateau[ligne][0] , "remporte la partie"
        fSi
    fPour
    //Vérification des colonnes
    Pour colonne ← 0 à colonne < 3
        Si plateau[0][colonne] == plateau[1][colonne] ET plateau[1][colonne] == plateau[2][colonne] Alors            
            Retourner plateau[0][colonne] , "remporte la partie"
        fSi
    fPour
    //Vérification diagonale descendente
    Si plateau[0][0] == plateau[1][1] ET plateau[1][1] == plateau[2][2] Alors
        Retourner plateau[1][1] , "remporte la partie"
    fSi
    //Vérification diagonale montante
    Si plateau[2][0] == plateau[1][1] ET plateau[1][1] == plateau[0][2] Alors
        Retourner plateau[1][1] , "remporte la partie"
    fSi
    Retourner faux
Fin```