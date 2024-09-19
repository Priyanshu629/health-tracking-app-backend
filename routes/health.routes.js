const {
  addHealthRecord,
  getHealthRecords,
  getHealthRecord,
  updateHealthRecord,
  deleteHealthRecord,
} = require("../controller/health.controller");

const router = require("express").Router();

// add health record
router.route("/health-records").post(addHealthRecord);
//retrive all health records
router.route("/health-records").get(getHealthRecords);
//retrive one health record
router.route("/health-records/:id").get(getHealthRecord);
//update one health record
router.route("/health-records/:id").put(updateHealthRecord);
//delete one health record
router.route("/health-records/:id").delete(deleteHealthRecord);

module.exports = router;
