

        //array of words
        var wordList = [
            "abelisaurus",
            "achelousaurus",
            "achillobator",
            "acrocanthosaurus",
            "adasaurus",
            "aegyptosaurus",
            "agathaumas",
            "alamosaurus",
            "allosaurus",
            "ammosaurus",
            "amphicoelias",
            "anatosaurus",
            "anchisaurus",
            "apatosaurus",
            "archaeopteryx",
            "argentinosaurus",
            "aublysodon",
            "bambiraptor",
            "barapasaurus",
            "barosaurus",
            "baryonyx",
            "beipiaosaurus",
            "brachiosaurus",
            "brachylophosaurus",
            "bruhathkayosaurus",
            "buitreraptor",
            "byronosaurus",
            "camarasaurus",
            "carcharodontosaurus",
            "carnotaurus",
            "caudipteryx",
            "centrosaurus",
            "ceratosaurus",
            "chasmosaurus",
            "claosaurus",
            "coelophysis",
            "coelurus",
            "compsognathus",
            "corythosaurus",
            "daspletosaurus",
            "deinocheirus",
            "deinonychus",
            "doryaspis",
            "diclonius",
            "dilophosaurus",
            "diplodocus",
            "dromaeosaurus",
            "dromiceiomimus",
            "dryosaurus",
            "ecosystem",
            "edmontosaurus",
            "efraasia",
            "ekrixinatosaurus",
            "elaphrosaurus",
            "elaltitan",
            "einiosaurus",
            "eobrontosaurus",
            "euoplocephalus",
            "europasaurus",
            "gallimimus",
            "gargoyleosaurus",
            "gasosaurus",
            "gastroliths",
            "giganotosaurus",
            "gondwanatitan",
            "gorgosaurus",
            "gryposaurus",
            "gryponyx",
            "hadrosaurids",
            "hadrosaurus",
            "haplocanthosaurus",
            "herrerasaurus",
            "hexinlusaurus",
            "huanghetitan",
            "hylaeosaurus",
            "hypacrosaurus",
            "hypsilophodon",
            "ichthyovenator",
            "iguanodon",
            "indosuchus",
            "incisivosaurus",
            "isanosaurus",
            "isisaurus",
            "jainosaurus",
            "janenschia",
            "jingshanosaurus",
            "jobaria",
            "jubbulpuria",
            "judiceratops",
            "kakuru ",
            "kaatedocus",
            "kaijiangosaurus",
            "kentrosaurus",
            "kotasaurus",
            "kritosaurus",
            "lambeosaurus",
            "leaellynasaura",
            "lesothosaurus",
            "liaoceratops",
            "lusotitan",
            "lycorhinus",
            "lusitanosaurus",
            "maiasaura",
            "mamenchisaurus",
            "marginocephalians",
            "marginocephalians",
            "megalosaurus",
            "microraptor",
            "muttaburrasaurus",
            "noasaurus",
            "nodosaurus",
            "nothronychus",
            "nanotyrannus",
            "nemegtosaurus",
            "neovenator",
            "nipponosaurus",
            "ningyuansaurus",
            "ornithomimids",
            "ornithomimus",
            "ornithopods",
            "ornithopods1",
            "ouranosaurus",
            "oviraptor",
            "ohmdenosaurus",
            "ojoceratops",
            "pachycephalosaurus",
            "pachyrhinosaurus",
            "paralititan",
            "parasaurolophus",
            "parvicursor",
            "pentaceratops",
            "procompsognathus",
            "protoavis",
            "protoceratops",
            "qantassaurus",
            "qianzhousaurus",
            "quaesitosaurus",
            "quilmesaurus ",
            "quetecsaurus ",
            "rajasaurus",
            "rapetosaurus",
            "riojasaurus",
            "rhoetosaurus",
            "rahiolisaurus",
            "raptor",
            "ratchasimasaurus",
            "raptorex",
            "regnosaurus",
            "richardoestesia",
            "rinchenia",
            "rinconsaurus",
            "rubeosaurus",
            "saltasaurus",
            "saltopus",
            "saltriosaurus",
            "sarcosuchus",
            "saturnalia",
            "sauropodomorphas",
            "sauroposeidon",
            "saurornitholestes",
            "saurischian",
            "segnosaurus",
            "seismosaurus",
            "sinornithosaurus",
            "sinosauropteryx",
            "spinosaurus",
            "staurikosaurus",
            "stegosaurus",
            "stenonychosaurus",
            "struthiomimus",
            "styracosaurus",
            "suchomimus",
            "tarbosaurus",
            "tetrapod",
            "thecodontosaurus",
            "therizinosaurus",
            "thyreophora",
            "titanosaurids",
            "torvosaurus",
            "triceratops",
            "troodon",
            "tyrannosaurus",
            "ultrasauros",
            "unaysaurus",
            "utahraptor",
            "unenlagia",
            "unescoceratops",
            "velociraptor",
            "valdosaurus ",
            "velafrons ",
            "venenosaurus ",
            "veterupristisaurus ",
            "vitakridrinda ",
            "vulcanodon",
            "walgettosuchus",
            "wannanosaurus",
            "wulagasaurus",
            "xenoceratops",
            "xenotarsosaurus",
            "xixianykus",
            "xuanhanosaurus",
            "xuanhuaceratops",
            "yangchuanosaurus",
            "yandusaurus",
            "yunnanosaurus",
            "yimenosaurus",
            "yutyrannus",
            "yixianosaurus",
            "yongjinglong",
            "yueosaurus",
            "zalmoxes ",
            "zhuchengtyrannus ",
            "zephyrosaurus ",
            "zuniceratops",
            "zhejiangosaurus",
            "zizhongosaurus",
            "zhuchengceratops",
        ]
        var lives = 10;
        var wordChosen;
        var total = 0;
        var correctSelected = [];
        var underscoreArray = [];
        var imageGet = document.createElement("img");
        var lead2 = document.createElement("p");
        var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
            'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
            't', 'u', 'v', 'w', 'x', 'y', 'z'];
        // ******//this also needs to be in a function called start game?
        // how do I call the functions and where?
        // pick a word from the array
        var wordChosen = wordList[Math.floor(Math.random()
            * wordList.length)];
        // change wordChosen into an array
        var wordArray = wordChosen.split("")
        // create underscores on the screen for all the letters not yet guessed
        var secretWord = document.createElement("p");
        document.getElementsByClassName("jumbotron1");
        document.querySelector(".jumbotron1").appendChild(secretWord);

        // imageGet.src = "./assets/images/Hangman1.png";
        // document.getElementsByClassName("jumbotron1");
        // document.querySelector(".jumbotron1").appendChild(imageGet);
        // imageGet.classList.add("rounded", "mx-auto", "d-block");
        // imageGet.id = "image";

        for (var y = 0; y < wordChosen.length; y++) {
            secretWord.innerHTML = underscoreArray.join("");
            underscoreArray.push(" _ ");
        }
        console.log(underscoreArray.join(""))
        var letterBtn;
        // create buttons on the screen with the letters
        for (var i = 0; i < alphabet.length; i++) {
            letterBtn = document.createElement("BUTTON");
            document.getElementsByClassName("jumbotron1");
            document.querySelector(".jumbotron1").appendChild(letterBtn);
            letterBtn.classList.add("btn", "btn-info");
            letterBtn.setAttribute("data-letter", alphabet[i])
            letterBtn.innerHTML = alphabet[i];
            //look for if the letters pushed were in the chosen word
            // if the letters pushed were in wordChosen then 
            letterBtn.onclick = function continuouslyRun() {
                var datalttr = this.getAttribute("data-letter");
                var indexOfArrayWord;
                if (wordArray.includes(datalttr)) {
                    while (wordArray.includes(datalttr)) {
                        indexOfArrayWord = wordArray.indexOf(datalttr);
                        wordArray[indexOfArrayWord] = "";
                        underscoreArray[indexOfArrayWord] = datalttr;
                        correctSelected.push(indexOfArrayWord);
                        for (var y = 0; y < wordChosen.length; y++) {
                            secretWord.innerHTML = underscoreArray.join("");
                        }
                        this.classList.add("btnUsed");
                    }
                }
                else {
                    this.classList.add("btnUsed");
                    lives = lives - 1;
                }


                // ******// this needs to be in a function as well
                document.getElementsByClassName("jumbotron2");
                document.querySelector(".jumbotron2").prepend(lead2);
                lead2.innerHTML = "You have " + lives + " lives left.";
                if (lives < 1) {
                    // picturesZero();
                    lead2.innerHTML = "Game Over! The Dinosaur name was "
                        + wordChosen + ". Refresh the page to play again!";

                }
                if (correctSelected.length === underscoreArray.length) {
                    lead2.innerHTML = "You Win! Refresh the page to play again!";

                }
                // if(lives=10){
                //     picturesTen()
                // }
                // else if(lives=lives-1){
                //     picturesNine()
                // }
                // else if(lives=lives-2){
                //     picturesEight()
                // }
                // else if(lives=lives-3){
                //     picturesSeven()
                // }
                // else if(lives=lives-4){
                //     picturesSix()
                // }
                // else if(lives=lives-5){
                //     picturesFive()
                // }
                // else if(lives=lives-6){
                //     picturesFour()
                // }
                // else if(lives=lives-7){
                //     picturesThree()
                // }
                // else if(lives=lives-8){
                //     picturesTwo()
                // }
                // else if(lives===lives-9){
                //     picturesOne()
                // }
                // function picturesTen() {
                //     imageGet.src = "./assets/images/Hangman1.png";
                //     document.getElementsByClassName("jumbotron1");
                //     document.querySelector(".jumbotron1").appendChild(imageGet);
                //     imageGet.classList.add("rounded", "mx-auto", "d-block");
                //     imageGet.id = "image";

                // }
                // function picturesNine() {
                //     imageGet.src = "./assets/images/Hangman2.png";
                //     document.getElementsByClassName("jumbotron1");
                //     document.querySelector(".jumbotron1").appendChild(imageGet);
                //     imageGet.classList.add("rounded", "mx-auto", "d-block");
                //     imageGet.id = "image";

                // }
                // function picturesEight() {
                //     imageGet.src = "./assets/images/Hangman3.png";
                //     document.getElementsByClassName("jumbotron1");
                //     document.querySelector(".jumbotron1").appendChild(imageGet);
                //     imageGet.classList.add("rounded", "mx-auto", "d-block");
                //     imageGet.id = "image";

                // }
                // function picturesSeven() {
                //     imageGet.src = "./assets/images/Hangman4.png";
                //     document.getElementsByClassName("jumbotron1");
                //     document.querySelector(".jumbotron1").appendChild(imageGet);
                //     imageGet.classList.add("rounded", "mx-auto", "d-block");
                //     imageGet.id = "image";

                // }
                // function picturesSix() {
                //     imageGet.src = "./assets/images/Hangman5.png";
                //     document.getElementsByClassName("jumbotron1");
                //     document.querySelector(".jumbotron1").appendChild(imageGet);
                //     imageGet.classList.add("rounded", "mx-auto", "d-block");
                //     imageGet.id = "image";

                // }
                // function picturesFive() {
                //     imageGet.src = "./assets/images/Hangman6.png";
                //     document.getElementsByClassName("jumbotron1");
                //     document.querySelector(".jumbotron1").appendChild(imageGet);
                //     imageGet.classList.add("rounded", "mx-auto", "d-block");
                //     imageGet.id = "image";

                // }
                // function picturesFour() {
                //     imageGet.src = "./assets/images/Hangman7.png";
                //     document.getElementsByClassName("jumbotron1");
                //     document.querySelector(".jumbotron1").appendChild(imageGet);
                //     imageGet.classList.add("rounded", "mx-auto", "d-block");
                //     imageGet.id = "image";

                // }
                // function picturesThree() {
                //     imageGet.src = "./assets/images/Hangman8.png";
                //     document.getElementsByClassName("jumbotron1");
                //     document.querySelector(".jumbotron1").appendChild(imageGet);
                //     imageGet.classList.add("rounded", "mx-auto", "d-block");
                //     imageGet.id = "image";

                // }
                // function picturesTwo() {
                //     imageGet.src = "./assets/images/Hangman9.png";
                //     document.getElementsByClassName("jumbotron1");
                //     document.querySelector(".jumbotron1").appendChild(imageGet);
                //     imageGet.classList.add("rounded", "mx-auto", "d-block");
                //     imageGet.id = "image";

                // }
                // function picturesOne() {
                //     imageGet.src = "./assets/images/Hangman10.png";
                //     document.getElementsByClassName("jumbotron1");
                //     document.querySelector(".jumbotron1").appendChild(imageGet);
                //     imageGet.classList.add("rounded", "mx-auto", "d-block");
                //     imageGet.id = "image";

                // }
                // function picturesZero() {
                //     imageGet.src = "./assets/images/Hangman11.png";
                //     document.getElementsByClassName("jumbotron1");
                //     document.querySelector(".jumbotron1").appendChild(imageGet);
                //     imageGet.classList.add("rounded", "mx-auto", "d-block");
                //     imageGet.id = "image";

                // }
            }
        }
        if (lives < 1) { throw "Refresh the page to play again!" }
        if (correctSelected.length === underscoreArray.length) { throw "Refresh the page to play again!" }

