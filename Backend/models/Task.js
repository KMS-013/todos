const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 100,
    trim: true,
  },
  isCompleted: { type: Boolean, default: false },
  priority: { type: String, enum: ["a", "b", "c", "d"], default: "D" },
  dueDate: Date,
  userId: { type: mongoose.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Task", taskSchema);
