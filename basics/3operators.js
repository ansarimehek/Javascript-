// DS= ((L-S)/L)*100;

var sellingprice = 357;
var listprice = 800;
var discount = ((listprice - sellingprice) / listprice) * 100;
console.log("Discount Percentage is : ", discount);
console.log("Rounded Discount : ", Math.round(discount), "%off");

var result = listprice > sellingprice ;
console.log(result);

// boolean data types of js greater nd smaller