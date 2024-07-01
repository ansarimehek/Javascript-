// allow purchase only if certain criteria is matched

var isLoggedIn = true;
var isEmailVerified = true;
var isCardInfo = false;

// if (isLoggedIn && isEmailVerified && isCardInfo){
//    console.log ("User allowed to make a purchase");
//  } else {
//     console.log ("not allowed dear customer");
//  }

// condition operator
(isLoggedIn && isEmailVerified && isCardInfo) ? console.log("User allowed to make a purchase") : console.log("not allowed to make purchase");

// || or logiical operator