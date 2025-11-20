
// ************************* importing and using express in a different format **************
// const server = require("express");
// const serves = server();
// serves.listen(3000, ()=>{
//     console.log("Server listening on port number 3000");
// })
// console.log("Starting a new project");

const express = require("express");
const app = express();
app.listen(3000, ()=>{
    console.log("Server listening on port number 3000");
})

// app.use("/",(req , res) => {
//     res.send(" Hello from SERVER!!!  /");
// })
app.use("/hello",(req , res) => {
    res.send(" Hello from SERVER!!! route /hello");
})
app.use("/abc",(req , res) => {
    res.send(" Hello from SERVER!!! route /abc");
})