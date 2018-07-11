/* Question and Answer */
function answerAndQuestion() {
    var question = prompt("Your question");
    var answer = prompt("Your answer to question");

    var questionTest = prompt(question);

    alert(questionTest)
    if(questionTest == answer) {
        alert("Success! Right answer.");
    }
    else {
        alert("Failed! Wrong answer to question.");
    }
}
