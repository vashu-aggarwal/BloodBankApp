const mongoose = require('mongoose');

const inventoryModel = new mongoose.Schema({
    inventoryType:{
        type: String,
        required: [true,"inventory type require"],
        enum:["in","out"],
    },
    bloodGroup:{
        type:String,
        required:[true,"blood group is required"],
        enum:["A+","A-","B+","B-","O+","O-","AB+","AB-"],
    },
    quantity:{
        type: Number,
        require:[true,"blood quantity is required"],
    },
    email:{
        type:String,
        required:[true,"donar email is required"]
    },
    organisation:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:[true,"organisation is required"],
    },
    hospital:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:function(){
            return this.inventoryType === "out"; 
        },
    },
    donar:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"users",
        required: function(){
            return this.inventoryType === "in";
        },
    },   
},
{timestamps:true}
);

module.exports = mongoose.model('Inventory', inventoryModel);