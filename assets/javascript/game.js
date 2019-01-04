
        //array of words
        var wordList= [
        "Albertosaurus",
        "Allosaurus",
        "Baryonyx",
        "Carnotaurus",
        "Coelophysis",
        "Compsognathus",
        "Deinonychus",
        "Giganotosaurus",
        "Megalosaurus",
        "Ornithomimus",
        "Oviraptor",
        "Saurophaganax",
        "Spinosaurus",
        "Tyrannosaurus",
        "Tyrannotitan",
        "Velociraptor",
        "Yangchuanosaurus",
        "Apatosaurus",
        "Brachiosaurus",
        "Diplodocus",
        "Giraffatitan",
        "Jobaria",
        "Macrurosaurus",
        "Mamenchisaurus",
        "Seismosaurus",
        "Zigongosaurus",
        "Ankylosaurus",
        "Pachycephalosaurus",
        "Minmi",
        "Euoplocephalus",
        "Psittacosaurus",
        "Styracosaurus",
        "Triceratops",
        "Corythosaurus",
        "Lesothosaurus",
        "Iguanodon",
        "Parasaurolophus",
        "Stegoceras", 
        ]    
    var lives = 10;
    var wordChosen;
    var picked;
    var total = 0;
    var letterSelected = [];
    var pickedList = [];
    var underscoreArray= [];
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];

    // pick a word from the array
    wordChosen = wordList[Math.floor(Math.random() 
        * wordList.length)];
    // change wordChosen into an array
    var wordArray=wordChosen.split('')
    console.log(wordArray)
    // create underscores on the screen for all the letters not yet guessed
    var underscoresArray = wordChosen.replace(/.{1}/g, "_ ");
    console.log(underscoresArray)

    // create buttons on the screen with the letters
    for(var i = 0; i<alphabet.length; i++){
        var letterBtn=document.createElement("BUTTON");
        document.getElementsByClassName("jumbotron");
        document.querySelector(".jumbotron").appendChild(letterBtn);
        letterBtn.classList.add("data-letter","btn", "btn-info");
        letterBtn.innerHTML= alphabet[i];
        console.log(letterBtn);
        
    }

    

    //look for if the letters pushed were in the chosen word
        // if the letters pushed were in wordChosen then 
        while(i<wordArray.length){
            if(letterBtn===wordArray[i]){
                wordArray.splice(//at the position where they are the same?
                )

            }     
            
        }
        
        // add them to the empty underscores


    // make a line that says you have how many guesses left
    var display = function (){
        lead2.innerHTML = "You have " + lives + " lives left.";
        if (lives < 1) {
            lead2.innerHTML = "Game Over! The Dinosaur name was " 
            + wordChosen + ".";
        }
        for (var i = 0; i < wordChosen.length; i++) {
            if (underscoreArray===wordArray) {
                lead2.innerHTML = "You Win!";
            }
        }

    }



























    // for(var i = 0;i<randomDino.length;i++){
    // }

    // function underscores(){
    //     randomDino.replace( "_");
    //     console.log(randomDino)
    // }
    // underscores()
        

        
    //     if(guessString === randomDino[i]){
    //         console.log(randomDino.replace(guessString,randomDino.indexOf(guess)));
    //         remainingLetters --;
    //     }else{
    //         //add wrong guess to 
    //         var theDiv = document.getElementById("form-group").innerHTML;
    //         guessString = document.createTextNode(guessString);
    //         theDiv.appendChild(guessString);
    //         guessesLeft--;
    //     }
