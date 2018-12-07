
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

greet = "morning";

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
    var answer;
    var operator;

    inputA = document.getElementById("inputA").value;
    inputB = document.getElementById("inputB").value;
    operator = document.getElementById("operator").value;

    if(operator == "+"){
        answer = parseInt(inputA) + parseInt(inputB);      
    }
    else if(operator == "-"){
        answer = parseInt(inputA) - parseInt(inputB);
    }
    else if(operator == "/"){
        answer = parseInt(inputA) / parseInt(inputB);
    }
    else if(operator == "*"){
        answer = parseInt(inputA) * parseInt(inputB);
    }
    
    document.getElementById("showResult2").value = answer;
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
/*


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


*/


// function to show a for loop
var numbers_2 = [1,2,3,4,5,6,7,8,9,10];
for ( var a =0; a < numbers_2.length; a++ ) {
console.log(numbers_2[a]);
    
}


// eg to show a oush value into an array

var collections = [];
console.log(collections); // see rusult of an innitialised array


collections.push("Test", 1, "a");
console.log(collections); // see result of an assigned push array


collections.push("Test of value");
console.log(collections); // see result of an assigned push array


// a function to display in predefined box element ID
// var must be defined outside the function else it values will be flushed everytime the function is called
// instead define the var first then everytime function is called, it will push value in the array
var myCollections = [];

function addMe(){
    var myText = document.getElementById("myText").value;
    myCollections.push(myText);
    document.getElementById("myResult").innerHTML = myCollections // how to display a value in the html element

}

// document.getElementById("myResult").value = answer; // use [value] how to display a value in a box in the html page

// document.getElementById("myResult").innerHTML = answer; // use [innerHTML] how to display a value in the html element
// another function


var myCollections2 = [];

function addMe2(){
    var myText2 = document.getElementById("myText2").value;
    myCollections2.push(myText2);

    document.getElementById("myResultNow").innerHTML = "";    
    for( var a = 0 ; a < myCollections2.length ; a++ ) {
            var currValue = myCollections2[a] + "<br>";
            var currResultValue = document.getElementById("myResultNow").innerHTML;
            document.getElementById("myResultNow").innerHTML = currResultValue + currValue;
        }
} 
var test = document.getElementById("myResultNow").innerHTML;
console.log(test);

