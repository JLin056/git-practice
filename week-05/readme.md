## 你的網址  
https://www.jlintw.online/

## 哪裡購買網域的  
[GoDaddy](https://tw.godaddy.com/offers/godaddy?isc=sem3year&countryview=1&currencyType=TWD&cdtl=c_20012948307.g_146146597897.k_aud-389927261021:kwd-88659201.a_655882536885.d_c.ctv_g&bnb=b&gad_source=1&gclid=Cj0KCQjw99e4BhDiARIsAISE7P-3nNOlJ38LSLrVGNUSLbUCCdDbVYA5lIEOrWVPW4DDZBybgPBNDccaAgV_EALw_wcB)

## DNS 的 A record 是什麼？DNS 的 NS record 是什麼？
### DNS  
DNS（網域名稱系統） 就像是 網路世界的導航系統。在導航系統中，我們可以輸入 景點名稱（如：政治大學），就可以幫我們導向 該景點的地址（如： 台北市文山區指南路二段 64 號）。DNS 就是類似的作用，我們可以輸入網域名稱（如：google），DNS 則會幫我們導向對應的 IP 位址（如：172.217.14.78）。  
### A record  
為最普遍的 IP 紀錄類型。負責將網域名稱對應到具體的 IPv4 位址（若是 IPv6 位址，則要用 AAAA record）。  
<note>：  
IPv4：以四組 0~255 之間的數字組成 ，像 剛剛範例的 172.217.14.78 則為此。  
IPv6：是為了解決 IPv4 地址耗盡的問題而設計的，以八組四個十六進位制數組成（例如：2333:0db7:96a3:0000:0000:8a2b:0319:7666）  

### NS record  
用來指定哪台權威 DNS 伺服器負責回應這個網域名稱的 DNS 查詢。  
通常每個網域至少會設定兩個 NS record，一個主伺服器和一個備用伺服器。  

## Domain Name vs FQDN vs URL  
- URL  
指一個網頁或資源在網路上的具體位置。由通訊協定、主機名稱（或子網域）與網域組成。  
例如：https://www.jlintw.online/
- Domain Name  
用於資料傳輸時標示電腦的電子方位，可透過 DNS 的解析，轉成電腦看得懂的IP地址。  
一個網域底下可以有很多的子網域  
例如：jlintw.online 是網域名，其中 www 是這個網域的一個子網域  
- FQDN  
完整的域名，包含子網域、頂級網域、根域的名稱。必須以根域（.）結束，通常我們會省略。  
例如：www.jlintw.online.

## 參考資料
- DNS  
https://notesstartup.com/what-is-dns/
