// main.js
// TODO 以 Module 的方式匯入，例如:
import Stack from './stack.js';

let stack = new Stack();
stack.print();

// 測試push功能
stack.push(5);
stack.push(8);
stack.print();

// TODO: 應該還要做哪些測試，以驗證自己開發的 stack 是沒有問題的？

// pop 功能：移除並回傳 stack 頂部的元素
// Test Description:檢查 pop功能 顯示
console.log(stack.pop()); // 8
stack.print() // 5

// 將stack移除至空值
console.log(stack.pop()); // 5
stack.print() // 空值

// Test Description:檢查 stack已是空值時，pop功能 顯示
console.log(stack.pop()); // undefined 

// Test Description:檢查 stack已是空值時，連續使用pop功能 顯示
console.log(stack.pop()); // undefined
console.log(stack.pop()); // undefined

// peek 功能：回傳 stack 頂部的元素，但不移除它
// Test Description:檢查 peek功能 顯示
// stack目前為空值，先新增10,7
stack.push(10);
stack.push(7); // stack目前為空值，先新增10,7
stack.print()

// Test Description:檢查 pop後，peek功能 顯示
stack.pop();
console.log(stack.peek()); // 10

// Test Description:檢查 stack為空值時，peek功能 顯示
stack.pop();
console.log(stack.peek()); // undefined

// isEmpty功能：檢查 stack 是否為空
// Test Description:檢查 stack為空值時，isEmpty 顯示
stack.print(); // 先確認stack目前為空值
console.log(stack.isEmpty()); // true

// Test Description:檢查 stack不為空值時，isEmpty 顯示
stack.push(10); // 先加入元素10
stack.print(); // 先確認stack不為空值
console.log(stack.isEmpty()); // false

// size 功能：回傳 stack 中元素的個數
// Test Description: 檢查 stack不為空值時，size 顯示
stack.print(); // 10
console.log(stack.size()); // 1

// Test Description: 檢查 stack為空值時，size 顯示
stack.pop(); // 1
stack.print(); // 空值
console.log(stack.size()); // 0 

// clear 功能：清空 stack 
// Test Description: 檢查 stack為空值時，clear後 顯示
stack.print(); // 空值
stack.clear(); 
stack.print(); // 空值

// Test Description: 檢查 stack不為空值時，clear後 顯示
stack.push(19); //先新增元素19
stack.print(); // 19
stack.clear(); // 清空
stack.print(); // 空值

// print 功能：印出 stack 內容
// Test Description: 檢查 stack為空值時，print 顯示
stack.print(); // 空值

// Test Description: 檢查 stack有一個元素時，print 顯示
stack.push(14);
stack.print(); // 14

// Test Description: 檢查 stack有多個元素時，print 顯示
stack.push(12);
stack.print(); //14,12

// Test Description: 檢查 stack有重複元素時，print 顯示
stack.push(12);
stack.print(); //14,12,12

stack.clear();
// push 功能：在 stack 頂部加入元素i
// Test Description: 檢查 push功能 顯示
stack.push(13);
stack.print(); // 13
