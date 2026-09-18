const express = require("express");
const { createScan } = require("../controllers/scanController");

const router = express.Router();

router.get("/",(req,res)=>{
    res.json({
        message: "Scan API is Working"
    });
});

router.post("/",createScan);

module.exports = router;  