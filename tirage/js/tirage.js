"use strict";

let mangas = ["Naruto", "One Piece", "DBZ", "Bleach", "HxH", "JJK", "Spy x Family", "Sakamoto Days", "JJBA", "HnK", "Boruto"]; // Tableau contenant les noms des mangas

function tirage() {  // Fonction pour effectuer un tirage au sort

    let indexAleatoire = Math.floor(Math.random() * mangas.length);     // Sélection aléatoire d'un manga dans le tableau
    let mangaTire = mangas[indexAleatoire];

    document.getElementById("affichage").textContent = "Manga tiré au sort : " + mangaTire;  // Affichage du résultat dans la page HTML
}