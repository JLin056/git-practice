function fib(n) {
    let first = 0; // 設定第一個數字
    let second = 1; // 設定第二個數字
    let temp = first + second;
    if(n == 0){
        return first;
    } else if(n == 1){
        return second;
    } else{
        for(let i = 2; i <= n; i++){
            temp += i
        }
        return temp;
    }
}
  
  console.log(fib(0)); // 0
  console.log(fib(1)); // 1
  console.log(fib(5)); // 15
  console.log(fib(10)); // 55