let textInputVal = document.getElementById('text');
let numberInputVal = document.getElementById('delay');
let submitBtn = document.getElementById('btn');
let outputDiv = document.getElementById('output');

async function displayMessageWithDelay(text, delay) {
    await new Promise((resolve) => setTimeout(resolve, delay));
    outputDiv.innerText = text;
}

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let textVal = textInputVal.value;
    let delayVal = Number(numberInputVal.value);

    if (textVal && delayVal > 0) {
        displayMessageWithDelay(textVal, delayVal);
    } else {
        outputDiv.innerText = "Please enter valid text and delay.";
    }
});
