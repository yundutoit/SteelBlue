
var wordPool = ["apple", "bat", "door", "eggplant", "fork", "gate", "house", "ice", "jar", "kite", "lamp", "moon", "notebook", "orange", "pencil", "quilt", "robot", "socks", "tree", "umbrella", "vase", "window", "xylophone", "yellow", "zipper"]

currentword = wordPool[Math.floor(Math.random()*wordPool.length)];


console.log(currentword);


console.log(userGuess);
//JQuery to detect a keypress
$(document).keypress(function(event){
    // Check if the key pressed is a letter.
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        // Converts all key clicks to lowercase letters.
        var letterGuessed = event.key.toLowerCase();
        //adds guessed letter to the total guess
        
        }



    //when keycode = 13 the user pressed the enter key
    // if(even.keycode == '13'){
    //         if (userGuess == currentword){
    //             console.log("correct");

    //         }
    //         else{
    //             console.log("wrong");
    //         }
    //     }
    });