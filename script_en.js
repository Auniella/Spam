let btn_start = document.getElementById("start");
let btn_stop = document.getElementById("stop_en");
let uploadTime;
let timeContainer = document.getElementById("timeContainer");
let btn_retour = document.getElementById("btn_retour");

btn_start.onclick = function () {
  function affichage() {
    let time = document.createElement("p");
    timeContainer.appendChild(time);

    time.innerText = "A rose for you 🌹";
  }
  uploadTime = setInterval(affichage, 700);

  btn_start.disabled = true;
  btn_retour.disabled = true;
};

btn_stop.onclick = function () {
  clearInterval(uploadTime);
  alert("Take your bouquet 💐");

  alert("See you soon !");

  btn_start.disabled = false;
  btn_retour.disabled = false;
};
