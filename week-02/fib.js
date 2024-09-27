function fib(n) {
    if(n <= 1) {
        return n;
    } 
    return fib(n - 1) + fib(n - 2);
}
  
console.log(fib(0)); // 0
console.log(fib(1)); // 1
console.log(fib(5)); // 5
console.log(fib(10)); // 55