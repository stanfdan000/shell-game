// import functions and grab DOM elements
// let state
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
  
const wins= document.getElementById('wins');
const losses = document.getElementById('losses');
const total = document.getElementById('total');

const button1 = document.getElementById('shell-1-button');
const button2 = document.getElementById('shell-2-button');
const button3 = document.getElementById('shell-3-button');

// const container1 = document.getElementById('shell-1');
// const container1 = document.getElementById('shell-2');
// const container1 = document.getElementById('shell-3');



const hidingPlaces = ['shell-1', 'shell-2', 'shell-3'];

button1.addEventListener('click', () => {

});

button2.addEventListener('click', () => {

  console.log('hello');
});

button3.addEventListener('click', () => {

  console.log('hello');
});
  //sign hidingPlace random number between 0-2
  //const hidingPlaces = math.floor(math.random() * 3);
  

//   button2.addEventListener('click', () => {
//     const hidingPlaces = math.floor(math.random() * 3);
//     const answer = hidingPlaces[hidingPlaces];
//     handleGuess(answer, 'shell-2');
//     if (randomShell === 2) {
//       win++;
//     } else {
//       losses++;
//     }
//  }

//  button3.addEventListener('click', () => {
//   const hidingPlaces = math.floor(math.random() * 3);
//   const answer = hidingPlaces[hidingPlaces];
//   handleGuess(answer, 'shell-3');
//   if (randomShell === 3) {
//     win++;
//   } else {
//     losses++;
//   }
// let correctGuesses = 0;
// let totalGuesses = 0;



//  }