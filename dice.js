//Generates two random dice values, updates dice images, and displays the winner.
function randomValue1() {
  const imgs = document.querySelectorAll(".img");
  
  let N1 = Math.floor(Math.random() * 6) + 1;
  let N2 = Math.floor(Math.random() * 6) + 1;

  imgs[0].setAttribute("src", `./assets/dice-six-faces-${getDiceName(N1)}.png`);
  imgs[1].setAttribute("src", `./assets/dice-six-faces-${getDiceName(N2)}.png`);

  if(N1 > N2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
  }
    else if(N1 < N2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
    } else {
        document.querySelector("h1").innerHTML = "It's a Draw!";
    }
    
}

// Returns the string name for a dice face value (1-6).
function getDiceName(n) {
  const names = ["one", "two", "three", "four", "five", "six"];
  return names[n - 1];
}

// Plays the dice roll sound effect.
function playSound() {
    var audio = document.getElementById('audio');
    audio.play();
}


 // Disables the button temporarily to prevent rapid clicks.
function handleClick(button) {
    button.disabled = true;
    setTimeout(() => {
        button.disabled = false;
    }, 1400); 
}