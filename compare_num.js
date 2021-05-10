// compare 3 numbers
var a=Number(prompt('Enter 1st number'));
var b=Number(prompt('Enter 2nd number'));
var c=Number(prompt('Enter 3r number'));


if (a>=b && a>=c) {
    document.write('The greatest number is:' +a);
} else if(b>=a && b>=c) {
    document.write('The greatest number is:'+b);
} else{
    document.write('The greatest number is:' +c);
}
