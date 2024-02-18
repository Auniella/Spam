let btn_start = document.getElementById("start");
let btn_stop = document.getElementById("stop");
let btn_retour = document.getElementById("btn_retour");
let uploadTime;
let timeContainer = document.getElementById("timeContainer");

btn_start.onclick = function () {
  function affichage() {
    let time = document.createElement("p");
    timeContainer.appendChild(time);

    time.innerText = "Tu ne parles pas anglais ? OK.";
  }
  uploadTime = setInterval(affichage, 100);

  btn_start.disabled = true;
  btn_retour.disabled = true;
};

btn_stop.onclick = function () {
  clearInterval(uploadTime);

  btn_start.disabled = false;
  btn_retour.disabled = false;
};
