// Import necessary modules
const express = require("express");
const router = express.Router();
const vehicleController = require("../controllers/vehicle.controller");

// Create a route to handle the get vehicle by ID request on get
router.get(
  "/api/vehicle/:vehicle_id",
  [authMiddleware.verifyToken, authMiddleware.isAdmin],
  vehicleController.getVehicleById
);

// Export the router
module.exports = router;