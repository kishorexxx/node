// Import the express library
const express = require('express');

//create new express application or object
const app = express();

const port = 3000;

app.get("/",(req, res) => {
    res.send("hello from express!!!");
    });
    
// define a route for the homepage
app.get("/home",(req, res) => {
res.send("hello from homepage!!!");
});

app.listen(port, () => {
    console.log(`server is running on http:localhost:${port}`);
})