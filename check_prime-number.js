// Check prime number;

const a=parseInt(prompt('Enter a number to find if its prime'));
    let isPrime=true;
    if(a===1){
        console.log("1 is neither prime nor composite");
    }
    else if(a>1){
        for(let i=2;i<a;i++){
            if (a % i == 0) {
                isPrime = false;
                break;
        }
    }
    if (isPrime){
        document.write(a,' is a prime number.');
    }
    else {
        document.write(a,' is a not prime number');
    }

    }
    else {
        console.log("The number is not a prime number.");
    }
