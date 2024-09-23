// 完成以下 TODO 的部分，並且以 Module 的方式匯出 (ESM)
export default class Stack {
	// TODO: # 有特別的意思嗎？請以註解回覆。
    // #：Private Fields => 讓item這個變數沒辦法在class以外的地方被存取
  #items;

  constructor() {
    this.#items = [];
  }

  // 在 stack 頂部加入元素i
  push(element) {
		this.#items.push(element);
  }

  // 移除並回傳 stack 頂部的元素
  // 不確定是回傳移除的元素還是移除後回傳的元素。目前先寫移除的元素
  pop() {
    if (this.isEmpty()){ // 先判斷目前是不是空的
        return undefined;
    }
		return this.#items.pop();
  }

  // 回傳 stack 頂部的元素，但不移除它
  peek() {
    return this.#items[this.#items.length-1];
  }

  // 檢查 stack 是否為空
  isEmpty() {
    return this.#items.length == 0;
  }

  // 回傳 stack 中元素的個數
  size() {
    return this.#items.length;
  }

  // 清空 stack 
  clear() {
    this.#items = [];
  }

  // 印出 stack 內容
  print() {
    console.log(this.#items.toString());
  }
}