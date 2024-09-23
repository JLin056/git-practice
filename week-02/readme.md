# 安裝的node.js版本
目前安裝的版本是 v20.17.0.
因為跟小組討論過後，當時最新的lts版本為20！
因此，我載入的版本為 v20.17.0.

# nvm 與 npm 分別是什麼
## nvm(Node Version Manager)
（參考資料：https://www.casper.tw/development/2022/01/10/install-nvm/）
用來管理node.js版本，讓電腦可以安裝和切換不同版本的node.js

### 常見指令
利用nvm下載指定版本：
```
nvm install {版本}
```
![image.png](https://github.com/JLin056/git-practice/blob/main/week-02/image/image.png)

選擇想要使用的版本：
```
nvm use {版本}
```
![image-1.png](https://github.com/JLin056/git-practice/blob/main/week-02/image/image-1.png)

檢察目前有下載哪些版本：
```
nvm ls
```
![image-2.png](https://github.com/JLin056/git-practice/blob/main/week-02/image/image-2.png)

決定default的版本：
```
nvm alias default {版本}
```
![image-3.png](https://github.com/JLin056/git-practice/blob/main/week-02/image/image-3.png)


## npm(Node Package Manager)
（參考資料：https://medium.com/html-test/從零開始-使用npm套件-317beefdf182）
可以拿來安裝、管理，專案需要的套件。有了npm就不用一個一個單獨去官網下載套件！

### 常見指令
我們先透過 ``` npm -v ``` 來確認版本。
![image-5.png](https://github.com/JLin056/git-practice/blob/main/week-02/image/image-5.png)

再透過以下指令，新增package.json的檔案。
package.json是用來管理 專案資訊的重要檔案。
```
npm init
```

package.json的檔案會長得像這樣：
![image-4.png](https://github.com/JLin056/git-practice/blob/main/week-02/image/image-4.png)

若想下載套件則是使用下列指令：
```
npm install {套件名稱}
```
但這時容易遇到一個問題，就是當下載了某套件，但package.json沒有更新。
因此，我們改用下列指令，讓他可以自動編輯package.json。
```
npm install {套件名稱} --save
```

另外可以利用
```
npm list
```
確認下載了什麼套件


