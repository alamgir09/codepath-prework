//clean fresh code down below!

// global constants
var clueHoldTime = 1000; // how long to hold each clue's light/sound
const cluePauseTime = 333; // how to long to pause inbetween clues
const nextClueWaitTime = 1000; // how long to wait beforee starting playback of the clue sequence

//Global Variables
var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
var progress = 0;
var gamePlaying = false;
var guessCounter = 0;

// sound variables
var tonePlaying = false;
var volume = 0.5; // must be between 0.0 and 1.0

function startGame() {
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  clueHoldTime = 1000;
  newPattern();
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  //initialize game variables
  gamePlaying = false;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}
/*
function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; // set initial delay to wait time
  for (let i=0;i<=progress;i++){ // for each clue that is revealed
    console.log("play single clue: " + pattern[i] + "in" + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a time out to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}*/

function newPattern() {
  for (let i = 0; i <= progress;i++){
    pattern[i] = getRandomIntInclusive(1,4);
  }
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; // set initial delay to wait time
  for (let i=0;i<=progress;i++){ // for each clue that is revealed
    console.log("play single clue: " + pattern[i] + "in" + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a time out to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost!");
}

function winGame() {
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  //is the guess correct? No, then lose game
  
  if (btn == pattern[guessCounter]){
    if (guessCounter == progress){
      if (progress == pattern.length-1){
        winGame();
      }else{
        progress++;
        clueHoldTime = clueHoldTime*0.85; // speeds up clue sequence after every new clue is played
        playClueSequence();
      }
    }else{
      guessCounter++;
    }
  }else{
    loseGame();
  }
}









// Sound Synthesis Functions
const freqMap = {
  1: 161.6,
  2: 229.6,
  3: 192,
  4: 366.2,
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
