console.log("**** Hello to my random number generator app ****");

/********** Random number between specific two numbers *********/
const min = 6;
const max = 20;
console.log(Math.floor(Math.random()*(max-min+1))+min);
