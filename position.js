function forClock() {
  const date = new Date();
  const hours = date.getHours() % 12;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  document.getElementById("shortHand").style.transform =
    `rotate(${hours * 30 + minutes * 0.5}deg)`;
  document.getElementById("longHand").style.transform =
    `rotate(${minutes * 6}deg)`;
  document.getElementById("longestHand").style.transform =
    `rotate(${seconds * 6}deg)`;
}

forClock();
setInterval(forClock, 1000);
