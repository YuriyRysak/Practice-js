// const startBtn = document.querySelector(".js-start");
// const stopBtn = document.querySelector(".js-stop");
// let timerId = null;

// startBtn.addEventListener("click", () => {
//   timerId = setInterval(() => {
//     console.log(`I love async JS!  ${Math.random()}`);
//   }, 1000);
// });


// // stopBtn.addEventListener("click", () => {
// //   clearInterval(timerId);
// //   console.log(`Interval with id ${timerId} has stopped!`);
// // });

// document.addEventListener('mousedown', e => {
//     clearInterval(timerId);
//   console.log(`Interval with id ${timerId} has stopped!`);
// });

// надоедалка

const PROMPT_DELAY = 1000;
const MAX_PROMPT_ATTEMPTS = 3;

let promptCounter = 0;
let hasSubscribed = false;

const intervalId = setInterval(() => {
    if (promptCounter === MAX_PROMPT_ATTEMPTS) {

        console.log('We need to stop the interval!');
        clearInterval(intervalId);
        return;

    }
    console.log('Subscribe to the newsletter! - ' + Date.now());
    promptCounter += 1;
}, PROMPT_DELAY);
