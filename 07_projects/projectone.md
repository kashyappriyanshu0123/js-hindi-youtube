#Projects related to Dom

##Project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

#solution code

##Project 1

```javascript
console.log("priyanshu)
const buttons = document.querySelectorAll('.button');
console.log(buttons);
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if(e.target.id === 'grey')
    {
      body.style.backgroundColor = "grey"
    }
    if(e.target.id === 'white')
    {
      body.style.backgroundColor = "white"
    }
    if(e.target.id === 'blue')
    {
      body.style.backgroundColor = "blue"
    }
    if(e.target.id === 'yellow')
    {
      body.style.backgroundColor = "yellow"
    }
    if(e.target.id === 'purple')
    {
      body.style.backgroundColor = "purple"
    }
    
  })

})

```

##project 2

```javascript
const form = document.querySelector('form');
//this use case will give you empty 
//const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(e){
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if(height ==='' || height <0 || isNaN(height))
  {
    results.innerHTML = `please give a valid height ${height}`;

  } 
 // results.innerHTML = `${height}`;
 else if(weight ==='' || weight <0 || isNaN(weight))
 {
   results.innerHTML = `please give a valid weight ${weight}`;
 }
 else
 {
const bmi = (weight/ ((height * height)/10000)).toFixed(2)
//show the result 
results.innerHTML = `<span>${bmi}</span`;
 }
 if(weight < 18.6){
  const bmi = (weight/ ((height * height)/10000)).toFixed(2)
  results.innerHTML = `<span>${bmi}</span`;
   results.innerHTML = `under weight ${weight}`;
 }


});

```

##projrct 3 solution code
```javascript

const clock = document.getElementById('clock')
//const clock = document.querySelector('#clock')

setInterval(function(){
  let date = new Date();

  clock.innerHTML = date.toLocaleTimeString();

},1000)

```


##project 4 solution code


``` javascript


let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = []; //all previous gues will be inside this array for we can't repeat the value that i guessed before
let numGuess = 1;

let playGame = true; //there is always a variable this that allow us to play the game further or not

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value); // now i have taken the input value from the user 
    console.log(guess);
    validateGuess(guess);
  });
}


//the value is valid or not it should be in range(0 to 100) and be a specific value of int not string
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

//this func  needed bcoz there is only validation up there no value printing or message printing
//the random no is equal to the guess or not

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}


//interact with dom directly
//user value will get empty for next guess
//in the innerhtml the guess will be added 
//and less the count of guesses

function displayGuess(guess) {
  userInput.value = ''; //after submitting the val clean up the value
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}

```