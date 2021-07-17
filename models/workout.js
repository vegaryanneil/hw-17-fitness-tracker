const mongoose = require("mongoose");

// Mongoose Schema
const Schema = mongoose.Schema;

// Create New Workout
const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercise: [
        {
            name: {
                type: String,
                enum: ["Resistance", "Cardio", "Sports"],
                required: "Enter Exercise Name",
            },
            type: {
                type: String,
                trim: true,
                required: "Enter Excercise Type",
            },
            distance: {
                type: Number
            },
            duration: {
                type: Number,
                required: "Enter Exercise Duration",
            },
            weight: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            reps: {
                type: Number,
            }
        }
    ]
})

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;