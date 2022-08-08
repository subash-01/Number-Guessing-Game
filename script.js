var msg1 = document.querySelector("#msg1");
var msg2 = document.querySelector("#msg2");
var msg3 = document.querySelector("#msg3");
var result = Math.floor(Math.random()*10) - 1;
var no_of_guesses = 0;
var guesses_num =[];

function play(){
    var user_guess = document.querySelector("#guess").value;
    if(user_guess < 1 || user_guess > 10){
        alert("Please give a number between 1 to 10");
    }
    else{
        guesses_num.push(user_guess);
        no_of_guesses = no_of_guesses + 1;
        if(user_guess < result){
            msg1.textContent = "YOUR GUESS IS LOW";
            msg2.textContent = "NUMBER OF GUESSES : " + no_of_guesses;
            msg3.textContent = "GUESSED NUMBERS ARE : " + guesses_num;
        }
        else if(user_guess > result){
            msg1.textContent = "YOUR GUESS IS HIGH";
            msg2.textContent = "NUMBER OF GUESSES : " + no_of_guesses;
            msg3.textContent = "GUESSED NUMBERS ARE : " + guesses_num;
        }
        else if(user_guess == result){
            msg1.textContent = "YOU WON";
            msg2.textContent = "THE NUMBER IS : " + result;
            msg3.textContent = "YOU GUESSED : " + no_of_guesses + " GUESSES" ;
        }
    }
}