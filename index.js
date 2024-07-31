function createJoke(setup, punchline) {
  const parent = document.getElementById("container");
  parent.innerHTML = "";
  const para = document.createElement("h4");
  para.innerHTML = setup;
  const para2 = document.createElement("h4");
  para2.innerHTML = punchline;
  parent.appendChild(para);
  parent.appendChild(para2);
}

function getJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((res) => res.json())
    .then((res) => createJoke(res.setup, res.punchline));
}

setInterval(getJoke, 15000);
