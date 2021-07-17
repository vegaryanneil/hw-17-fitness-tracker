const mongoose = require("mongoose");

// Mongoose Schema
const Schema = mongoose.Schema;

// Create new workout schema
const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      name : {
        type: String,
        enum: ["resistance", "cardio"],
        required : "Enter Exercise Name"
      },
      type: {
        type : String,
        trim : true,
        required : "Enter Exercise Type"
      },
      distance : {
        type : Number
      },
      duration : {
        type : Number,
        required : "Enter Exercise Duration"
      },
      weight: {
        type: Number
      },
      sets: {
        type: Number
      },
      reps: {
        type: Number
      }
    }
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);


module.exports = Workout;