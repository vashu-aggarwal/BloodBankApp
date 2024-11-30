const express = require('express');
const authMiddleware = require('../middleWare/authMiddleware');
const { createInventoryController, getInventoryController, getDonarController, getHospitalController, getOrganisationController } = require('../controllers/inventoryController');

const router = express.Router();

//routes INVENTORY || POST
router.post('/create-inventory',authMiddleware,createInventoryController)
router.get('/get-inventory',authMiddleware, getInventoryController)
router.get('/get-donars',authMiddleware, getDonarController)
router.get('/get-hospitals',authMiddleware, getHospitalController)
router.get('/get-organisation',authMiddleware, getOrganisationController)
module.exports = router;