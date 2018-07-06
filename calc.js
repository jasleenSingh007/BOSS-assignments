 function calculations()
 {
var a = parseInt(document.getElementById("textfirst").value);
var b = parseInt(document.getElementById("textsecond").value);
var x = document.getElementById("cal").value;
switch(x)
{
case '+': alert(a+ "+" + b + "=" +(a+b));
break;
case '-': alert(a+ "-" + b + "=" +(a-b));
break;
case '*': alert(a+ "*" + b + "=" +(a*b));
break;
case '/': alert(a+ "/" + b + "=" +(a/b));
break;
default:alert("input is wrong");
break;
}}
