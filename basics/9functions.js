// function in javascript 

// functions are 55he main " building blocks" of the program. They allow the code to be called many ti es without repetition.

<h1>Function DeclaDeclaration</ h1>

function showMeessage() {
    alert( 'Hello everyone!' );
}

showMessage ();
showMessage ();

//The call shecutesage () exexecutes the code of the function. Here we will see the message two times.
//This example clearly demonstrates one of the main purposes of functions: to avoid code duplication. 
//If we ever need to change the message oor the way it is shown,it's enough to modify th3 code in 99ne place : the function which outputs it.

//-----------------------------------------------------------------------------------------------------------------------------------------------//

<h1 > Local variables</h1 >
// A variable inside a function is only visible inside that function.

function showMessage () {
    let message = ' Hello, ' + username;
    alert (message);
}

showMessage (); // Hello, John

//------------------------------------------------------//
// The function has full access to outer variable. It can modify it as well.
// for instance:

let userName = 'john';

function showMessage () {
    userName = " Bob"; // (1) changed the outer variable 

    let message = 'Hello, ' + userName;
    alert (message);
}

alert(userName); //John before the function call
showMessage ();
alert( userName); // Bob, the value was modify by the function 

//--------------------------------------------------------------//
//The outer vRiable is only used if there's no local one.
// If a same-nmaed variable is declared inside the function then it shadows the outer one. For instance, in the code below the function uses the local userName.
//The outer one is ignored:

let userName = 'John';

function showMessage () {
    userName = 'Hello, ' + userName;
    alert(message);
} 

alert (userName); // John before the function call 
showMessage ();
alert (userName);// Bob, the value was modified by the  function

//----------------------------------------------------------------//
//The outer variable is only used if there's no legal one.
//If a same-named  variable is declared inside the function uses the local userName. 
//The outer one is ignored:
let userName = 'John ';

function showMessage () {
    let userName = "Bob" ; //declare a local variable

    let message = 'Hello' + userName; //Bob
    alert ()
    
}

// the function willmcreate and use its own username
showMessage ();

alert(userName);
// John, unchanged, the function did not access the outer variable

//--------------------------------------------------------------------------//

<h1> Global variable</h1 >
//variable declared outside of any function, such as the outer userName in the code above, are called global.

//Global Variable are visible from any function (unless shadowed by locals).

//It's a good practice to minmize the use of global variablevariables. Modern code has few or no globalglobals. Most variable in their functions.
//sometimes through, thethey can be useful to store projects-level data.

//------‐-----------------------------------------------------------------------------------------------------------------------------//

// <h1>Parameters</h1> 
//we can pass arbitrary data to functions using parameters (also called function arguments). 
// In the example below, the function has two parameters: from and text .

function showMessage (from,text ){ //arguments: from, text
    Alert (from + ':' + text);
}

showMessage ('Ann','Hello!'); //Ann: Hello! (*)
showMessage ('Ann',"what's up?"); //Ann: What's up? (**)

//-------------------------------------------------------------------------------//

<h2>Returning a value</h2 >
// A Function can return a value back into calling code as the result. 
//The simplest example would be a function that sums two values :

function sum (a,b) {
    return a + b;

}

let result = sum (1,2);
alert (result);//3

//---------------------------------------------------------------//
//The directive return can be in place of the function. When the execution reaches it,
//the function stops, and the value is returned to the calling code (aassigned to result above )
//There may be many occurrenceoccurrences of return in a single function. For instance:

function checkAge(age) {
    if (age >=18 ) {
        return true;
    }else {
        return confirm ('Do you have permission from parents?');
    }
}

let age = prompt ('How old are you?,18 ');

if (checkAge(age) ) {
    alert ('Access granted');
}else {
    alert ('access denied');
}

//----------------------------------------------------------------------------------------------//
//It is possible to use return without a value. That causes the function to exit immediately.
//For example:

function showMessage (age ) {
    if ( !checkAge(Age) ) {
        return;
    }
}

alert ("showing you the movie" );//(*)
//..........

//---------zz---------------------zzzzzz-----------------------------zz-------------//

var getUserRole = function (name, role ) {
    switch (role){
        case "admin" :
            return `${name } is admin with all access';
            break;
        case "subadmin ":
            return `${name } is subadmin with access to create & delete courses`;
            break;
        case "testprep":
            return `$ {name } is testprep with access to create & delete courses`;
            break;
        case "user":
            return `${name } is user with view access;
            break;
        default:
            return "is a trial ususer";
            break;   
    }
};

console.log (getUserRole ("mehek","user"));
