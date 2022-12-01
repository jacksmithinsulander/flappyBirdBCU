// import { createEnemy } from "./modules/enemySpawner.mjs";
// import { startScreen } from "./modules/startScreen.mjs";
// import { gameOver } from "./modules/endgame.mjs";

let hero = document.getElementById("hero");
let game = document.getElementById("game");

let top = 50;
let bottom = 0;
let left = 50;

var jumping = 0;
var counter = 0;
function gamePage() {
  setInterval(function () {
    var heroTop = parseInt(
      window.getComputedStyle(hero).getPropertyValue("top")
    );
    hero.style.top = heroTop + 3 + "px";
  }, 10);

  document.addEventListener("keydown", (e) => {
    console.log("e", e.key);
    if (e.repeat) {
      return;
    } else if (e.key == "w") {
      jump();
    }
  });

  function jump() {
    jumping = 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function () {
      var heroTop = parseInt(
        window.getComputedStyle(hero).getPropertyValue("top")
      );
      if (heroTop > 6 && jumpCount < 15) {
        hero.style.top = heroTop - 8 + "px";
      }
      if (jumpCount > 20) {
        clearInterval(jumpInterval);
        jumping = 0;
        jumpCount = 0;
      }
      jumpCount++;
    }, 10);
  }
  createEnemy();
}
function startScreen() {
  let start = document.getElementById("startScreen");
  let startBtn = document.getElementById("startBtn");
  let game = document.getElementById("game");
  //   let gameCanvas = document.getElementById("game");

  start.style.display = "flex";
  game.style.display = "none";
  gameOverScreenBody.style.display = "none";

  startBtn.addEventListener("click", () => {
    console.log("click");
    start.style.display = "none";
    game.style.display = "block";
    // gameCanvas.style.display = "";
    gamePage();
  });
}

function gameOver() {
  gameOverScreenBody.style.display = "block";
  // sätter ut text
  gameOverText.innerText = "GAME OVER";
  pressXToTryAgain.innerText = "Press X to try again";
  quitGameBtn.innerText = "Quit"; // måste knappen skapas i js ist?
  quitGameBtn.addEventListener("click", () => {
    startScreen();
  });
  pressXToTryAgain.addEventListener("click", () => {
    startScreen();
  });
}
// has context menu
function createEnemy() {
  enemyId++;
  let enemy = document.createElement("div");
  enemy.classList = "enemy";
  let enemyUnder = document.createElement("div");
  enemyUnder.classList = "enemyUnder";
  let enemyLeft = 600;
  let enemyBottom = Math.round(Math.round(Math.random() * 300) / 10) * 10;
  //console.log(enemyBottom);
  // Math.round(Math.floor(Math.random() * (500 - 1)/10)*10)
  //console.log("random enemy bottom is", enemyBottom)

  enemy.style.left = enemyLeft + "px";
  enemy.style.height = enemyBottom + "px";
  enemy.id = enemyId;

  enemyUnder.style.left = enemyLeft + "px";
  enemyUnder.style.height = 420 - enemyBottom + "px";
  enemyUnder.id = "enemyUnder id is" + enemyId;

  //console.log("Height is", enemy.style.height)

  let move = setInterval(() => {
    enemyLeft -= 30;
    enemy.style.left = enemyLeft + "px";
    enemyUnder.style.left = enemyLeft + "px";

    if (
      enemyBottom > bottom &&
      enemyBottom < bottom + 150 &&
      enemyLeft === left
    ) {
      console.log("HIT");
      gameOver();
      let dead = setInterval(() => {
        hero.style.backgroundColor = "red";

        let resurect = setInterval(() => {
          hero.style.backgroundColor = "purple";
          clearInterval(dead);
        }, 100);
      }, 100);
    }

    if (enemyLeft <= 0) {
      clearInterval(move);
      enemy.remove();
      enemyUnder.remove();
      createEnemy();
    }
  }, 50);

  game.appendChild(enemy);
  game.appendChild(enemyUnder);
}
startScreen();
