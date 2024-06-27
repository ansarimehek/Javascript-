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
    
}