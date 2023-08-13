'use strict';
//DOM ...

console.log(document.querySelector('.message').textContent);
/*

//For Class we choose the '.textContent'for taking the value form input.....
document.querySelector('.message').textContent = '🦾🦾 Correct Number';

document.querySelector('.score').textContent = 55;

document.querySelector('.number').textContent = 22;


//For Input we choose the '.VALUE'for taking the value form input.....
document.querySelector('.guess').value  = 552;

*/

let score = 25;


//taking random number and we changed to round number like 3.1111 to 3
const secreateNumber = Math.trunc(Math.random() * 50)+1;


const displayMessage = function(message){
    document.querySelector('.message').textContent =message 
}

const displayHighScore = function(highscore){
    document.querySelector(".highscore").textContent = score
}


// First argument is known as Event Lisnter **
//Secound function() is known as the event handler,,,,,
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number( document.querySelector('.guess').value);
  console.log(typeof  guess);
//   console.log( guess);



//when there is no input 
if(!guess){
    // document.querySelector('.message').textContent = "Guess the right number..."
    displayMessage('Guess the right number...')

}
//when  player wins...
else if (guess === secreateNumber){
    // document.querySelector('.message').textContent = "Give me a party 🎉🎉🎉🎉🎉🎉🎂🎂";
    displayMessage("Give me a party 🎉🎉🎉🎉🎉🎉🎂🎂");

    document.querySelector('.number').textContent = secreateNumber;

    // CSS Manipulation here by DOM...
    document.querySelector('body').style.backgroundColor="#60b347";
    document.querySelector('.number').style.width = '25rem';

    displayHighScore (score)
    // document.querySelector('.highscore').textContent = score

}
//when you guess Wrong number

//this method is refactoring ...This Arranging code in good manner....and replace duplicate code with good code..
else if(guess !== secreateNumber){
    if(score >0){
        // Here we use ternery opration
        displayMessage( guess >secreateNumber ?  "TOO High📈📈📈📈": 'Too Low📉📉📉📉')
        
        // document.querySelector('.message').textContent= guess >secreateNumber?  "TOO High📈📈📈📈": 'Too Low📉📉📉📉';
        score--
        document.querySelector('.score').textContent =  score
    }else {
        displayMessage('"You Loose the Game Try Again👍👍👍";')
        // document.querySelector('.message').textContent=  "You Loose the Game Try Again👍👍👍";
       
        document.querySelector('.score').textContent =  0
    }

}

//when guess is too high
// else if(guess > secreateNumber){

//     if(score >0){
//         document.querySelector('.message').textContent=  "TOO High📈📈📈📈";
//         score--
//         document.querySelector('.score').textContent =  score
//     }else {
//         document.querySelector('.message').textContent=  "You Loose the Game Try Again👍👍👍";
//         document.querySelector('.score').textContent =  0
//     }
   
// }
//when guess is too loww
// else if (guess < secreateNumber){
//     if(score >0){
//         document.querySelector('.message').textContent = 'Too Low📉📉📉📉';
//         score--
//         document.querySelector('.score').textContent =  score
//     }else{
//         document.querySelector('.message') .textContent = "You Loose the Game Try Again👍👍👍";
//         document.querySelector('.score').textContent =  0
//     }
   
// }
});




// console.log(input_1());

// console.log(document.querySelector('.check'));


document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('body').style.backgroundColor = "#222";
    displayMessage("Start guessing...");

    // document.querySelector('.message').textContent = "Start guessing...";

    document.querySelector('.number').style.width = '15rem';

    document.querySelector('.score').textContent = 25;
    document.querySelector('.highscore').textContent = score ;

    document.querySelector(".number").textContent = '?';
    document.querySelector(".guess").value = "";


})