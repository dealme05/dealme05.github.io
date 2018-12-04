var my_name;    /*declare a variable*/
var my_age;
var my_birthday;

my_name="stackup";  /*give value to the box, my_name, declared above*/
my_age="45";
my_birthday="05/09/1973";


console.log(my_name);
console.log(my_age);
console.log(my_birthday);

var my_address="Paris Ris";
var my_test; /* if not declared the type, then it is type as undefined*/

console.log(my_address);
console.log(my_test);

console.log(typeof(my_test)); /* to check on the type of var eg number, string etc*/

var firstName;
var lastName;
var space;

firstName="Aidil";
lastName="Johari";
space=" "
var fullName = firstName + space + lastName;
console.log(fullName);

var fullName1 = firstName + " " + lastName;
console.log(fullName1);

var qty = 2;
var total = 200;
var qtyTotal = qty + total;
console.log(qtyTotal);

var firstNumber;
var secondNumber;
var totalNumber;

firstNumber = 10;
secondNumber = "10";
totalNumber = firstNumber + secondNumber;
console.log(totalNumber);

var compareResult;
compareResult = (firstNumber == secondNumber); /* == compares teh value but not the type of variable*/
console.log(compareResult);

compareResult = (firstNumber === secondNumber); /* === compares teh value and the type of variable*/
console.log(compareResult);


var testA = "Singapore";
var testB = "Singapore";
var compareTest = (testA != testB);
console.log(compareTest);


/* the below links wth the html input ID*/

var myHTMLValue;

myHTMLValue = document.getElementById("my_name").value;/* go and get the element my_name and the value*/
console.log(myHTMLValue);