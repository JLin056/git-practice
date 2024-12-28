## AWS Region & AZ(availability zones)
### Region
AWS 服務的地理區域，每個 Region 之間都是獨立的，並且資料不會跨 Region 複製

### AZ(availability zones)
由一或多個分散的資料中心組成，每個都是獨立運作的資料中心，也就是說 一個 AZ 故障，並不影響其他 AZ。

## 如果你要使用 AWS 服務，你會怎麼選擇用哪個 Region，考慮的因素有哪些？
- 選擇 ap-northeast-1（東京）的，其實有離台灣更近的 ap-east-1 （香港），但是這個 Region 並不提供所有服務，因此，選擇東京是我認為最好的選擇。
- 考量的因素：距離最近、服務完整度
    - 距離最近：若假設各地服務完整度都相同的話，將區域設置在最近的區域中運行，可以有助於減少延遲
    - 服務完整度：每個區域提供的 AWS 服務不盡相同，會根據需要的服務需求去選擇

### 參考資料
- https://ithelp.ithome.com.tw/m/articles/10192075
- https://ithelp.ithome.com.tw/articles/10346073

## 我對兩種寫法（callback 和 promise）的看法
對當初初學者的我來說，callback 是較簡單的，可能是因為每做一件事往後一格，讓我覺得比較清楚跑到哪一步了。但也可以想像到 當內容一多時，縮排會讓程式碼長得多可怕。  
不過目前寫了幾個月，有感覺到 promise 比較結構化，並且可以搭配 async & await，也不會因為縮排，導致 debug 很痛苦  


