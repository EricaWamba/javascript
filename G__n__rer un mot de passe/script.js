var copyBtn = document.getElementById("copy");

function getPassword() {
  var chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 16;
  var password = "";
  //générer le mot de passe
  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);

    //afficher le mot de passe

    document.getElementById("password").value = password;
    //changer le style du bouton copier
    copyBtn.style.background = "#6c757d";
    copyBtn.style.color = "#fff";
  }
}
//copier le mot de passe
function copyMdp() {
  var inputPassword = document.getElementById("password");
  //vérifier la longueur du mot de passe
  if (inputPassword.value.length == 16) {
    //copie  le mot de passe
    inputPassword.select();
    document.execCommand("copy");

    //changer le style du boutton copier
    copyBtn.style.background = "transparent";
    copyBtn.style.color = "#000";
    //afficher une alert
    alert("Mot de passe copié !");
  } else {
    //sinon
    alert("veuillez générer un Mot de passe");
  }
}
