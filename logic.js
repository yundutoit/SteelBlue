$(document).ready(function(){
    var wordPool = ["apple", "bat", "door", "eggplant", "fork", "gate", "house", "ice", "jar", "kite", "lamp", "moon", "notebook", "orange", "pencil", "quilt", "robot", "socks", "tree", "umbrella", "vase", "window", "xylophone", "yellow", "zipper"]
    var playerKey = "";
    var keyPressed = "";
    var lives = 3;
    var score = 0;
    //Place holder untill user starts typing
    var totalGuess= "";
    //generates a random word from wordPool
    var currentWord = wordPool[Math.floor(Math.random()*wordPool.length)];
    //distance movese the position of enemy
    var distance = 0;
    //how much we increase the speed by
    var increment = .1
    //how often in milliseconds we use the timer
    var intervalTime = 5;
    


    //Declaring a timmer that activates every 5 milliseconds 
    var timer = setInterval(myTimer,intervalTime );
        //myTimmer runs every 5 milliseconds
        function myTimer() {
        //increases the distance by increment
        distance= distance + increment;
        //changes the position of the enemy (includes text) when the new distance is the top
        document.getElementsByClassName("enemy")[0].style.setProperty("top", distance + "px");
        //when the distance is high enough to push enemy to bottom of the map 
        if(distance>=350){
            //stop the current timer
            clearInterval(timer)
            //take away a life
            lives--;
            //reset distance
            distance = 0;
            //move enemy back to the top
            document.getElementsByClassName("enemy")[0].style.setProperty("top", 0);
            //reset the timer
            timer = setInterval(myTimer, intervalTime);
            //displays lives
            document.getElementById("life").innerHTML = "lives: " + lives;
            //resets current word
            currentWord = wordPool[Math.floor(Math.random()*wordPool.length)];
            //Pauses then clears totalGuess
            setTimeout(() => { totalGuess = ""; document.getElementById("word").innerHTML = "Your Guess: " + totalGuess;}, 100);
            //Updates the displayed Guess on the screen
            document.getElementById("neededWord").innerHTML = currentWord;
            //When lives = 0
            if(lives==0){
                //send back to homepage
                Redirect();
            }
        }
        
        function Redirect() {
            //Brings user back to the homepage
            window.location = "homepage.html";
         }
    }

    //UPDATES SCREEN
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
                //brings enemy back to top of page
                document.getElementsByClassName("enemy")[0].style.setProperty("top", 0);
                //resets enemy movement var
                distance = 0;
                //increases the rate enemies come
                increment=increment*1.1;
        }
            }
    
        //UPDATES SCREEN
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