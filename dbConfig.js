const mongoose = require("mongoose");
const { db } = require("./models/jobModel");

async function initDB(){
  try{
    console.log("hello")
    await mongoose.connect(process.env.MONGO_URL, {dbName: "jobportal"})
    console.log("Connected to DB successfully")
  
  } catch (error) {
    console.log("error connecting to DB", error)
    process.exit()
  } 
}


module.exports ={
    initDB
}

