const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>AutoScaling App</h1> <h4>Message: Successful</h4> <p>Version: 1.0.0</p>');
})

app.listen(port, () => {
    console.log(`Demo app is up and listening to port ${port}`);
})
