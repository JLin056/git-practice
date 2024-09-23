// ary: number array
function sum(ary) {
	let result = ary.reduce(function(sum,current){
        sum += current
        return sum;
    },0)
    return result;
}

console.log(sum([1, 5, 3, 2])); // 11

// 挑戰題: 有幾種寫法？

// 遞迴方式
function sum(ary){
    let len=ary.length;
    if(len==0){
        return 0;
    }else if (len==1){
        return ary[0];
    }else{
        return ary[0]+sum(ary.slice(1));
    }
}


// forEach的寫法
function sum(ary) {
	let sum=0;
    ary.forEach(function(element){
        sum+=element;
    });
    return sum;
}

// eval方式
function sum(ary){
    return eval(ary.join("+")); 
}

// 如果 sum 函式的 input 是 n，然後要回傳 1 + 2 + 3 + … + n 的話，一樣不能用 for, while 寫，要怎麼做？
// 梯形公式
function sum_n(n){
    return (1+n)*n/2;
}

console.log(sum_n(5))