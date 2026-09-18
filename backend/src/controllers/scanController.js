const Scan = require("../models/Scan");
const createScan = async (req , res)=>{
    try{
        const { target } = req.body;
        if(!target){
            return res.status(400).json({
                message: "Target is required"
            });
        }

        const scan = await Scan.create({
            target,
            status: "pending"
        });

        res.status(201).json({
            message: "Scan created successfully",
            scan
        });
    } catch (error){
        res.status(500).json({
            message: "Failed to create scan",
            error: error.message
        });
    }
};

module.exports = {
    createScan
};