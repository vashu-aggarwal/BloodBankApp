const express = require('express');
const authMiddleware = require('../middleWare/authMiddleware');
const { createInventoryController, getInventoryController, getDonarController } = require('../controllers/inventoryController');

const router = express.Router();

//routes INVENTORY || POST
router.post('/create-inventory',authMiddleware,createInventoryController)
router.get('/get-inventory',authMiddleware, getInventoryController)
router.get('/get-donars',authMiddleware, getDonarController)
module.exports = router;