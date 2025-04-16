//instance
const mongoose = require("mongoose");
//function
require("dotenv").config();

const dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=> console.log("DB connection established."))
    .catch((err)=>{
        console.log("Issue in DB connection");
        console.error(err);
        process.exit(1);
    });
}

//export

module.exports = dbConnect;