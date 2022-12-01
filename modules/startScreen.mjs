export function startScreen() {
  let start = document.getElementById("startScreen");
  let startBtn = document.getElementById("startBtn");
  let gameCanvas = document.getElementById("game");

  // start.style.display = "block";
  gameCanvas.style.display = "none";
  // gameOver.style.display = "none";

  startBtn.addEventListener("click", () => {
    console.log("start");
    start.style.display = "none";
    gameCanvas.style.display = "block";
  });
}
