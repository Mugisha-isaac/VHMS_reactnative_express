const {createOwner} = require('../services/owner');


module.exports.ownerController = async (req, res) => {
    const owner = await createOwner(req.body);
    if (!owner)
      return res
        .status(400)
        .json({
          success: false,
          message: "Failed to create new owner",
          data: null,
        });
        delete owner.password;
    return res
      .status(201)
      .json({ message: true, message: "owner Created Successfully", data: owner });
  };
