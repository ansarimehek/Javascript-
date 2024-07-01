// code for conditionally login 

var email = false;
var google = false;
var Facebook = true;

if (email || google || Facebook) {
    console.log("Login Success");
} else {
    console.log("login failed")
}

// ! not logical operators