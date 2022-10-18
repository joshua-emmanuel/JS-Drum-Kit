// Looping through all the drum keys
for (let i = 0; i < document.querySelectorAll("div.key").length; i++) {
  // Adding an v=event listener to execute a function when each key is clicked
  document.querySelectorAll("div.key")[i].addEventListener("click", () => {
    // Assigning all <kbd> tags to a variable called sound
    let sound = document.querySelectorAll("kbd")[i].innerHTML;
    playSound(sound);
    buttonAnimation(sound);
  })

}

// Adding an v=event listener to execute a function when each key is pressed on the keyboard
document.addEventListener("keypress", (event) => {
  playSound(event.key);
  buttonAnimation(event.key);
})

// A function that plays the drum sound deending  on the key pressed or clicked
const playSound = (key) => {
  switch (key) {
    case "A":
      let clapAudio = new Audio("sounds/clap.wav");
      clapAudio.play();
    break;

    case "S":
      let hihatAudio = new Audio("sounds/hihat.wav");
      hihatAudio.play();
    break;

    case "D":
      let kickAudio = new Audio("sounds/kick.wav");
      kickAudio.play();
    break;

    case "F":
      let openhatAudio = new Audio("sounds/openhat.wav");
      openhatAudio.play();
    break;

    case "G":
      let boomAudio = new Audio("sounds/boom.wav");
      boomAudio.play();
    break;

    case "H":
      let rideAudio = new Audio("sounds/ride.wav");
      rideAudio.play();
    break;

    case "J":
      let snareAudio = new Audio("sounds/snare.wav");
      snareAudio.play();
    break;

    case "K":
      let tomAudio = new Audio("sounds/tom.wav");
      tomAudio.play();
    break;

    case "L":
      let tinkAudio = new Audio("sounds/tink.wav");
      tinkAudio.play();
    break;
  }
};

// A function that executes an animation when a key is pressed or clicked
const buttonAnimation = (currentKey) => {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 100);
};