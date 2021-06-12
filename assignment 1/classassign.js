var carName1 = "Volvo XC60";  // Double quotes
var carName2 = 'Volvo XC60';  // Single quotes

var x1 = true;
var x2 = false;
var x3 = new Date();
var x4 = "999";
var x5 = "999 888";

var n =
Number(x1) + "<br>" +
Number(x2) + "<br>" +
Number(x3) + "<br>" +
Number(x4) + "<br>" +
Number(x5);

var car = {type:"Fiat", model:"500", color:"white"};

var car1 = "Saab";
var car2 = "Volvo";
var car3 = "BMW";

function myFunction(p1, p2) {
    return p1 * p2;   // The function returns the product of p1 and p2
  }
  console.log (myFunction);

  var i = 1;
while(i <= 100) {    
    document.write("<p>The number is " + i + "</p>");
    i++;
}

var i = 1;
do {
    document.write("<p>The number is " + i + "</p>");
    i++;
}
while(i <= 100);


for (var x=0; x<=15; x++) {
    if (x === 0) {
            console.log(x +  " is even");
    }
    else if (x % 2 === 0) {
            console.log(x + " is even");   
    }
    else {
            console.log(x + " is odd");
    }
}



