const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollNo: { type: String, required: true },
  age: { type: Number, required: true },
  phoneNumber: { type: String, required: true },
  image: { type: String },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
