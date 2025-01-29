console.log("**** Welcome to my app ****");

// Generate a random 20-character alphanumeric string
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let serialNumber = "" , i = 0;

for(i=0 ;i< 20; ++i) {
    serialNumber += characters.charAt(Math.floor(Math.random()*characters.length));
}

console.log(serialNumber);
