var myCarts = []
var totalPayable = 0;
function addToCart(extPrice, extProductName){
    var myQuantity = document.getElementById("quantity").value;
    var price = extPrice;
    var productName = extProductName;
    var totalPrice = parseInt(myQuantity) * price;
    var item = productName + " x" + myQuantity + " : $" + totalPrice;

    totalPayable = totalPayable + totalPrice;

    myCarts.push(item);


    // display it
    document.getElementById("my_shopping_cart").innerHTML = "";
    for( var a = 0 ; a < myCarts.length ; a++ ){
        var currItem = myCarts[a] + "<br>";   // start when a = 0 it was innitialised with
        var currResult = document.getElementById("my_shopping_cart").innerHTML;

        document.getElementById("my_shopping_cart").innerHTML = currResult + currItem; // add a new item to existing currResult

    }
//display the total payable
document.getElementById("totalPayable").value = totalPayable;

}


function payNow(){
    var grandTotal = document.getElementById("totalPayable").value;
    var userPay = document.getElementById("totalUserPay").value;

    grandTotal = parseInt(granTotal);
    userPay = parseInt(userPay);

    if(userPay >= grandTotal){
            var change = userPay - grandTotal;
            document.getElementById("changeTotal").value = change;
        }else{
            alert("Unable to Pay!");
        }
}