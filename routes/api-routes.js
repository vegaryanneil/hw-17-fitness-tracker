// Refactored Mini-project
const router = require("express").Router();
const workout = require("../models/workout.js")

router.get("/api/workouts", (req, res) => {
    console.log("ping?")
    workout.aggregate([
        {
            $addFields: {
                totalDuration:{$sum: "$exercises.duration"}
            }
        }
    ])
})

router.post("/api/workouts", (req, res) => {
    workout.create({}).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.put("/api/workouts/:id", ({body, params}, res) =>{
    console.log("ping!", body, params);
    
    workout.findByIdAndUpdate(
        { _id: params.id},
        { $push: { exercises: body} },
        { new: true }
    )
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.status(400).res.json(err);
        });
});

router.get("/api/workouts/range", (req, res) => {
    workout.aggregate([{
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