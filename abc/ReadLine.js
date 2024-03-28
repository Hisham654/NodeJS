const readline = require("readline");
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,

});

rl.question("What is your name?\n",function(answer){
    console.log(`thank you,${answer}`);
    rl.close();
})