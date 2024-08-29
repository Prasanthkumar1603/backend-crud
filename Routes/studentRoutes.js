const express = require('express');
const multer = require('multer');
const path = require('path');
const studentController = require('../Controllers/studentController');

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

router.post('/', upload.single('image'), studentController.createStudent);
router.get('/', studentController.getStudents);
router.get('/:id', studentController.getStudent);
router.put('/:id', upload.single('image'), studentController.updateStudent);
router.delete('/:id', studentController.deleteStudent);

module.exports = router;
