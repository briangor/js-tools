
let calculateTax = (amount, rate) => {
     //console.log(amount * (rate / 100));
    return amount * (rate);
}


/* function that receives a string containing a list of numbers separated by comma and returns their sum:
Numbers greater than 1000 should be ignored
Negative numbers aren’t allowed: they should be listed in a message */


let calculate = () => {
    const usrInput = document.getElementById('input-numbers');
    const resultElement = document.getElementById('result');
    const text = usrInput.value;
    const numbers = text.split(',').map(x => parseInt(x));
    const negatives = numbers.filter(x => x < 0);
    let result;

    if (negatives.length > 0) {
        result = `Negatives not allowed:${negatives.join(', ')}`;
    } else {
        result = numbers
            .filter(x => x <= 1000)
            .reduce((a, b) => a + b, 0);
    }

    resultElement.textContent = result;
}
