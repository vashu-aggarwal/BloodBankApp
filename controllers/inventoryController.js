const userModel = require("../models/userModel");
const inventoryModel = require("../models/inventoryModel");
const mongoose = require("mongoose");
const createInventoryController = async (req, res) => {
  try {
    //validation
    const { email } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) {
      throw new Error("User Not Found");
    }

    // if (inventoryType === "in" && user.role !== "donar") {
    //   throw new Error("Not a donar account");
    // }
    // if (inventoryType === "out" && user.role !== "hospital") {
    //   throw new Error("Not a hospital");
    // }

    if (req.body.inventoryType == "out") {
      const requestedBloodGroup = req.body.bloodGroup;
      const requestedQuantityOfBlood = req.body.quantity;
      const organisation = new mongoose.Types.ObjectId(req.body.userId);
      //calculate Blood Quanitity
      const totalInOfRequestedBlood = await inventoryModel.aggregate([
        {
          $match: {
            organisation,
            inventoryType: "in",
            bloodGroup: requestedBloodGroup,
          },
        },
        {
          $group: {
            _id: "$bloodGroup",
            total: { $sum: "$quantity" },
          },
        },
      ]);
      // console.log("Total In", totalInOfRequestedBlood);
      const totalIn = totalInOfRequestedBlood[0]?.total || 0;
      //calculate OUT Blood Quanitity

      const totalOutOfRequestedBloodGroup = await inventoryModel.aggregate([
        {
          $match: {
            organisation,
            inventoryType: "out",
            bloodGroup: requestedBloodGroup,
          },
        },
        {
          $group: {
            _id: "$bloodGroup",
            total: { $sum: "$quantity" },
          },
        },
      ]);
      const totalOut = totalOutOfRequestedBloodGroup[0]?.total || 0;

      //in & Out Calc
      const availableQuanityOfBloodGroup = totalIn - totalOut;
      //quantity validation
      if (availableQuanityOfBloodGroup < requestedQuantityOfBlood) {
        return res.status(500).send({
          success: false,
          message: `Only ${availableQuanityOfBloodGroup}ML of ${requestedBloodGroup.toUpperCase()} is available`,
        });
      }
      req.body.hospital = user?._id;
    } else {
      req.body.donar = user?._id;
    }

    // save record
    const inventory = new inventoryModel(req.body);
    await inventory.save();
    return res.status(200).send({
      success: true,
      message: "New Blood Record Added",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      message: "Error in Create Inventory API",
      error,
    });
  }
};

const getInventoryController = async (req, res) => {
  try {
    const inventory = await inventoryModel
      .find({
        organisation: req.body.userId,
      })
      .populate("donar")
      .populate("hospital")
      .sort({ createdAt: -1 });
    return res.status(200).send({
      success: true,
      message: " Get Inventory Record successfully ",
      inventory,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      message: "Error in Get Inventory API",
      error,
    });
  }
};

// GET HOSPITAL BLOOD RECORD 
const getInventoryHospitalController = async (req, res) => {
  try {
    const inventory = await inventoryModel
      .find(req.body.filters)
      .populate("donar")
      .populate("hospital")
      .populate("organisation")
      .sort({ createdAt: -1 });
    return res.status(200).send({
      success: true,
      message: " Get Hospital Consumer Record successfully ",
      inventory,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      message: "Error in Get Hospital Consumer API",
      error,
    });
  }
};

//GET DONAR RECORDS

const getDonarController = async (req, res) => {
  try {
    const organisation = req.body.userId;
    // final donar
    const donarId = await inventoryModel.distinct("donar", {
      organisation,
    });
    const donars= await userModel.find({_id:{$in: donarId}})

    return res.status(200).send({
      success: true,
      message: "Donar Records Fetched Successfully",
      donars,
    })
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Donar records",
      error,
    });
  }
};

//GET HOSPITAL RECORDS

const getHospitalController = async (req, res) => {
  try {
    const organisation = req.body.userId;
    // final hospital
    const hospitalId = await inventoryModel.distinct("hospital", {organisation});
    const hospitals= await userModel.find({_id:{$in: hospitalId}})

    return res.status(200).send({
      success: true,
      message: "Hospital Records Fetched Successfully",
      hospitals,
    })
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Hospital records",
      error,
    });
  }
};

const getOrganisationController =async (req,res)=>{
    try {
        const donar =req.body.userId;
        const ordId= await inventoryModel.distinct("organisation",{donar});
        // find org
        const organisations= await userModel.find({
          _id:{$in:ordId},
        });
        return res.status(200).send({
          success: true,
          message:"Org Data Fetched Successfully",
          organisations,
        });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        success: false,
        message: "Error in Get Organisation API",
        error,
      })
    }
}
const getOrganisationForHospitalController =async (req,res)=>{
    try {
        const hospital =req.body.userId;
        const ordId= await inventoryModel.distinct("organisation",{hospital});
        // find org
        const organisations= await userModel.find({
          _id:{$in:ordId},
        });
        return res.status(200).send({
          success: true,
          message:"Hospital Org Data Fetched Successfully",
          organisations,
        });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        success: false,
        message: "Error in Get Hospital Organisation API",
        error,
      })
    }
}

module.exports = {
  createInventoryController,
  getInventoryController,
  getInventoryHospitalController,
  getDonarController,
  getHospitalController,
  getOrganisationController,
  getOrganisationForHospitalController
};
