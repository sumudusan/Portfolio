import Project from "../models/Project.js";

export async function addProject(req, res){
    try{
         const exists = await Project.findOne({ projectId: req.body.projectId });
    if (exists) {
      return res.status(400).json({ message: "Project ID already exists" });
    }

        const newProject = new Project(req.body);
        await newProject.save();
        res.json(newProject , {message :"ssss"});

    }catch(error){
        res.status(500).json({message : error.message})
    }
}

export async function getProject(req, res){
    try{
        const projects = await Project.find();
        res.json(projects);
    }catch(error){
        res.status(500).json({message :error.message});
    }
}

export async function updateProject(req,res){
    try{
         const updated = await Project.findOneAndUpdate(
      { projectId: req.params.projectId }, // Find by projectId 
      req.body,
      { new: true }
    );
        if(!updated) return res.status(404).json({message : "project not found"});
        res.json(updated);
    }catch (error){
        res.status(500).json({message : error.message});
    }
}

export async function deleteProject(req, res) {
  try {
    const deleted = await Project.findOneAndDelete({ projectId: req.params.projectId });

    if (!deleted) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.json({ message: "Project deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
