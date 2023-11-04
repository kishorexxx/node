const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema({
  name: String,
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }],
});

const Mentor = mongoose.model("Mentor", mentorSchema);

module.exports = Mentor;