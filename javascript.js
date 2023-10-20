// *************Q1****************
function sumOfArray() {
  let myarr = [];
  let counter = 0;
  let sum = 0;
  while (true) {
    let num = parseInt(prompt("enter some value"));
    if (num) {
      myarr.push(num);
    } else {
      break;
    }
  }
  for (let i = 0; i < myarr.length; i++) {
    sum += myarr[i];
  }
  return sum;
}
console.log(sumOfArray());
// ***************Q2*****************
let colorPart = document.querySelectorAll("tr");
for (let i = 0; i < colorPart.length; i++) {
  let colorIt = colorPart[i].children;
  colorIt[i].style.backgroundColor = "red";
}
// *************Q3*****************
let myarr = [1, 2, 3, 4, 5, 6];
function myforeachfunc(myarr, callbackfunc) {
  for (let i = 0; i < myarr.length; i++) {
    callbackfunc(myarr[i], i);
  }
}
function callbackfunc(myarr, value) {
  console.log(myarr, value);
}
myforeachfunc(myarr, callbackfunc);
