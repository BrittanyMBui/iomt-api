const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('<h1>IOMT</h1>')
})

app.listen(PORT, () => {
    console.log(`Local host is listening at ${PORT}`);
})