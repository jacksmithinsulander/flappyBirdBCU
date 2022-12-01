let bottom = 0;
let left = 50;
let enemyId = 0;

export function createEnemy() {
    enemyId++
    let enemy = document.createElement("div");
    enemy.classList = "enemy";
    let enemyUnder = document.createElement("div");
    enemyUnder.classList = "enemyUnder";
    let enemyLeft = 600;
    let enemyBottom = Math.round(Math.round(Math.random() * 300)/10)*10;
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

        if (enemyBottom > bottom && enemyBottom < bottom + 150 && enemyLeft === left) {
            console.log("HIT");

            let dead = setInterval(() => {
                hero.style.backgroundColor = "red";

                let resurect = setInterval(() => {
                    hero.style.backgroundColor = "purple"
                    clearInterval(dead)
                }, 100)

            }, 100)
            
        
        }

        if (enemyLeft <= 0) {
            clearInterval(move);
            enemy.remove();
	enemyUnder.remove();
            createEnemy();
        }

    }, 50)

    game.appendChild(enemy);
	game.appendChild(enemyUnder); 
}