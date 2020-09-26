const express = require('express')
const {create, read} = require('../controllers/fruitsControllers');

const router = express.Router()

router.post('/',create);
router.get('/', read);

module.exports = router;