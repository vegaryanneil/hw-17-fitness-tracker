const express = require("express");
const mongoose = require("mongoose");

// Followed similar set up to Week 17 activities
// Initialize Server
const app = express();

// Set port up
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Followed Activity 11 to help set up.
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout",
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);
// Routes
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});