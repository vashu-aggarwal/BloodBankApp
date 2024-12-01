const express = require("express");
const authMiddleware = require("../middleWare/authMiddleware");
const {
  createInventoryController,
  getInventoryController,
  getDonarController,
  getHospitalController,
  getOrganisationController,
  getOrganisationForHospitalController,
  getInventoryHospitalController,
} = require("../controllers/inventoryController");

const router = express.Router();

//routes INVENTORY || POST
router.post("/create-inventory", authMiddleware, createInventoryController);

//GET ALL BLOOD RECORDS
router.get("/get-inventory", authMiddleware, getInventoryController);

//GET HOSPIAL BLOOD RECORDS
router.post(
  "/get-inventory-hospital",
  authMiddleware,
  getInventoryHospitalController
);

//GET ALL DONAR RECORDS
router.get("/get-donars", authMiddleware, getDonarController);

//GET ALL HOSPITAL RECORDS
router.get("/get-hospitals", authMiddleware, getHospitalController);

//GET ALL ORGANISATION RECORDS
router.get("/get-organisation", authMiddleware, getOrganisationController);

//GET ALL ORGANISATION RECORDS
router.get(
  "/get-organisation-for-hospital",
  authMiddleware,
  getOrganisationForHospitalController
);
module.exports = router;
