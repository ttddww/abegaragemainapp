//Import the express module
const express = require('express');
//Call the router method from the express to create the router
const router = express.Router();

//Import the customer routes
// const customerRouter = require("./customer.routes");
//Import the install router 
const installRouter = require('./install.routes');
//Import the employee routes
const employeeRouter = require("./employee.routes");
//Import the login routes
const loginRoutes=require("./login.routes")

//Add  the customer router to the main router
// router.use(customerRouter);
//Add the install router to the main router
router.use(installRouter);
//Add  the employee router to the main router
router.use(employeeRouter)
//Add  the login routes to the main router
router.use(loginRoutes)

//Export the router
module.exports = router;
