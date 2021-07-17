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
    Workout.create({}).then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})