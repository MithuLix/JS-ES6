isPrimeFactors = n => {
    const factors = [];
    let divisor = 2;

    while (n >= 2) {
        if(n % divisor == 0){
            factors.push(divisor);
            n = n / divisor;
        } else {
            divisor ++;
        }
    }
    return factors;
}

const num = Math.floor(Math.random() * 10000);
console.log(num + ' :', isPrimeFactors(num).join(' '));