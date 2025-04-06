const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const code = req.query.code;
  if (code) {
    res.redirect('InstagramProject://oauth-callback/instagram?code=${encodeURIComponent(code)}');
  } else {
    res.send('Missing code.');
  }
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));