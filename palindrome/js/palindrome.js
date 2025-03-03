"use strict";

document.getElementById('reverseButton').addEventListener('click', function() {
    let inputField = document.getElementById('id-mot-saisi'); // récupère l'élément du champ avec l'id-mot-saisi
    let text = inputField.value.trim().toLowerCase(); // Suppression des espaces et conversion en minuscules

    if (text === "") { // vérifie si le champ est vide après suppression des espaces 
        document.getElementById('resultat').textContent = "Veuillez entrer un texte !";
        return;
    }

    let reversedText = text.split('').reverse().join(''); // inverse le texte en converissant en tableau, puis reconvertit en chaîne de caractères

    document.getElementById('resultat').textContent = "Mot inversé : " + reversedText;     // Afficher le mot inversé


    if (text === reversedText) {     // Vérifier si le texte d'origine est un palindrome
        document.getElementById('resultat').textContent += " C'est un palindrome !";
    } else {
        document.getElementById('resultat').textContent += " Ce n'est pas un palindrome.";
    }
});
