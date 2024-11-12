## 驗屍報告

### 目前問題

目前有一台 NGINX web server，無法正確運作，經排查後，發現有以下問題：  
- Nginx 設定檔，設定錯誤  
- high performance web server  
- 防火牆
- 權限問題

### 修復步驟

#### Nginx 設定檔，設定錯誤  

先檢查 Nginx 設定檔，指令如下：   
```
# 檢查 Nginx 設定檔
sudo nginx -t
```  
  
會出現 error message，如下圖：  
<img src="week-09/assets/image/nginx_error_message.jpg" width=80%>  
  
由 error message 可以發現，在 /etc/nginx/nginx.conf 設定檔裡面多了一個 ";"。  
因此輸入以下指令，將 Nginx 設定檔的 ";" 刪掉。  
```
sudo vim /etc/nginx/nginx.conf
```  
修改過程中，可能會遇到記憶體滿了的問題，請刪除不重要檔案，再回到此步驟。
  
再檢查一次 Nginx 設定檔指令（```sudo nginx -t```），會發現設定檔狀態 ok 了！

#### high performance web server   
  
輸入```sudo systemctl status nginx``` 檢查目前狀態  
<img src="week-09/assets/image/nginx_server_disable.jpg" width=80%>  
  
下方可以看到 **A high performance web server and a reverse proxy server...**  
代表有人佔用 80 port。  
  
輸入以下指令檢查是誰佔用。  
```
sudo lsof -i :80
```  
<img src="week-09/assets/image/lsof_i_80.jpg" width=80%>  
  
將他 kill 掉，指令如下：```sudo kill {PID}```  
  
輸入```sudo systemctl status nginx``` 檢查目前狀態，  
<img src="week-09/assets/image/lsof_i_80.jpg" width=80%>  
可以看到成功了，沒有被佔用了。  

#### 防火牆  
  
上述步驟都做完後，並無連線成功，若用網站的方式，會跳出 **請檢查 Proxy 和 防火牆**，因此聯想到防火牆的問題。（還有好心同學的提示><）  
  
先輸入指令： ```sudo iptables -L```  
<img src="week-09/assets/image/iptables.jpg" width=80%>  
  
會發現它將所有進入的 HTTP（port 80）TCP 流量拒絕(REJECT)，並返回 icmp-port-unreachable 的訊息  
因此，要刪除此規則  
指令：```sudo iptables -D INPUT -p tcp --dport 80 -j REJECT```  

刪掉後，連線網站會出現**403 Forbidden**，請看下面 權限問題 小節

#### 權限問題  
  
連線後，網站出現**403 Forbidden**，如下圖：  
<img src="week-09/assets/image/403.jpg" width=80%>  

懷疑是檔案權限問題，因此先去看檔案存在哪裡  
指令：```sudo vim /etc/nginx/sites-available/default```  
  
<img src="week-09/assets/image/index_html.jpg" width=80%>  
  
可以發現，檔案在 **/var/myweb** 的資料夾，並且名為 **index.html**  
這時先去該檔案夾看 **index.html**  
指令：```cat index.html```  
<img src="week-09/assets/image/cat_index_html.jpg" width=80%>  
  
可以發現我們沒有權限，因此更改權限設置，變成所有人可讀  
指令：```sudo chmod 644 index.html```  
  
<img src="week-09/assets/image/final.jpg" width=80%>  
這樣則成功了！  
  
## 心得  
這麼多個禮拜後，有越來越進入狀況與理解到底在做什麼的感覺，每週都有更進步的感覺，讓我覺得感受很好，也變得比較有自信。    
很喜歡這份作業這樣一步一步檢查的過程，很像在解謎，很有成就感。  
**看懂錯誤訊息 -> 找解決方法**，感覺是面對問題的不二法門與步驟，相比過去的胡亂瞎猜，困惑慌張的感覺也不見了！希望之後開始大海撈針的時候，可以回來看這段話。  

