const express = require('express');
const app = express();
const admin = express();
const port = 3000;

app.use('/admin', admin);

// Define a route handler for the root URL ("/")
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.disable('case sensitive routing'); // This will make the routing case-insensitive, so "/Admin" and "/admin" will be treated the same.

app.enable('strict routing'); // This will make the routing strict, so "/admin" and "/admin/" will be treated as different routes.

//app.allows us to define a route handler for all HTTP methods (GET, POST, etc.) for the specified path.
app.all('/', (req, res) => {
    res.send('Hello World!');
});

//MountPath: /admin
app.get('/admin', (req, res) => {
    res.send('Welcome to the Admin endpoint!');
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
