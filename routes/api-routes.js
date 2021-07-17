// Refactored mini project
const router = require("express").Router();
const Workout  = require("../models/workout.js");

router.get("/api/workouts", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration:{$sum: "$exercises.duration"}
      }
    }
  ]) 
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  console.log("check!", body, params);
  
  Workout.findByIdAndUpdate(
    { _id: params.id },
    { $push: { exercises: body } },
    { new: true }
  )
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).res.json(err);
    });
});

router.post("/api/workouts", ({ body }, res) => {
  console.log("ok");
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.aggregate([{
    $addFields: {
      totalDuration:{$sum: "$exercises.duration"}
    }
  }])
    .sort({_id:-1}).limit(7)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;