'use script';

// generate a random number between 1 and 20
let randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);
let highScore = 0;
let score = 20;
const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}
const checkNumber = function () {
  let inputScore = Number(document.querySelector('.input-score').value);
  if (!inputScore){
    // document.querySelector('.message').textContent = 'No number';
    displayMessage('No number');
  }else if (inputScore > randomNumber) {
    // document.querySelector('.message').textContent = 'Too high';
    displayMessage('Too high!')
    score -= 1;
  } else if (inputScore < randomNumber) {
    // document.querySelector('.message').textContent = 'Too low';
    displayMessage('Too low!')
    score -= 1;
  } else {
    // document.querySelector('.message').textContent = 'Correct answer';
    displayMessage('Correct answer') 
    document.querySelector('.value').textContent = randomNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > highScore){
        highScore = score;
        document.querySelector('.highscore-value').textContent = score;
    }
  }
  document.querySelector('.score-value').textContent = score;

};
const reset = function(){
    randomNumber = Math.floor(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.score-value').textContent = score; 
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.value').textContent = '?'; 
    document.querySelector('.input-score').value = 0;
    document.querySelector('body').style.backgroundColor = '#222';

}
document.querySelector('.check').addEventListener('click', checkNumber);
document.querySelector('.again-position').addEventListener('click', reset);
