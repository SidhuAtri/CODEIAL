const express = require('express');
const router = express.Router();
const homecontroller = require('../controllers/home_controller');

router.get('/',homecontroller.home);
router.use('/users',require('./users'));

//for any further routes excess from here
//router.use('/routername',require('./routerfile'));

console.log("Router Loaded");

module.exports = router;