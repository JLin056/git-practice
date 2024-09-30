const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // 設置環境變數，沒設定的話 預設3000

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})