// allow purchase only if certain criteria is matched

var isisLoggedIn = true;
var isEmailVerified = true;
var isCardInfo = false;

if (isloggedIn && isEmailVerified && isCardInfo){
   console.log ("User allowed to make a purchase");
 } else {
    console.log ("not allowed mister");
 }

 // condition operator
 (isloggedIn && isEmailVerified && isCardInfo ) ? console.log ("User allowed to make apurchase") : console.log ("not allowedtomakepurchase");