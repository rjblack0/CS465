const express = require("express");
const router = express.Router();

// This is where we import the controllers we will route
const tripsController = require("../controllers/trips");

router
    .route('/trips')
    .get(tripsController.tripsList) // GET Method routes tripList
    .post(tripsController.tripsAddTrip); //POST Method adds a trip

// GET Method routes tripsFindByCode = requires parameter

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip);

module.exports = router;