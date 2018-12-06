
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
    var totalOfTwoNumbers;

    firstNumber = document.getElementById("firstNumber").value;
    secondNumber = document.getElementById("secondNumber").value;
    
    totalOfTwoNumbers = parseInt(firstNumber) + parseInt(secondNumber);
    document.getElementById("showResult").value = totalOfTwoNumbers;
}



    //morning, afternoon, evening
var greet;

greet = "";

    if(greet == "morning"){
        console.log("This is Morning");
    }
    else if(greet == "afternoon"){
        console.log("This is afternoon");
    }
    else if(greet == "evening"){
        console.log("This is evening");
    }
    else{
        console.log("Night Time");
    }


// 3 input values fucntion

function output() {
    var inputA;
    var inputB;
    var total;
    var operator;

    firstNumber = document.getElementById("inputA").value;
    secondNumber = document.getElementById("inputB").value;
    operator = document.getElementById("operator").value;

    if(operator == "+"){
        total = parseInt(inputA) + parseInt(inputB);      
    }
    else if(operator == "-"){
        total = parseInt(inputA) - parseInt(inputB);
    }
    else if(operator == "/"){
        total = parseInt(inputA) / parseInt(inputB);
    }
    else if(operator == "*"){
        total = parseInt(inputA) * parseInt(inputB);
    }
    
    document.getElementById("showResult2").value = total;
}

//4 function

var greetings = ["Morning", "Afternoon", "Evening"];
        console.log(greetings);
        console.log(greetings.length);

        console.log(greetings[1]);
        console.log(greetings[2]);

        var primeNumber = [1, 3, 5, 7, 9, 12, 15];
        console.log(primeNumber.length - 1);

        var step = 0;
        while(step < primeNumber.length){
            console.log(primeNumber[step]);
            step = step + 1;
        }

var numbers = [1,2,3,4,5,6,78,9,10];

// another funstion
//if even number --> "Even NUmber"
// -> "Not Even Number"

// while + if else

step = 0;
while( step < numbers.length ){
    var isEven = numbers[step] % 2;

    if isEven == 0 {
        console.log(numbers[step] + " is even number");
    }
    else{
        console.log(numbers[step] + " is not even number");
    }
    step = step + 1
}





