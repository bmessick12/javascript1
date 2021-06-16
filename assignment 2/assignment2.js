

function getMotto() {
    let Name = prompt("What is your Motto?");
    return Name;
}


function getCount() {
    let number = prompt("How many times would you like to see your Motto?")
    return number;
}
 

function printMotto(Name, number) {
    let printMotto = [];
    
    for (let index = 0; index < number; index += 1) {
      printMotto.push(Name);
      console.log(Name)
    }
    
    console.log(printMotto)
}
// window.alert(name);

let Name = getMotto(); 
let number = getCount();
printMotto(Name, number);


// console.log 

// const ProgressBar = require('progress')

// const bar = new ProgressBar(':bar', { total: 10 })
// const timer = setInterval(() => {
//   bar.tick()
//   if (bar.complete) {
//     clearInterval(timer)
//   }
// }, 100)



// function simpleInterest()

// {
// var pa,rate,time;
// pa=parseFloat(prompt("Enter Principle Amount"));
// rate=parseFloat(prompt("Enter Rate Amount"));
// time=parseFloat(prompt("Enter Time(year)"));
// document.write(pa + "</br>");
// document.write(rate + "</br>");
// document.write(time + "</br>");
// var si=(pa*rate*time)/100;
// document.write("Simple Interest anually is: "+si);
// }
// function area()
// {
// var radius;
// radius=parseFloat(prompt("Enter radius"));
// document.write(radius + "</br>");
// var area = 3.14 * radius * radius;
// document.write("Area of circle is is: "+area);
// }

