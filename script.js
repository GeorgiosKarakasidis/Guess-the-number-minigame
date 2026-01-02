let generatedNumber = Math.floor(Math.random()*100)+1;
let attempts = 0; 

function game() {
    generatedNumber = Math.floor(Math.random()*100)+1;
    attempts = 0; 
    document.getElementById("guess").value = "";
    document.getElementById("hint").textContent = "";
    document.getElementById("hint").style.color = "";
    document.getElementById("attempts").textContent = "Attempts: 0";
    document.getElementById("secretButton").hidden = true;
    checkGuess();
}

function checkGuess(){

   
    const guessInput= document.getElementById("guess");
    const guess=Number(guessInput.value);
    const hintElement= document.getElementById("hint");
    const triedAttempts = document.getElementById("attempts");
    const hiddenButton= document.getElementById("secretButton");

    if (guess < 1 || guess > 100){
        hintElement.textContent="Please enter a number from 0 to 100";
        return;
    }
   
attempts++;
triedAttempts.textContent= 'Attempts :'+ attempts;

if (guess === generatedNumber){
    hintElement.textContent="Correct the number was:" +guess;
    hintElement.style.color="green";
    hiddenButton.hidden = false;
} else if (guess < generatedNumber){
    hintElement.textContent="Too low! Try again!";
    hintElement.style.color="red";
} else if (guess > generatedNumber){
    hintElement.textContent="Too high! Try again";
    hintElement.style.color="red";
}
guessinput="";
}