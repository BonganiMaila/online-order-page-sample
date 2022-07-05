//declare variables for heading
var greeting = 'Hello';
var clientName = 'Bongani';
var message = 'please check your order';
// concatenate the variables to get welcome message
var welcome = greeting + ' ' + clientName + ' ' + message;

//create variables to hold details about the sign
var sign = 'Montague House';
var tiles = sign.length;
var subtotal = tiles * 5;
var shipping = 7;
var grandtotal = subtotal + shipping;

//get all the elements(ids) in the HTML page
//get the element of the welcome message
var greet = document.getElementById('greeting');
greet.textContent = welcome;

//  user sign and display 
var userSign = document.getElementById('userSign');
userSign.textContent = sign;

// total number of tiles 
var totTiles = document.getElementById('tiles');
totTiles.textContent = tiles;

// subtotal 
var tot = document.getElementById('subTotal');
tot.textContent = '$' + subtotal;

// shipping costs 
var ship = document.getElementById('shipping');
ship.textContent = '$' + shipping;

// grand total 
var grand = document.getElementById('grandTotal');
grand.textContent = '$' + grandtotal 


