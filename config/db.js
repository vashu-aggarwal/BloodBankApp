const mongoose = require('mongoose');
const colors =require('colors');

const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to MongoDB Database ${mongoose.connection.host}`.yellow.bold);
    }
    catch(error){
        console.log(`Mongodb Database Error ${error}`.bgRed.white);
    }
}

module.exports = connectDB;