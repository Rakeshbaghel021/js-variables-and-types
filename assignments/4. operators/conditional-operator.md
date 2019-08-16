## If Statement
1.  🎖Make a simple calculator with these functions. Using prompt, type conversion, if else statement. Use prompt to take the input from user i.e two numbers and an operation (Add, Sub, Mul, Div).

  ⛑ Rule
    * [ ] While substracting and dividing keep in mind the number one should be greater then number two. If not show alert saying `Number Two is larger then Number one`.
  ⚡️ Operations
    * [ ] Add
    * [ ] Sub
    * [ ] Mul
    * [ ] Div

 var num1 = +prompt("Enter first Number");
 var num2 = +prompt("Enter second Number");
 var operator = prompt("Please enter operators: Add(+), Sub(-), Mul(*), Div(/)");
 if (operator == "Add" || operator == "+") {
   alert(num1 + num2);
} else if (operator == "Sub" || operator == "-") {
  if (num1 < num2) {
    alert("Number two is greater than Number one.");
  } else {alert(num1 - num2);}
} else if (operator == "Mul" || operator == "*") {
  alert(num1 * num2);
} else if (operator == "Div" || operator == "/") {
  if (num1 < num2) {
    alert("Number two is greater than Number one.");
  } else {alert(num1 / num2);}
} 





2. 🎖Write a if else statement which checks if the status is single `console.log` the message `John is single` or else `John is married`
```js
var firstName = 'John';
var status = 'single';
if (status=="single"){
	console.log("John is single");
}
else 
	{
		console.log("John is married");
	}



3. 🎖Write a JavaScript program that takes two `integers` from user (using prompt) and alerts the larger number.
```js
// your code goes here


var num1=prompt('enter number 1');
var num2=prompt('enter number 2');
if (Number(num1)>Number(num2)){
	alert(Number(num1) +"  larger number")
}


4. 🎖Write a JavaScript conditional statement to find the sign (+, -) of product of three numbers. Take those three numbers from user using `prompt`. Display an alert box with the specified sign.

```js
// Your code goes here

var num1=prompt("enter number 1");
var num2=prompt("enter number 2");
var num3=prompt("enter number 3");
var pro=(Number(num1)*Number(num2)*Number(num3));
if(pro>0){
	alert(`+ ${pro}`);
}
else
   { alert(pro);}



## Switch Statement

1. 🎖Using switch statement do the following

Take a number value from user and alert the message if it matches the conditions.
* [ ] ONE, if `number` is equal to 1.
* [ ] TWO, if `number` is equal to 2.
* [ ] THREE, if `number` is equal to 3.
* [ ] FOUR, if `number` is equal to 4.
* [ ] FIVE, if `number` is equal to 5.
* [ ] SIX, if `number` is equal to 6.
* [ ] SEVEN, if `number` is equal to 7.
* [ ] EIGHT, if `number` is equal to 8.
* [ ] NINE, if `number` is equal to 9.
* [ ] PLEASE TRY AGAIN, if  is none of the above.
```js
// Your code goes here

var num = +prompt("Enter a number");
switch(num) {
  case 1:
    alert("ONE");
    break;
  case 2:
    alert("TWO");
    break;
  case 3:
    alert("THREE");
    break;
  case 4:
    alert("FOUR");
    break;
  case 5:
    alert("FIVE");
    break;
  case 6:
    alert("SIX");
    break;
  case 7:
    alert("SEVEN");
    break;
  case 8:
    alert("EIGHT");
    break;
  case 9:
    alert("NINE");
    break;
  default:
    alert("PLEASE TRY AGAIN");
}

2. 🎖Using switch statement do the following

Take the value of `marks` (0-100) from user using `prompt` and `alert` the message (Your Grade is AA) as giver below.
* [ ] `AA` if `marks` is greater than 90.
* [ ] `AB` if `marks` is greater than 80 and less than or equal to 90
* [ ] `BB` if `marks` is greater than 70 and less than or equal to 80
* [ ] `BC` if `marks` is greater than 60 and less than or equal to 70
* [ ] `CC` if `marks` is greater than 50 and less than or equal to 60
* [ ] `CD` if `marks` is greater than 40 and less than or equal to 50
* [ ] `DD` if `marks` is greater than 30 and less than or equal to 40
* [ ] `FF` if `marks` is less than or equal to 30
```js
// Your code goes here
var marks = +prompt("Enter your marks");
switch(true) {
  case (marks > 90):
    alert("Your grade is AA");
    break;
  case (marks > 80 && marks < 90):
    alert("Your grade is AB");
    break;
  case (marks > 70 && marks < 80):
    alert("Your grade is BB");
    break;
  case (marks > 60 && marks < 70):
    alert("Your grade is BC");
    break;
  case (marks > 50 && marks < 60):
    alert("Your grade is CC");
    break;
  case (marks > 40 && marks < 50):
    alert("Your grade is CD");
    break;
  case (marks > 30 && marks < 40):
    alert("Your grade is DD");
    break;
  case (marks <= 30):
    alert("Your grade is FF")
    break;
}
