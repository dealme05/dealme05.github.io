
// to get value of HTML elment

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
    var showResult;

    firstNumber = document.getElementById("firstNumber").value;
    secondNumber = document.getElementById("secondNumber").value;
    

    total = parseInt(firstNumber) + parseInt(secondNumber);

    document.getElementById("showResult").value ="Result";

}



// to display value
document.getElementById("showResult").value = "Result";