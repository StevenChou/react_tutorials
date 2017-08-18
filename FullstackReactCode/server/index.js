// Node js support common js modules ==> require
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

// HEROKU DEPLOYMENT Step 1
// 為了支援 HEROKU 動態產生的 PORT (5000 是在開發環境使用)
const PORT = process.env.PORT || 5000;
app.listen(PORT);
