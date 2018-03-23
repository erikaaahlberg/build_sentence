function fetchElementById(id){
    return document.getElementById(id);
}
function fetchInputValue(element){
    return element.value;
}
function createSentence(item, amount){
    return `There is ${amount} of ${item}`;
}
function printSentence(sentence, parentElementId){
    let parentElement = fetchElementById(parentElementId);
    let paragraph = createElement("p");
    let textNode = createTextNode(sentence);

    paragraph.appendChild(textNode);
    parentElement.appendChild(paragraph);
}
// Fetching elements
let sentenceItemInput = fetchElementById("sentenceItemInput");
let sentenceAmountInput = fetchElementById("sentenceNumberInput");

// Fetching values
let itemForSentence = fetchInputValue(sentenceItemInput);
let amountForSentence = fetchInputValue(sentenceAmountInput);

// Creating sentence
let sentence = createSentence(itemForSentence, amountForSentence);

// Printing sentence
printSentence(sentence);