function fetchElementById(id){
    let element = document.getElementById(id);
    return element;
}
function fetchInputValue(element){
    let inputValue = element.value;
    return inputValue;
}

let sentenceItemInput = fetchElementById("sentenceItemInput");
let sentenceAmountInput = fetchElementById("sentenceNumberInput");

let insertedItemForSentence = fetchInputValue(sentenceItemInput);
let selectedAmountForSentence = fetchInputValue(sentenceAmountInput);
