
```Algorithme Jeu de Morpion

Variables   plateau : [][]
            caseVisee : []
            joueur ← "X" : caractere
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
Fin```


```Fonction PlateauPlein() : Booléen
Debut
    Pour y ← 0 à y < 3
        Pour x ← 0 à x < 3
            Si tableau[x][y] != "O" ET tableau[x][y] != "X"
                Alors Retourner faux
            fSi
        fPour
    fPour
    Retourner vrai
Fin```


```Fonction Victoire() : Booléen
Debut

Fin```