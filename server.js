const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const connectDB = require("./config/db");
const path = require("path");

dotenv.config();
if (process.env.NODE_ENV !== "production") {
  console.log("MONGO_URL:", process.env.MONGO_URL);
}
connectDB();

//res object
const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// 1 test Routes
app.use("/api/v1/test", require("./routes/testRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));

//  STATIC FOLDERS
app.use(express.static(path.join(__dirname, "./client/build")));

//STATIC ROUTES
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
//PORT

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(
    `Node server Running in ${process.env.DEV_MODE} - mode on Port ${process.env.PORT}`
      .bgBlue.white
  );
});
