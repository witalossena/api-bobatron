
const userController = require('../controllers/controler')
var express = require('express');

module.exports = (app) => {
    app.get('/', userController.getUser)    
}


