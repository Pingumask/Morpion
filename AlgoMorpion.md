
```Algorithme Jeu de Morpion
Variables   plateau : [][]
            caseVisee : []
            joueur ← "X" , gagnant: chaine de caracteres
            partieEnCours ← Vrai : Booléen
Début
    Faire
        Lire(caseVisee)
        plateau[caseVisee[0]][caseVisee[1]] ← joueur
        Si joueur == "X" Alors
            Alors
                joueur ← "O"
            Sinon
                joueur ← "X"
        fSi        
        Si Victoire() OU PlateauPlein()
            Alors
                partieEnCours ← faux
        fSi
    TantQue partieEnCours
    Afficher(gagnant)
Fin


Fonction PlateauPlein() : Booléen
Variables x, y : entiers
Debut
    Pour y ← 0 à y < 3
        Pour x ← 0 à x < 3
            Si tableau[x][y] != "O" ET tableau[x][y] != "X"
                gagnant ← "Match nul"
                Alors Retourner faux
            fSi
        fPour
    fPour
    Retourner vrai
Fin


Fonction Victoire() : Booléen
Debut
    //Vérification des lignes
    Pour ligne ← 0 à ligne < 2
        Si plateau[ligne][0] == plateau[ligne][1] ET plateau[ligne][1] == plateau[ligne][2] Alors
            gagnant ← plateau[ligne][0] & "remporte la partie"
            Retourner vrai
        fSi
    fPour
    //Vérification des colonnes
    Pour colonne ← 0 à colonne < 2
        Si plateau[0][colonne] == plateau[1][colonne] ET plateau[1][colonne] == plateau[2][colonne] Alors
            gagnant ← plateau[0][colonne] & "remporte la partie"
            Retourner vrai
        fSi
    fPour
    //Vérification diagonale descendente
    Si plateau[0][0] == plateau[1][1] ET plateau[1][1] == plateau[2][2] Alors
        gagnant ← plateau[1][1] & "remporte la partie"
        Retourner vrai
    fSi
    //Vérification diagonale montante
    Si plateau[2][0] == plateau[1][1] ET plateau[1][1] == plateau[0][2] Alors
        gagnant ← plateau[1][1] & "remporte la partie"
        Retourner vrai
    fSi
    Retourner faux
Fin```