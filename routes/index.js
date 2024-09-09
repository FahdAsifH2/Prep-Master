const express= require ('express')
const router = require('router')
const indexController=require("./controller/indexController")

router.get('/',indexController.index)