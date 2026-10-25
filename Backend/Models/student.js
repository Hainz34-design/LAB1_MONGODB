import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: String,
  course: String,
  studentNumber: String
});

const Student = mongoose.model("Student", studentSchema, "Student");
export default Student;