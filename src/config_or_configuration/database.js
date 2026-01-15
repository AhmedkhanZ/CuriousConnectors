
// Go to MongoDB website
// 2) Create a free M0 cluster
// 3) Get the URI String and connect it our application(server)
// 4) Create a user
// 5) Install MongoDB compass

const mongoose = require('mongoose');

// PTR:-we use "ZOOM" named Cluster in MongoDB
// Cluster String with Password:- "mongodb+srv://Dev_Tinder_DataBase:rWOATeZLro3VPIVk@zoom.q7uaadg.mongodb.net/"
const mongoDB_URI = "mongodb+srv://Dev_Tinder_DataBase:rWOATeZLro3VPIVk@zoom.q7uaadg.mongodb.net/Dev_Tinder_DataBase";

async function Mongodb_connection()
{
    try{

        await mongoose.connect(mongoDB_URI);
        console.log("Cluster Connection Established Successfully.............");
    }
    catch(err){
        console.error("DB Connection Failed............");
    }
}

module.exports = Mongodb_connection;
// .then(() => {
//     console.log("DB Connection is successfully");
// })
// .catch((err)=>{
//     console.error("DB Connection Failed");
// })