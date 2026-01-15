
// ************************* importing and using express in a different format **************
// const server = require("express");
// const serves = server();
// serves.listen(3000, ()=>{
//     console.log("Server listening on port number 3000");
//})
// console.log("Starting a new project");
// app.use("/",(req , res) => {
//     res.send(" Hello from SERVER!!!  /");
// })
// app.use("/hello",(req , res, next) => {
//     console.log(req.params);
//     next();
//     res.send(" Hello from SERVER!!! route /hello 222222");
// })
// app.use("/abc/abc1",(req , res) => {
//     res.send(" Hello from SERVER!!! route /abc1");
// })
// app.use("/abc",(req , res) => {
//     res.send(" Hello from SERVER!!! route /abc");
// })

const mongoDb = require('./config_or_configuration/database');
const express = require("express");
const app = express();
const User = require('../Model(Database_Structure_OR_Model)/user');

mongoDb()
.then(() => {
    app.listen(3000, ()=>{
    console.log("Server Successfully listening on port number 3000");
    })
})

let middlewareJSON = express.json();
app.use(middlewareJSON);

//  Create sample post API -> to store data in DataBase.
app.post('/signup',async (req, res)=>{
    const user = new User(req.body)
    console.log(req.body);
    try{
        await user.save();
        res.send("Signup data added/saved successfully to the database");
    }
    catch(err)
    {
        console.error("data not addded to db: "+err.message);
    }
})

// Feed_API -> to get all the users data
// app.get('/feed',async (req, res)=>{

//     let userEmailId = req.body.emailId

//     try{
//         const user = await User.findOne({emailId: userEmailId })
//         console.log(user);
//         if(!user)
//         {
//             res.send("users with this emailid don't EXIST, check it once bro!!!😥😥")
//         }
//         res.send(user);
//     }
//     catch(err)
//     {
//         res.status(404).send("Something went wrong bro!!!😥😥")
//     }
// })

app.get('/feed',async (req, res)=>{

    try{
        const user = await User.find({})
        console.log(user);
        // if(!user)
        // {
        //     res.send("users with this emailid don't EXIST, check it once bro!!!😥😥")
        // }
        res.send(user);
    }
    catch(err)
    {
        res.status(404).send("Something went wrong bro!!!😥😥")
    }
})

// app.use("/hello",(req , res,next) => {
//     console.log(req.params);
//     next();
//     res.send(" hello from SERVER!!! route /hello 11111");
// })