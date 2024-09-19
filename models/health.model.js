const mongoose = require("mongoose");

const healthSchema = mongoose.Schema(
  {
    date: {
      type: String,
      required: true,
    },

    bodyTemperature: {
      type: String,
      required: true,
    },
    bloodPressure: {
      type: String,
      required: true,
    },
    heartRate: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const HealthModel= mongoose.model("Health",healthSchema);

module.exports=HealthModel;
