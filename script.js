function genererNombreAleatoire() { // G
    return Math.floor(Math.random() * 100) + 1;
}

window.onload = function () {

    var nombreAleatoire = genererNombreAleatoire();

    window.nombreSecret = nombreAleatoire;

    document.getElementById("essai_numero").innerText = "Premier essai";
};

var nombreEssais = 1;


function envoyer_estimation() {

    if (document.getElementById("resultat").innerText.includes("Bravo")) { // Empêche de nouveau essais si la partie a été gagnée
        return;
    } else {
        var estimationUtilisateur = parseInt(document.getElementById("estimation_joueur").value);

        if (estimationUtilisateur === window.nombreSecret) {
            document.getElementById("resultat").innerText = "Bravo ! Le nombre était bien " + window.nombreSecret + "\n Vous avez trouvé en " + nombreEssais + " essais !";
            document.getElementById("refresh_btn").style.display = "inline-block";
            document.getElementById("proposer_btn").disabled = true;
            document.getElementById("proposer_btn").style.backgroundColor = "#383838";
            document.getElementById("proposer_btn").style.cursor = "not-allowed";
        } else if (estimationUtilisateur < window.nombreSecret) {
            document.getElementById("resultat").innerText = "C'est plus";
            nombreEssais++;
        } else {
            document.getElementById("resultat").innerText = "C'est moins";
            nombreEssais++;
        }
    
        document.getElementById("essai_numero").innerText = "Essai n°" + nombreEssais;
    }
}

function refresh() { // Bouton pour refresh la page
    location.reload();
}