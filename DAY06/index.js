//an eg of a static value fnction
function myName(){
    var greetings = "Hello I am Aidil";
    console.log(greetings);
   }
myName();
   
   // result or output at console will always be Hello I am Aidil
   // this cannot be reused as the values are defined and static
   // the above top functions assigns the values at the call of the function and this can be assigned different value each time
   
// 2nd static function
function getMyFullName() {
    var firstName = "Stackup";
    var lastName = "One North"
    var fullName = firstName + " " + lastName;
    return fullName;
}
var myFullName = getMyFullName();
console.log(myFullName);
// result or output at console is : Stackup One North



// 1st dynamic function

function calculate (myLocation, myLocation2, myLocation3) {
    var myName = "This is Stackup, at " + myLocation + "," + myLocation2 + " " + myLocation3;
    console.log(myName);
}

calculate("One North", " JTC launchpad", "Blk 79");

// 2nd dynamic function - greetings
function greet (myFirstGreet, mySecondGreet, myThirdGreet){
    var myFullGreet = "Hi," + myFirstGreet + mySecondGreet + myThirdGreet;
    console.log(myFullGreet);
}
greet("how are you?", " are you ok?", " happy?");

// result or output at console is : Hi,how are you? are you ok? happy?

// for the above, STEP 1: declare a function and then the variables, followed by the values of the variables
// execute the function with the assigned variables and its values
// result or output at console is : This is Stackup, at One North, JTC launchpad Blk 79
// difference between static and dynamic is that dynamic calls the function and assigns values in its last line
// so for example we can reuse the same function mulitple times with different assigned values eg
// calculate("test1","test2","test3")


// function with operators
function greetWithAge(firstName, lastName, bornYear) {
    var age = 2018 - bornYear;
    var greetings = "Hello, " + firstName + lastName + "," + age;
    console.log(greetings);
}
greetWithAge("Aidil", "Johari", "1973");



// another dynamic function eg of an interactive function to click a button and display a message
function testMe() {
    alert("Hi you hit the button");
}




/// the idea is to use js to validate an input for eg a login value is valid i.e uppercase and alphanumeric true or false


