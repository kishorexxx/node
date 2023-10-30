const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;
const DB_URL = "mongodb://0.0.0.0:27017/admin";

app.use(bodyParser.json());

//Define schema
const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    publishedDate: String,
});

const Book = mongoose.model("Book", bookSchema);

//connect to mongoDB
mongoose
.connect(DB_URL, {})
.then(() => console.log('connected to MongoDB'))
.catch((err) => console.log("could not connect MongoDB", err));

app.post("/book", async(req, res) => {
  const book = new Book(req.body);
  try{
    const saveBook = await book.save();
    res.status(201).send(saveBook);
  } catch (err) {
    res.status(400).send(err.message);
  }
});


app.get("/", (req, res) => {
    res.status(200).send("Hi, hello!! Welcome");
});

app.listen(PORT, () => {
    console.log("server is running on PORT:", PORT);
});