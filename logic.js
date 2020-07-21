var wordPool = ["apple", "bat", "door", "eggplant", "fork", "gate", "house", "ice", "jar", "kite", "lamp", "moon", "notebook", "orange", "pencil", "quilt", "robot", "socks", "tree", "umbrella", "vase", "window", "xylophone", "yellow", "zipper"]
var playerKey = "";
var keyPressed = "";
var lives = 3;
var score = 0;
var totalGuess;
var currentWord = wordPool[Math.floor(Math.random()*wordPool.length)];
// console.log(currentWord);
//JQuery to detect a keypress
window.addEventListener("keyup", function(event){
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        // Converts all key clicks to lowercase letters.
        playerKey = event.key.toLowerCase();
        //adds guessed letter to the total guess
		totalGuess = totalGuess+ "" +playerKey;
        }
        document.getElementById("word").innerHTML = totalGuess; 
},false)
