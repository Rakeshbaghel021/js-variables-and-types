# Logical Operator

1. 🥇What's the output of the following, write the output next to the code as comment.

* [ ] Logical AND operation

```js
true  && true; //output
true  && false;//false
false && true; //false
false && false;//false
"foo" && "bar";//"bar"
"bar" && "foo";//"foo"
"foo" && "";   //""
""    && "foo";//""
" "   && "John" && "" && false //""
false && "Hey" && undefined   //false
"undefined" && false && 42    //false
```

* [ ] Logical OR operation
```js
true  || true;                  //true
true  || false;                 //true
false || true;                  //true
false || false;                 //false
"foo" || "bar";                 //"foo"
"bar" || "foo";                 //"bar"
"foo" || "";                    //"foo"
""    || "foo";                 //"foo"
" "   || "John" || "" || false  //""
false || "Hey" || undefined     //"hey"
"undefined" || false || 42      //"undefined"
```

2. 🥈You have two variables i.e `isGuestOneVeg` and  `isGuestTwoVeg` according to the value using logical && and || opeartor do the following.

* [ ] If both are veg "Only offer up vegan dishes."
* [ ] At least one veg  "Make sure to offer up some vegan options."
* [ ] Else, "Offer up anything on the menu"


let isGuestOneVeg = false;
let isGuestTwoVeg = false;

(isGuestOneVeg == true && isGuestTwoVeg == true) && alert("Only offer up vegan dishes.");
(isGuestOneVeg == true || isGuestTwoVeg == true) && alert("Make sure to offer up some vegan options.");
(isGuestOneVeg == false && isGuestTwoVeg == false) && alert("Offer up anything on the menu.");


3. 🎖Using the variable `temperature` and logical operators do the following
* [ ] If temperature is less then 32 alert "It is freezing outside"
* [ ] If the temperature is greater then 110 alert "It is hot outside"
* [ ] else 'Go for it. It is pretty nice out'
```js
var temperature = +prompt("What's the temp?");
(temperature < 32) && alert("It is freezing outside");
(temperature > 110) && alert("It is hot outside");
(temperature > 32 && temperature < 110) && alert("Go for it. It is pretty nice out.");

	


4. 🎖 Output of this
```js
alert( alert(1) || 2 || alert(3) );


1,2