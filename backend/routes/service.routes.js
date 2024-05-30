const express = require("express");
// Call the router method from express to create the router
const router = express.Router();
//Import the middleware
const serviceController = require("../controllers/service.controller");
router.post("/api/service/common", 
serviceController.createServices);

// Create a route to handle the add service request on post
router.post("/api/service/add", 
serviceController.addService);
//
// Create a route to handle the get all services request on get
router.get("/api/service/all", 
serviceController.getAllServices);
// Create a route to handle the get service by ID request on get
router.get(
  "/api/service/single/:service_id",
  serviceController.getSingleService
);
// Create a route to handle the edit service request on post
router.put("/api/service/edit", 
serviceController.editService);
// Create a route to handle the delete by id
router.delete(
  "/api/service/delete/:service_id",
  serviceController.deleteService
);

//Export the router
module.exports = router;
