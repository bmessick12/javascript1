
function mymotto() 
{
var user = prompt("Enter your favorite motto", "Enter motto");
if (user != null) 
    document.getElementById("greeting").innerHTML= "Greetings, " + user + "!";
}
function simpleInterest()

{
var pa,rate,time;
pa=parseFloat(prompt("Enter Principle Amount"));
rate=parseFloat(prompt("Enter Rate Amount"));
time=parseFloat(prompt("Enter Time(year)"));
document.write(pa + "</br>");
document.write(rate + "</br>");
document.write(time + "</br>");
var si=(pa*rate*time)/100;
document.write("Simple Interest anually is: "+si);
}
function area()
{
var radius;
radius=parseFloat(prompt("Enter radius"));
document.write(radius + "</br>");
var area = 3.14 * radius * radius;
document.write("Area of circle is is: "+area);
}