// Challenge 1.
// Log message in console saying "I'm Learning Javascript"

console.log( "I'm Learning Javascript");

// Challenge 2.
// Declare two variables: admin and name.
var admin;
var name;
// Assign the value "John" to name.
var name="john";
// Copy the value from name to admin.
admin=name;
// Show the value of admin using alert (must output “John”).
alert(admin);
// Challenge 3.
// Use alert function to to show a message saying “Hello World”.
alert("Hello World");
// Challenge 4.
// Use prompt to take the name of person and greets them. i.e "Welcome Arun"
var name=prompt("enter name");
alert("Welcome  "+name);
// Challenge 5.
// Get an input from the user using the prompt box and display the length of the string.
// e.g “Learning is fun” should output will be 15.
var str=prompt("enter string");
var length=str.length;
alert("Length is "+length);


// Challenge 6.
var city = "Dharamshala";
var country = "India";
// Alert the above variable like "Dharamshala, India";
alert(`${city},${country}`);
