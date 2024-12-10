const inventoryModel = require("../models/inventoryModel");
const mongoose = require("mongoose");
// GET BLOOD DATA
const bloodGroupDetailsController = async (req, res) => {
  try {
    const bloodGroup = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
    const bloodGroupData = [];
    const organisation = new mongoose.Types.ObjectId(req.body.userId);
    // get single blood group

    await Promise.all(
      bloodGroup.map(async (bloodGroup) => {
        //count total in
        const totalIn = await inventoryModel.aggregate([
          {
            $match: {
              bloodGroup: bloodGroup,
              inventoryType: "in",
              organisation,
            },
          },
          {
            $group: {
              _id: null,
              total: { $sum: "$quantity" },
            },
          },
        ]);
        //count total out
        const totalout = await inventoryModel.aggregate([
          {
            $match: {
              bloodGroup: bloodGroup,
              inventoryType: "out",
              organisation,
            },
          },
          {
            $group: {
              _id: null,
              total: { $sum: "$quantity" },
            },
          },
        ]);
        // calculate

        const availableBlood =
          (totalIn[0]?.total || 0) - (totalout[0]?.total || 0);

        //push data

        bloodGroupData.push({
          bloodGroup,
          totalIn: totalIn[0]?.total || 0,
          totalOut: totalout[0]?.total || 0,
          availableBlood,
        });
      })
    );

    return res.status(200).send({
      success: true,
      message: "Blood Group Details Fetched Successfully",
      bloodGroupData,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      message: "Error in Blood Group Details API",
      error,
    });
  }
};

module.exports = { bloodGroupDetailsController };
