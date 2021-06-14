const mongoose = require("mongoose");

// Mongoose Schema
const schema = mongoose.Schema;

// Create New Workout
const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercise: [
        {
            name: {
                type: String,
                enum: ["Resistance", "Cardio", "Sports"],
                required: "Enter Exercise Name"
            },
        }
    ]
})