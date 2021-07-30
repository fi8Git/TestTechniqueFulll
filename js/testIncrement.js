let digitArray = [];

function onClickShowDigitArrayIncremented() {
    let inputValue = parseInt(document.getElementById("inputFieldForDigitArray").value);
    let answerArea = document.getElementById("answerDigitArray");
    digitArray = convertUserInputToDigitArray(inputValue.toString());

    incrementDigitItem(digitArray.length - 1);

    answerArea.innerText = `Réponse: [${digitArray}]`;
}

/**
 * @param {String} inputValue 
 */
function convertUserInputToDigitArray(inputValue) {
    return Array.from(inputValue, Number);
}

/**
 * @param {Number} indexItem 
 */
function incrementDigitItem(indexItem) {
    if (indexItem >= 0) {
        if (digitArray[indexItem] == 9) {
            digitArray[indexItem] = 0;
            incrementDigitItem(indexItem - 1);
        } else {
            digitArray[indexItem]++;
        }
    } else {
        digitArray.unshift(1);
    }
}
