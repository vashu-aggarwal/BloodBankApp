const express = require("express");
const authMiddleware = require("../middleWare/authMiddleware");
const {
  getDonarListController,
  getHospitalListController,
  getOrgListController,
  deleteController,
} = require("../controllers/adminController");
const adminMiddleware = require("../middleWare/adminMiddleware");

const router = express.Router();

// GET Donar List  RECORDS

router.get(
  "/donar-list",
  authMiddleware,
  adminMiddleware,
  getDonarListController
);

// GET Hospital List RECORDS
router.get(
  "/hospital-list",
  authMiddleware,
  adminMiddleware,
  getHospitalListController
);

// GET Organisation List  RECORDS
router.get("/org-list", authMiddleware, adminMiddleware, getOrgListController);

// delete donar

router.delete(
  "/delete-donar/:id",
  authMiddleware,
  adminMiddleware,
  deleteController
);

router.delete(
  "/delete-hospital/:id",
  authMiddleware,
  adminMiddleware,
  deleteController
);

router.delete(
  "/delete-org/:id",
  authMiddleware,
  adminMiddleware,
  deleteController
);
//Export
module.exports = router;
