function fizzBuzzGenerator() {
    let nbIteration = parseInt(document.getElementById("inputFieldForFizzBuzz").value);
    let answerArea = document.getElementById("answerFizzBuzz");
    answerArea.innerHTML = "";

    for (let i = 1; i <= nbIteration; i++) {

        let newParagraph = document.createElement("p");
        let textContent = i;

        if (i % 3 == 0 && i % 5 == 0) {
            textContent = "FizzBuzz";
        } else if (i % 3 == 0) {
            textContent = "Fizz";
        } else if (i % 5 == 0) {
            textContent = "Buzz";
        }

        let newContent = document.createTextNode(textContent);
        newParagraph.appendChild(newContent);
        answerArea.appendChild(newParagraph);
    }
}
