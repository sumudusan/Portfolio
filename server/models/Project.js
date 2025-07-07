import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({

  projectId : {
     type : String,
    required : true,
    unique : true,
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  },
}, { timestamps: true });

const Project = mongoose.model("Project", projectSchema);

export default Project;
