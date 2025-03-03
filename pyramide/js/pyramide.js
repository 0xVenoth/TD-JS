"use strict";

function construirePyramide() {
    let inputField = document.getElementById("ligne-pyramide"); 
    let lignes = parseInt(inputField.value.trim()); // Convertir l'entrée en nombre

    if (isNaN(lignes) || lignes <= 0) { // Vérifie si l'entrée est un nombre valide et supérieur à 0
        document.getElementById("pyramide").textContent = "Veuillez entrer un nombre valide.";
        return;
    }

    let pyramide = "";  // Création d'une chaîne qui contiendra la ligne

    for (let i = 1; i <= lignes; i++) {
        let espace = " ".repeat(lignes - i); // Espaces pour centrer la pyramide
        let etoiles = "*".repeat(2 * i - 1); // Génération d'étoiles
        pyramide += espace + etoiles + "\n"; // Ajout à la pyramide avec saut de ligne
    }

    document.getElementById("pyramide").innerHTML = pyramide.replace(/\n/g, "<br>");     // Affichage sous forme lisible dans la page (remplace les sauts de ligne par des balises <br>)

}