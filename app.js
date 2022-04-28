// import functions and grab DOM elements
// let state
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
  
const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const totalEl = document.getElementById('total');

let win = 0;
let losses = 0;
let total = 0;


const button1 = document.getElementById('shell-1-button');
const button2 = document.getElementById('shell-2-button');
const button3 = document.getElementById('shell-3-button');

const container1 = document.getElementById('shell-1');
const container2 = document.getElementById('shell-2');
const container3 = document.getElementById('shell-3');




const placesToHide = ['shell-1', 'shell-2', 'shell-3'];

button1.addEventListener('click', () => {
    container1.classList.remove('reveal');
    container2.classList.remove('reveal');
    container3.classList.remove('reveal');
    

    const randomNumber = Math.ceil(Math.random() * 3);

    if (randomNumber === 1) {
        container1.classList.add('reveal');
        win++;          
    } else if (randomNumber === 2){
        container2.classList.add('reveal');
        losses++;
          
    } else {
        container3.classList.add('reveal');
        losses++;

    }
    winsEl.textContent = win;
    lossesEl.textContent = losses;
    totalEl.textContent = win + losses;

});

button2.addEventListener('click', () => { 
    container1.classList.remove('reveal');
    container2.classList.remove('reveal');
    container3.classList.remove('reveal');

    const randomNumber = Math.ceil(Math.random() * 3);

    if (randomNumber === 1) {
        container1.classList.add('reveal');
        losses++;          
    } else if (randomNumber === 2){
        container2.classList.add('reveal');
        win++;
      
    } else {
        container3.classList.add('reveal');
        losses++;

    }
    winsEl.textContent = win;
    lossesEl.textContent = losses;
    totalEl.textContent = win + losses;
});

button3.addEventListener('click', () => { 
    container1.classList.remove('reveal');
    container2.classList.remove('reveal');
    container3.classList.remove('reveal');

    const randomNumber = Math.ceil(Math.random() * 3);

    if (randomNumber === 1) {
        container1.classList.add('reveal');
        losses++;          
    } else if (randomNumber === 2){
        container2.classList.add('reveal');
        losses++;
    
    } else {
        container3.classList.add('reveal');
        win++;

    }
    winsEl.textContent = win;
    lossesEl.textContent = losses;
    totalEl.textContent = win + losses;
}); 






  