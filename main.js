const userName = 'Cain';
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');
let userQuestion = "When will I get a six pack?"
console.log(`${userName} asked: ${userQuestion}`); 
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";
if (randomNumber === 0) {
    eightBall = 'never, panzon!'
} else if (randomNumber === 1) {
eightBall = 'when you stop eating all those tortas!'
} else if (randomNumber === 2) {
    eightBall = 'next year!'
} else if (randomNumber === 3) {
    eightBall = 'In your dreams!'
} else if (randomNumber === 4) {
    eightBall = 'I am not God!'
} else if (randomNumber === 5) {
    eightBall = 'Yo que se guey!'
} else if (randomNumber === 6) {
    eightBall = 'When you decide to be diciplined!'
} else if (randomNumber === 7) {
    eightBall = 'Not sure!'
} else {
    console.log('Try Again Later.')
}
console.log(eightBall);
