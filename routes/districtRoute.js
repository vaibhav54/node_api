const express = require('express')
const {demoCreate} = require('../controllers/districtControllers');

const router = express.Router();
router.get('/', demoCreate);

module.exports = router;
