//import the express library
const express=require("express");

//create new express application
const app=express();

const PORT=3000;

app.get("/",(req,res)=>{
  res.send("Hello from express!!!");
});

//Define a route for the homepage

app.get("/home",(req,res)=>{
  res.send("Hello from Home Page!!!");
});

app.listen(PORT,()=>{
  console.log(`Server is running on http://localhost:${PORT}`);
});