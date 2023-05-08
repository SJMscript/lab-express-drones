const express = require("express");
const router = express.Router();

const Drone = require("../models/Drone.model");
// require the Drone model here

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find()
    .then((drones) => {
      console.log(drones);
      res.render("drones/list.hbs", {
        allDrones: drones,
      });
    })
    .catch((err) => {
      next(err);
    });
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  Drone.find()
    .then((response) => {
      console.log(response);
      res.render("drones/create-form.hbs", {
        newDrone: response,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  Drone.create({
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
  }).then((response) => {
    console.log("Drone creado", response);
    res.redirect("/drones");
  })
  .catch((err) => {
    next(err);
  })
});


router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  Drone.findById(req.params.id)
  .then((drone) => {
        console.log(drone);
        res.render("drones/update-form.hbs", {
          updateDrone: drone
        })
      })
      .catch((err) => {
        next(err);
      })
});


router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  Drone.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  },{new: true})
  .then(() => {
    res.redirect("/drones");
  })
  .catch((err) =>{
    next(err);
  })
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  Drone.findByIdAndRemove(req.params.id)
   .then((response) => {
      console.log("Drone eliminado")
      res.redirect("/drones"); 
   })
   .catch((err) => {
    next(err);
   })
});

module.exports = router;
