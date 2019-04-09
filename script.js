/* Module 5 Project Script File */
var javaScript = [{ }, {question: "What is the file extension for JavaScript files? (.something)", answer: ".js"}, {question: "In Javascript, what does DOM mean?", answer: "Document Object Model"}, {question: "What year was JavaScript developed?", answer: "1995"} ];  
var jQ = [{ }, {question: "Does jQuery code appear before or after any links to CSS files?", answer: "After"}, {question: "What symbol do you have to put at the beginning of a jQuery statement?", answer:"$"}, {question: "When was JQuery developed?", answer: "2006"} ];
var bootStrap = [{ }, {question: "Bootstrap allows you to use pre-made classes for elements: True or False?", answer: "True"}, {question: "Does Bootstrap use a grid or freestyle system?", answer:"Grid"}, {question: "What year was Bootstrap developed?", answer: "2011"} ];

//var total = document.getElementById("total");

var total = 0;

function showQuestion(category,amount) { 
    var index = amount / 100;
    var score = document.getElementById("score");
    var buttonJS = document.getElementsByClassName("js");
    var buttonJQ = document.getElementsByClassName("jq");
    var buttonBS = document.getElementsByClassName("bs");

    if (category == 'javaScript') {
        var inputJS = prompt(javaScript[index].question);
        if (inputJS == javaScript[index].answer) {
            total += amount;
            buttonJS[index].disabled = true;   
        }
        else {
            alert("That is incorrect");
            buttonJS[index].disabled = true;
        }
    }
    else if (category == 'jQuery') {
        var inputJQ = prompt(jQ[index].question);
        if (inputJQ == jQ[index].answer) {
            total += amount;
            buttonJQ[index].disabled = true;   
        }
        else {
            alert("That is incorrect");
            buttonJQ[index].disabled = true;
        }
    }
    else if (category == 'bootStrap') {
        var inputBS = prompt(bootStrap[index].question);
        if (inputBS == bootStrap[index].answer) {
            total += amount;
            buttonBS[index].disabled = true;   
        }
        else {
            alert("That is incorrect");
            buttonBS[index].disabled = true;
        }
    }
    score.innerHTML = "Score: $" + total;
 }