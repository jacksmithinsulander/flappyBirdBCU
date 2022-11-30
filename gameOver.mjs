
        // gameOver anropas när spelaren förlorar

        // skapa en dom-manipulation-frame
        // frame:n ska innehålla en knapp (quit) + eventListener
        // "press x to try again" text <p> + eventListener

        // profit 

// ska dessa kanske hellre sättas i script.js?
const gameOverScreenBody = document.getElementById('gameOverScreenBody');
const gameOverText = document.getElementById('gameOverText');
const pressXToTryAgain = document.getElementById('pressXToTryAgain');
const quitGameBtn = document.getElementById('quitGameBtn');

gameOverScreenBody.style.display = 'none'; //ska visas som default

export function gameOver() {
    gameOverScreenBody.style.display = 'block';
    gameOverScreenBody.innerText = 'Press X to try again';

	let quitGameBtn = document.createElement('button');
    quitGameBtn.innerText = 'Quit';

   // gameOverScreenBody.appendChild(quitGameBtn);


    quitGameBtn.addEventListener('click', () => {
        // funktion för att avsluta spelet
    });

    pressXToTryAgain.addEventListener('click', () => {
        // funktion för att starta om spelet
        // ex. 'startGame();' 
    });
	 
}