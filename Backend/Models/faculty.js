import mongoose from "mongoose";

const facultySchema = new mongoose.Schema({
  name: String,
  facultyNumber: String,
  Department: String
});

const Faculty = mongoose.model("Faculty", facultySchema, "Faculties");
export default Faculty;