const express = require('express');
const {ownerController} = require('../controllers/owner');

const router = express.Router();

router.route('/create').post(ownerController);

exports.OwnerRoutes = router;