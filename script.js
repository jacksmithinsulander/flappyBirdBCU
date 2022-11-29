import { createEnemy } from './modules/enemySpawner.js';

let hero = document.getElementById("hero");
let game = document.getElementById("game");

let bottom = 0;
let left = 50;

document.addEventListener("keyup", (e) => {
    //console.log("e", e.key);

    switch (e.key) {
        case "w":
        case "ArrowUp":
           
            bottom += 20;
            hero.style.bottom = bottom + "px";
        break;

        case "s":
        case "ArrowDown":
            
            bottom -= 20;
            hero.style.bottom = bottom + "px";
        break;

        // TODO: BUGG i hitbox när vi rört oss i sidled

        // case "d":
        // case "ArrowRight":
        //     left += 20;
        //     hero.style.left = left + "px";
        // break;

        // case "a":
        // case "ArrowLeft":
        //     left -= 20;
        //     hero.style.left = left + "px";
        // break;

    }
})

let enemyId = 0;



createEnemy();