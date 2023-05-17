const {
    login,
    register,
   
  } = require("../controllers/userControllers");
  



const Router = require('express').Router();


    Router.post('/register', register);
    Router.post('/login', login);



module.exports = Router;