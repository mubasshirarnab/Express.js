const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Define a route handler for the root URL ("/")
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Define a route handler for POST requests to "/data"
app.post('/data', (req, res) => {
    const data = req.body;
    console.log('Received data:', data);
    res.send('Data received successfully!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
