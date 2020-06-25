const express = require('express');
const path = require('path')

//const postController = require('../controllers/post.controller');
const postController = require('../controllers/post.controller');


const insertrouter = express.Router();

insertrouter.post('/employee',postController.insert_employee).get('/employee',(req,res)=>{
    res.sendFile(path.join(__dirname,'../views/employee.html'))
})

module.exports = insertrouter;