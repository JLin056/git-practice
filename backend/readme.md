## 建立 Express 專案
### 建立 npm install express
- 觀察 package.json 的變化
使用 ``` npm init ``` ，建立 package.json  
![alt text](/backend/asset/image/npm%20init.png)
使用 ``` npm install express ``` 後，package.json 變成 ![alt text](/backend/asset/image/npm%20install.png)

- 觀察 node_modules 裡面有什麼
（參考資料：https://ithelp.ithome.com.tw/articles/10191783）  
專案要使用的函式庫，會安裝在這個資料夾底下  
觀察下來，一個函式庫會有一個資料夾，裡面放他所需要的東西！  
這樣可以避免衝突問題，但是會較耗費空間。 

### package.json 的 dependencies & devDependencies
（參考資料：https://hackmd.io/@Hsuan93625/HkUdUG8zd#dependencies與devDependencies）
#### dependencies
用途：專案"執行"時所需的套件  
例如：
``` 
"dependencies": {
    "express": "^4.21.0"
}
```
這個例子就代表 express 是專案運行所需要的，如果部署專案或在伺服器上運行時，就會被自動安裝

#### devDependencies
用途：專案在"開發"時所需的套件，通常不會在應用程式運行時使用，只單純在開發時應用  
例如：
```
"devDependencies": {
  "eslint": "^7.21.0"
}
```
eslint 是開發過程中會用來檢查程式碼語法的工具。  
因此，只有在開發時才會使用到，並不會在應用程式運行時用到，所以放在 devDependencies

### package.json 中的 scripts
（參考資料：https://hackmd.io/@Hsuan93625/HkUdUG8zd#dependencies與devDependencies）  
用來定義編寫模組中使用的腳本，像建立 Express 專案的腳本可以這樣寫：
```
"scripts": {
    "start": "node app.js"
}
```
這樣子設置完之後，輸入 ``` npm start ``` 則會自動執行 ``` node app.js ``` 的指令，如下圖：
![alt text](/backend/asset/image/npm%20start.png) 

### Port number 要怎麼以環境變數來設定？
我將原本的 ```const port = 3000; ``` 改成 ``` const port = process.env.PORT || 3000; // 設置環境變數，沒設定的話 預設3000 ``` 
因此，若想用 scripts 的腳本時，就可以輸入 ``` PORT=5000 npm start ``` 就會變成不同的端口

### 關於哪些檔案應該要被放上 github repo 這個問題，描述看看為什麼你選擇上傳某些檔案、選擇不上傳某些檔案，決策的要素是什麼？
- 選擇上傳：app.js, package.json, package-lock.json, readme.md, asset/image
- 不選擇上傳：node_modules
- 決策的要素：必要的檔案（例如image沒有上傳，圖片就不能顯示 或是 package.json 沒上傳，就不能說明需要什麼套件...等等，讓其他人更了解專案）

### CJS & ESM
（參考資料：https://vocus.cc/article/649cc0e0fd89780001a7d34d）
- CJS
用 require 函數來導入模塊，module.exports 或 exports 定義導出的內容

- ESM
從ES6開始引入，用 import 和 export 定義和導入模塊。  
為目前主流的模塊系統，並且為 JavaScript 的官方模塊系統。

- CJS vs ESM
語法不同，CJS 用 require、module.exports，ESM 用 import、export  
ESM 需要在 script 標籤使用 type = "module" ，CJS 用於 Node.js 

### localhost
（參考資料：https://www.freecodecamp.org/news/what-is-localhost/）  
把電腦自身當作"伺服器"，在本機運行網站進行測試，而不是連接到網際網路。  
localhost 通常搭配 port number，讓一台電腦可以同時運行多個伺服器

### curl 是什麼？查查看怎麼用 curl 來測試網路連線？常用參數有哪些？
（參考資料：https://blog.techbridge.cc/2019/02/01/linux-curl-command-tutorial/）
#### curl
是在 Linux 上用來透過 HTTP Protocol 下載和上傳檔案的指令。  
通常基本用法是：
```
curl {URL}
```
就會回傳 response

用下列指令下載圖片：
```
curl -o {想下載的檔名} {URL}
```
或是
```
curl -0 {URL}
```

#### 測試網路連線
簡單的測試方式是：
```
curl {URL}
```
以 google 為例，我輸入：
``` curl https://www.google.com ``` 
則會回傳 HTML 內容，如下圖：
![alt text](/backend/asset/image/curl.png)

若只想顯示狀態，測試方式則為：
``` 
curl -I https://www.google.com
```
則會回傳 HTTP header，如下圖 200 則為連線成功。
![alt text](/backend/asset/image/curl%20-I.png)

#### 常用參數
- -I：僅顯示 HTTP header 資訊
- -X：指定 HTTP 方法（GET、POST、PUT、DELETE 等）
- -d：發送 POST 請求，指定要傳送的數據
- -o：指定內容寫入哪
- -w：自己定義輸出格式，顯示額外的資訊