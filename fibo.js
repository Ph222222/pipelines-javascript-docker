function fibo(n) { 

    if (n < 2)
        return 1;
    else   return fibo(n - 2) + fibo(n - 1);
}

x = fibo(45)
console.log(x)