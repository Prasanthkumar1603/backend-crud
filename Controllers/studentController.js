const Student = require('../Models/studentModel');
const path = require('path');

// Create Student
exports.createStudent = async (req, res) => {
  try {
    const { name, rollNo, age, phoneNumber } = req.body;
    const student = new Student({
      name,
      rollNo,
      age,
      phoneNumber,
      image: req.file ? req.file.path : null,
    });
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get All Students
exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Single Student
exports.getStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Student
exports.updateStudent = async (req, res) => {
  try {
    const { name, rollNo, age, phoneNumber } = req.body;
    const updatedData = { name, rollNo, age, phoneNumber };
    if (req.file) {
      updatedData.image = req.file.path;
    }
    const student = await Student.findByIdAndUpdate(req.params.id, updatedData, { new: true });
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete Student
exports.deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json({ message: 'Student deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
