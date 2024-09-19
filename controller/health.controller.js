const HealthModel = require("../models/health.model");

const addHealthRecord = async (req, res) => {
  const { date, bodyTemperature, bloodPressure, heartRate } = req.body;

  
  
  try {
    if (
      date == "" ||
      bodyTemperature == "" ||
      bloodPressure == "" ||
      heartRate == ""
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const healthRecord = await HealthModel.create({
      date,
      bodyTemperature,
      bloodPressure,
      heartRate,
    });
    if (healthRecord) {
      return res
        .status(201)
        .json({ message: "Health record added successfully" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getHealthRecords=async(req,res)=>{

    try {
        
        const healthRecords= await HealthModel.find({})
    
        res.status(200).json({healthRecords})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
const  getHealthRecord=async(req,res)=>{
    try {
        
        const {id}=req.params
       
        const healthRecord=await HealthModel.findById(id)
        if(healthRecord){
            res.status(200).json({healthRecord})
        }

    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const updateHealthRecord=async(req,res)=>{
    try {
        const {id}=req.params
        const {date,bodyTemperature,bloodPressure,heartRate}=req.body
        const healthRecord=await HealthModel.findByIdAndUpdate(id,{date,bodyTemperature,bloodPressure,heartRate})
        if(healthRecord){
            res.status(200).json({message:"Health record updated successfully"})
        }
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const deleteHealthRecord=async(req,res)=>{
    try {
        const {id}=req.params
        const healthRecord=await HealthModel.findByIdAndDelete(id)
        if(healthRecord){
            res.status(200).json({message:"Health record deleted successfully"})
        }
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

module.exports={
    addHealthRecord,
    getHealthRecords,
    getHealthRecord,
    updateHealthRecord,
    deleteHealthRecord
}