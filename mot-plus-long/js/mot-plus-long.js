document.addEventListener("DOMContentLoaded", function () {
    let citationElement = document.getElementById("citation"); // récupère l'élement html qui contient la citation
    let citationText = citationElement.textContent; // récupère le texte de cet élément

    function replaceText(text) { // fonction qui remplace tous les caractères qui n'ont pas des lettres ou des apostrophes
        return text.replace(/[^a-zA-ZÀ-ÿ'-]/g, " ");
    }

    let cleanedText = replaceText(citationText); // Supprime les caractères indésirables
    let words = cleanedText.split(/\s+/);  // Sépare le texte en un tableau de mots en utilisant les espaces comme séparateurs
    let longestWord = ""; // Variable pour stocker le mot le plus long

    for (let word of words) { // Création d'un tableau 
        if (word.length > longestWord.length) { // Si le mot actuel est plus long que le mot enregistré, on le remplace 
            longestWord = word;
        }
    }

    document.getElementById("motPlusLong").innerHTML = "Le mot le plus long de la phrase est <strong>" + longestWord + "</strong> avec une longueur de " + longestWord.length + " caractères";
    
    console.log(longestWord); 

    function getLongestWord(text) {
        let cleanedText = replaceText(text); // Nettoie la phrase
        let words = cleanedText.split(/\s+/);  // Sépare en mots
        let longestWord = ""; // Initialiser une variable pour le mot le plus long

        for (let word of words) {
            if (word.length > longestWord.length) {
                longestWord = word; // Remplace si le mot actuel est plus long
            }
        }
        return longestWord; // Retourne le mot le plus long
    }

    document.getElementById("btnVenoth").addEventListener("click", function () {
        let userInput = document.getElementById("userInput").value; // Récupère la valeur de l'utilisateur
        if (userInput.trim() === "") { // Vérification si c'est vide
            alert("Veuillez entrer une phrase !");
        } else {
            let longestWord = getLongestWord(userInput); // Obtient le mot le plus long de la saisie
            alert("Mot le plus long : " + longestWord + " avec une longueur de " + longestWord.length + " caractères.");
        }
    });
});
