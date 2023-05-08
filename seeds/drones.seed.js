// Iteration #1
const drone = [
  {
    name: "RR4",
    propellers: 4,
    maxSpeed: 120,
  },
  {
    name: "TT2",
    propellers: 2,
    maxSpeed: 100,
  },
  {
    name: "ZZ1",
    propellers: 1,
    maxSpeed: 80,
  },
];

const mongoose = require("mongoose");
const Drone = require("../models/Drone.model.js")
require("../db/index.js")

Drone.create(drone)
.then(()=>{
    console.log("Drones añadidos")
    mongoose.connection.close()
})
.catch((err) => {
    console.log(err)
})  


module.exports = drone 
