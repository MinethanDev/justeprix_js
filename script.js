function genererNombreAleatoire() { // G
    return Math.floor(Math.random() * 100) + 1;
}

window.onload = function () {

    var nombreAleatoire = genererNombreAleatoire();

    window.nombreSecret = nombreAleatoire;

    document.getElementById("essai_numero").innerText = "Premier essai";
};

var nombreEssais = 2;


function envoyer_estimation() {

    if (document.getElementById("resultat").innerText.includes("Bravo")) { // Empêche de nouveau essais si la partie a été gagnée
        return;
    }

    var estimationUtilisateur = parseInt(document.getElementById("estimation_joueur").value);

    if (estimationUtilisateur === window.nombreSecret) {
        document.getElementById("resultat").innerText = "Bravo ! Le nombre était bien " + window.nombreSecret;
        document.getElementById("refresh_btn").style.display = "inline-block";
    } else if (estimationUtilisateur < window.nombreSecret) {
        document.getElementById("resultat").innerText = "C'est plus";
    } else {
        document.getElementById("resultat").innerText = "C'est moins";
    }

    document.getElementById("essai_numero").innerText = "Essai n°" + nombreEssais;

    nombreEssais++;
}

function refresh() { // Bouton pour refresh la page
    location.reload();
}