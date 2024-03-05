const express = require('express');
const {adminController} = require('../controller/adminController');
const { myValidator } = require('../../validator/myValidator');
const adminRoute = express.Router();

adminRoute.post('/register',myValidator,adminController);


module.exports = {adminRoute};

