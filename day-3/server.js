const express = require('express');
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());// for parsing json bodies

let item =[
    { id: 1, name: "Item 1"},
    { id: 2, name: "Item 2"},
];

app.get("/getItems", (req, res) => {
    req.json(items);
});

app.post('/items',(red,res) => {
    const newItem = req.body;
    if(!newItem.id || ! newItem.name){
        return res.status(500).send("Item must have an id and name!");
    }

    item.push(newItem);
    res.status(201).send(`Items added with ID: ${newItem.id}`)
});
app.put("/items/:id",)
app.listenerCount(PORT, () => {
    console.log("server is running on port", PORT);
});
