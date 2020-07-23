$(document).ready(function(){
    var wordPool = ["apple", "bat", "door", "eggplant", "fork", "gate", "house", "ice", "jar", "kite", "lamp", "moon", "notebook", "orange", "pencil", "quilt", "robot", "socks", "tree", "umbrella", "vase", "window", "xylophone", "yellow", "zipper"]
    var playerKey = "";
    var keyPressed = "";
    var lives = 3;
    var score = 0;
    var totalGuess= "";
    var currentWord = wordPool[Math.floor(Math.random()*wordPool.length)];
    var distance = 20;
    var increment = 0.1;
    var intervalTime = 10
    // to detect a keypress
    //Shows the currentword
    var timer = setInterval(myTimer,intervalTime );
        function myTimer() {
        distance= distance + increment;
        document.getElementsByClassName("enemy")[0].style.setProperty("top", distance + "px");
        if(distance>=350){
            clearInterval(timer)
            lives--;
            distance = 0;
            document.getElementsByClassName("enemy")[0].style.setProperty("top", 0);
            timer = setInterval(myTimer, intervalTime);
            //displays life
            document.getElementById("life").innerHTML = "lives: " + lives;
            currentWord = wordPool[Math.floor(Math.random()*wordPool.length)];
            setTimeout(() => { totalGuess = ""; document.getElementById("word").innerHTML = "Your Guess: " + totalGuess;}, 100);
            document.getElementById("neededWord").innerHTML = currentWord;
            if(lives==0){
                Redirect();
            }
        }
        function Redirect() {
            window.location = "homepage.html";
         }
    }

    
    //displays correct user input to the screen
    document.getElementById("word").innerHTML = "Your Guess: " + totalGuess; 
    //shows the computer generated 
    document.getElementById("neededWord").innerHTML = currentWord;
    //displays score
    document.getElementById("score").innerHTML = "score: " + score;
    //displays life
    document.getElementById("life").innerHTML = "lives: " + lives;
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
                //setTimeout pauses for a little bit so user can see full word resets user guess
                setTimeout(() => { totalGuess = ""; document.getElementById("word").innerHTML = "Your Guess: " + totalGuess;}, 100);
                //picks a new word
                currentWord = wordPool[Math.floor(Math.random()*wordPool.length)]; 
                //adds to score
                score++;
                document.getElementsByClassName("enemy")[0].style.setProperty("top", 0);
                distance = 0;
                increment=increment*1.2;
        }
            }
    
        
                //displays correct user input to the screen
                document.getElementById("word").innerHTML = "Your Guess: " + totalGuess; 
                //shows the computer generated 
                document.getElementById("neededWord").innerHTML = currentWord;
                //displays score
                document.getElementById("score").innerHTML = "score: " + score;
                //displays life
                document.getElementById("life").innerHTML = "lives: " + lives;    
    },false)
    });

