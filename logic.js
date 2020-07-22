var wordPool = ["apple", "bat", "door", "eggplant", "fork", "gate", "house", "ice", "jar", "kite", "lamp", "moon", "notebook", "orange", "pencil", "quilt", "robot", "socks", "tree", "umbrella", "vase", "window", "xylophone", "yellow", "zipper"]
var playerKey = "";
var keyPressed = "";
var lives = 3;
var score = 0;
var totalGuess= "";
var currentWord = wordPool[Math.floor(Math.random()*wordPool.length)];
// to detect a keypress
//Shows the currentword

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
        //displays the total guess to the screen
        document.getElementById("word").innerHTML = totalGuess; 
        document.getElementById("neededWord").innerHTML = currentWord;
        document.getElementById("score").innerHTML = score;
    }
},false)

 