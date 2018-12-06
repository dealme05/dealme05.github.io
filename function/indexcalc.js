/*create function to do calculation
function calculate(firstNumber, secondNumber) {
    var result = firstNumber + secondNumber;
    var showResult = "The result " + result;
    console.log(showResult);
}

// to display value
document.getElementById("result").value = "showResult";*/


function calculate() {
    var firstNumber;
    var secondNumber;
    var totalOfTwoNumbers;

    firstNumber = document.getElementById("firstNumber").value;
    secondNumber = document.getElementById("secondNumber").value;
    
    totalOfTwoNumbers = parseInt(firstNumber) + parseInt(secondNumber);
    document.getElementById("showResult").value = totalOfTwoNumbers;
}

function answer() {
    var inputA;
    var inputB;
    var output;
    var operator;

    inputA = document.getElementById("inputA").value;
    operator = document.getElementById("operator").value;
    inputB = document.getElementById("inputB").value;

    if(operator == "+"){
        output = parseInt(inputA) + parseInt(inputB);      
    }
    else if(operator == "-"){
        output = parseInt(inputA) - parseInt(inputB);
    }
    else if(operator == "/"){
        output = parseInt(inputA) / parseInt(inputB);
    }
    else if(operator == "*"){
        output = parseInt(inputA) * parseInt(inputB);
    }
    
    document.getElementById("answerScreen").value = output;
}