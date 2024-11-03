const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true,
    enum: ["donar" , "admin", "hospital", "organisation"],
  },
  name: {
    type: String,
    required: function () {
      return this.role === "donar" || this.role === "admin";
    },
  },
  organisationName: {
    type: String,
    required: function () {
      return this.role === "organisation";
    },
  },
  hospitalName: {
    type: String,
    required: function () {
      return this.role === "hospital";
    },
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  website: {
    type: String,
  },
  address: {
    type: String,
    required: [true, "address is required"],
  },
  phone: {
    type: String,
    required: [true, "phone number is required"],
  },
}, { timestamps: true });  

module.exports = mongoose.model("users", userSchema);
