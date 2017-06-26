 

      var Alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


      var wins = 0;
      var losses = 0;
      var guesses = 10;
      var guessesLeft = 10;
      var guessedLetters = [];
      var letterToGuess = null;

      var computerGuess = Alphabet[Math.floor(Math.random() * Alphabet.length)];

      var updateGuessesLeft = function() {

        document.querySelector('#guessLeft').innerHTML = "Guesses Left: " + guessesLeft;
      };

      var updateLetterToGuess = function() {
        this.letterToGuess = this.Alphabet[Math.floor(Math.random() * this.Alphabet.length)];
      };
      var updateGuessesSoFar = function() {

        document.querySelector('#let').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
      };
      
      var reset = function() {
        totalGuesses = 10;
        guessesLeft = 10;
        guessedLetters = [];

        updateLetterToGuess();
        updateGuessesLeft();
        updateGuessesSoFar();
      }

        updateLetterToGuess();
        updateGuessesLeft();


        document.onkeyup = function(event) {
            guessesLeft--;
          var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

          guessedLetters.push(userGuess);
          updateGuessesLeft();
          updateGuessesSoFar();

                if (guessesLeft > 0){

                if (userGuess == letterToGuess){
                        wins++;
                        document.querySelector('#wins').innerHTML = "Wins: " + wins;
                        alert("You Win!");
                        reset();
                    }
                }else if(guessesLeft == 0){

                    losses++;
                    document.querySelector('#losses').innerHTML = "Losses: " + losses;
                    alert("You are not Psychic");

                    reset();
        }
};