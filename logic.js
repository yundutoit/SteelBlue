
$(document).ready(function(){
var wordPool = ["apple", "bat", "door", "eggplant", "fork", "gate", "house", "ice", "jar", "kite", "lamp", "moon", "notebook", "orange", "pencil", "quilt", "robot", "socks", "tree", "umbrella", "vase", "window", "xylophone", "yellow", "zipper"]
var playerKey = "";
var keyPressed = "";
var lives = 3;
var score = 0;
var totalGuess= "";
var currentWord = wordPool[Math.floor(Math.random()*wordPool.length)];
var distance = 20;
// to detect a keypress
//Shows the currentword

var timer = setInterval(myTimer, 1000);
function myTimer() {
distance= distance + 10;
document.getElementsByClassName("enemy")[0].style.setProperty("top", distance + "px");
}
//Listens for a key press
window.addEventListener("keyup", function(event){

    //makes sure the key pressed is a letter
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        // Converts all key clicks to lowercase letters.
        playerKey = event.key.toLowerCase();
        // if the letter is the correct letter for the correct position of the current word add it to the display
        if (currentWord.indexOf(playerKey)===totalGuess.length){
        totalGuess = totalGuess+ "" +playerKey;
        }
        //Catches to see if there is an extra occurance of the same letter but later in the word
        else if (currentWord.lastIndexOf(playerKey, totalGuess.length)===totalGuess.length){
            totalGuess = totalGuess+ "" +playerKey;
            }
        //sees if user has completed the word
        if(totalGuess === currentWord){
            //resets user guess
            totalGuess = "";
            //picks a new word
            currentWord = wordPool[Math.floor(Math.random()*wordPool.length)]; 
            //adds to score
            score++;
        }

    }
            //displays correct user input to the screen
            document.getElementById("word").innerHTML = totalGuess; 
            //shows the computer generated 
            document.getElementById("neededWord").innerHTML = currentWord;
            //displays score
            document.getElementById("score").innerHTML = score;
},false)
});