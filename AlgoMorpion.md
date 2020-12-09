```Algorithme Jeu de Morpion
Variables   plateau : [][]
            caseVisee : []
            joueur ← "X" , gagnant: chaine de caracteres
            coups ← 0 : entier
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
            coups ← coups +1
            Si coups>6 Alors
                Victoire(caseVisee[0],[caseVisee[1])
                Si gagnant == "" && coups == 9 Alors
                    gagnant ← "Match Nul"
                fSi
            fSi
        fSi
    TantQue gagnant == ""
    Afficher(gagnant)
Fin

Fonction Victoire(ligne,colonne) : Booléen
Debut
    //Vérification de la ligne jouée
    Si plateau[ligne][0] == plateau[ligne][1] ET plateau[ligne][1] == plateau[ligne][2] ET plateau[ligne][1] != "" Alors
        Retourner plateau[ligne][0] , "remporte la partie"
    fSi
    //Vérification de la colonne jouée
    Si plateau[0][colonne] == plateau[1][colonne] ET plateau[1][colonne] == plateau[2][colonne] ET plateau[1][colonne] != "" Alors            
        Retourner plateau[0][colonne] , "remporte la partie"
    fSi
    //Vérification diagonale descendente
    Si plateau[0][0] == plateau[1][1] ET plateau[1][1] == plateau[2][2] ET plateau[1][1] != "" Alors
        Retourner plateau[1][1] , "remporte la partie"
    fSi
    //Vérification diagonale montante
    Si plateau[2][0] == plateau[1][1] ET plateau[1][1] == plateau[0][2] ET plateau[1][1] != "" Alors
        Retourner plateau[1][1] , "remporte la partie"
    fSi
    Retourner faux
Fin```