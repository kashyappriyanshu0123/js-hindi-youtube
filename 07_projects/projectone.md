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