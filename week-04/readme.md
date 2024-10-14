## To do list
- [x] 實作
- [x] Readme 問題回答

##  Readme 回答
1. Public IP
52.65.5.19

2. 什麼是 Instance type ?  
就像是買電腦時選擇自己的 CPU 和 RAM，Instance type 其實就是 Virtual Machine (VM) 的規格。  
Instance type 包含 vCPU、Memory、Instance Storage（可用儲存空間類型）、Network Bandwidth（網路頻寬）、EBS Bandwidth（EBS 頻寬）  
以本次實作的 t2.micro 為例，t 代表用途， 2 代表第二代，micro 表示規格

3. Nginx？用途與特性？  
Nginx 是一款開源的 Web Server，可以想像成有一台機器，在我們連接網路時，接受我們 request，再發送 Response 給我們的機器，那這台機器裡面會存一些網頁的資料，也會有其他附加的用途可以應用。  
- 特性：相比於 Apache，Nginx 屬於輕量級且高併發、處理靜態檔案的效率較高、耗費的記憶體較少、負載效能好，很適合做為前端伺服器使用。  
- 主要用途為：反向代理、負載均衡、Http 快取

4. pm2 套件是什麼？有什麼用處？  
pm2 是 Node.js 的程序管理器，可用來簡化很多 node 應用管理的繁瑣任務。  
pm2 可以讓程序一直啟動不 crash，而且當程式碼更改時，可以再不中斷服務的情況下更新服務。  
- 用途：  
在 node 服務 crash / server 重啟 後，自動重啟  
可利用 CPU 多核，開啟多程序，以達到負載平衡的效果  
提供多項監控資訊，包括 重啟次數、CPU 用量、memory 用量、process id...等等  

5. 步驟 9 中提到的 proxy 是什麼意思？為什麼要透過 Nginx 來 proxy 到 Express 開發的 Web Server?  
proxy 是網路代理，代理網路用戶去取得網路資訊，可以分成 Forward Proxy（正向代理）和 Reverse Proxy（反向代理），其中  
- 正向代理：代理用戶端，伺服器不知道真實用戶端，通常用於突破網路限制
- 反向代理：代理伺服器端，用戶端不知道真實伺服器端，通常用於提高服務品質的設計，步驟 9 提到的 proxy 即為反向代理。  
  
- Nginx 像是守門員，可以 負載平衡（如果 Express 需要同時處理很多用戶請求的話，Nginx 可以將請求分散到多個 Express 上）、加快靜態檔案處理效率、隱藏 Express 伺服器真實位置，並且可以過濾惡意請求  

6. 在 readme 中提供步驟 9 的 Nginx 設定檔  
```
server {
    listen 80;
    server_name 52.65.5.19;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
    }
}
```

7. Security Group 是什麼？用途為何？有什麼設定原則嗎？  
Security Group 是 EC2 的外層流量防火牆，可以控制連進來的人。  
- 用途：可以設定限制流入到 instance 的流量（Inbound Traffic/Ingress）和 從 Instance 流出的流量（Outbound Traffic/Engress）。  
- 設定原則：最小權限原則（只允許必要的流量進出）、指定 IP 或網段、針對不同需求，設計不同的入站 與 出站規格（通常 入站較嚴格，出站較寬鬆）

8. 什麼是 sudo? 為什麼有的時候需要加上 sudo，有時候不用？  
sudo 其實是「Super User DO」的縮寫，代表這個指令是透過 Super User 所執行的（Super User 是 擁有電腦最高權限的電腦管理員，可以讀寫這台電腦中的任何檔案）。  
若要更改電腦的網路設定、查看某些密鑰、更改系統設定...等等，則需要加上 sudo。因此，若只是操作個人檔案，或啟動已有適當權限的應用程式則不需要使用 sudo，避免指令使用不當的情況。  

9. Nginx 的 Log 檔案在哪裡？你怎麼找到的？怎麼看 Nginx 的 Log？  
因為在步驟 9 的時候，一直沒有連成功，所以當時找了一些解決文章，有提到，找到 log 檔的。  
有兩個 Log 檔，為 access.log 和 error.log，通常在 /var/log/nginx/ 目錄下。  
若是要及時查看最新的請求或錯誤，可以輸入 ```tail -f /var/log/nginx/error.log``` 查看 error.log

10. 其他你在過程中遭遇的問題，有找到解答就記錄下來，沒有可以把問題放著，下次上課討論。如果沒有遇到任何問題，也可以回答「無」  
在步驟 9 時，一直沒有連成功，並顯示 502 Bad Gateway，我以為是 Nginx 的問題，查了很多資料也卡了很久，結果發現是我沒有 npm install。


11. 參考資料
- Instance type  
https://ithelp.ithome.com.tw/m/articles/10295411

- Nginx  
https://pink-learn-frontend.medium.com/前端學nginx-什麼是nginx-fc604db20ad1  
https://www.explainthis.io/zh-hant/swe/why-nginx  
https://pink-learn-frontend.medium.com/前端學nginx-什麼是nginx-fc604db20ad1  

- pm2  
https://medium.com/jason-tech-lab/node-js%E7%B3%BB%E5%88%97-%E4%BD%BF%E7%94%A8-pm2-%E4%BE%86%E7%AE%A1%E7%90%86node-js-%E6%9C%8D%E5%8B%99-3f514cf8eed9

- proxy  
https://www.pressplay.cc/project/F720CEB1D6057D7ABB5614722AB18FFF/articles/660A57208C29FF94453548ED21F284EF  

- Security Group  
https://ithelp.ithome.com.tw/articles/10264200  

- sudo  
https://yhtechnote.com/linux-sudo/  

- 實作  
https://5xruby.com/zh/articles/starting-ec2-instance  
https://ui-code.com/archives/667  
https://medium.com/廢物到工程師的進化過程/世界第一詳細的aws解説系列-翻譯文-b71481c93629  
https://ithelp.ithome.com.tw/articles/10188498  
https://medium.com/前端壹兩三事/聊聊關於基本的-nginx-reverse-proxies-and-nodejs-express-web-server-2a1c8e7e7de1  
https://hackmd.io/@warrenpig/create-self-signed-https-nginx-app  

12. 如果你很初學，不放心自己的過程是否正確，可以紀錄過程，我會盡量幫忙看  
做的過程中，我有記錄過程，但想說過程目前沒問題，就不麻煩老師。  
不過想跟老師分享 這個紀錄 救了我（中間跳掉好幾次，都是透過看過程，成功連回去的><），也在記錄的過程中，更了解自己在做什麼，是一個很好的學習方法！！