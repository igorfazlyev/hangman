const prompt = require('prompt-sync')();
const tipper = (percent) => {
    return (bill) => bill * percent/100;
}



const bill = parseFloat(prompt('How much is the bill?: '));
console.log(`if you wanna tip 10% the tip is ${tipper(10)(bill)}`);
console.log(`if you wanna tip 15% the tip is ${tipper(15)(bill)}`);
console.log(`if you wanna tip 20% your tip is ${tipper(20)(bill)}`);