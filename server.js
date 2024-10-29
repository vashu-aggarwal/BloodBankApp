const express = require('express');

//res object

const app=express();
//Routes
//test route

app.get('/',(req,res)=>{
    res.status(200).json({
        message:'Welcome to the Blood Bank App',
    })
})

//PORT

const PORT=8080

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})