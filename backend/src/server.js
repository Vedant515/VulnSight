const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const scanRoutes = require("./routes/scanRoutes");
require("dotenv").config();
 
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/scans", scanRoutes);

app.get("/" ,(req,res) => {
    res.json({message: "Backend working properly"});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT , ()=>{
    console.log(`Vulnsight server is running on port ${PORT}`);
});