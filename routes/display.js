const express = require('express');
//const postController = require('../controllers/post.controller');
const postController = require('../controllers/post.controller');


const displayrouter = express.Router();



//router.get("/",postController.index);
displayrouter.get('/employee',postController.display_employee);


module.exports = displayrouter;