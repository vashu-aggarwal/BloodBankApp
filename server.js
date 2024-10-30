const express = require('express');
const dotenv= require('dotenv');
const cors= require('cors');
const morgan = require('morgan');
const colors= require('colors');
const connectDB = require('./config/db');

dotenv.config();
console.log("MONGO_URL:", process.env.MONGO_URL); // This should output your MongoDB URL
//connecting to the database
connectDB();

//res object
const app=express();

// middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// 1 test Routes 
app.use('/api/v1/test',require('./routes/testRoutes'));

//PORT

const PORT=process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`Node server Running in ${process.env.DEV_MODE} - mode on Port ${process.env.PORT}`
        .bgBlue.white
    );
});