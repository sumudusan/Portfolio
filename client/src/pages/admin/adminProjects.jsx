import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

export default function AdminProjects() {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    projectId: "",
    title: "",
    desc: "",
    image: "",
    link: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState("");

  const fetchProjects = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/projects");
      setProjects(res.data);
    } catch (err) {
      console.error("Failed to fetch projects:", err);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await axios.put(`http://localhost:5000/api/projects/${formData.projectId}`, formData);
        toast.success(" Project updated successfully!");
      } else {
        await axios.post("http://localhost:5000/api/projects", formData);
        toast.success(" Project added successfully!");
      }
      setFormData({ projectId: "", title: "", desc: "", image: "", link: "" });
      setIsEditing(false);
      fetchProjects();
    } catch (err) {
      console.error("Submit error:", err);
      toast.error(" Error submitting project");
    }
  };

  const handleEdit = (project) => {
    setFormData(project);
    setIsEditing(true);
  };

  const handleDelete = async (projectId) => {
    try {
      await axios.delete(`http://localhost:5000/api/projects/${projectId}`);
      toast.success(" Project deleted successfully!");
      fetchProjects();
    } catch (err) {
      console.error("Delete error:", err);
      toast.error(" Error deleting project");
    }
  };

  return (
    <div className="min-h-screen bg-background py-10 px-6 text-white">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-center mb-8"
      >
        Admin - Manage Projects
      </motion.h1>

      {message && (
        <div className="max-w-2xl mx-auto mb-4 p-3 rounded bg-surface text-accent text-center">
          {message}
        </div>
      )}


      {/* Table View */}
      <div className="overflow-x-auto max-w-6xl mx-auto mt-10">
        <table className="min-w-full bg-surface text-white rounded-lg overflow-hidden shadow-md">
          <thead className="bg-primary text-background">
            <tr>
              <th className="px-4 py-3 text-left">#</th>
              <th className="px-4 py-3 text-left">Project ID</th>
              <th className="px-4 py-3 text-left">Title</th>
              <th className="px-4 py-3 text-left">Description</th>
              <th className="px-4 py-3 text-left">Link</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={project.projectId} className="border-b border-gray-700">
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3">{project.projectId}</td>
                <td className="px-4 py-3">{project.title}</td>
                <td className="px-4 py-3">{project.desc?.slice(0, 40)}...</td>
                <td className="px-4 py-3 text-blue-400 underline">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">View</a>
                </td>
                <td className="px-4 py-3 text-center">
                  <button onClick={() => handleEdit(project)} className="mr-2 px-3 py-1 text-sm bg-yellow-400 text-black rounded hover:bg-yellow-300">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(project.projectId)} className="px-3 py-1 text-sm bg-red-600 rounded hover:bg-red-500">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-surface mt-10 p-6 rounded-xl shadow-md space-y-4">
        <input type="text" name="projectId" placeholder="Project ID" required value={formData.projectId} onChange={handleChange} className="w-full p-2 rounded bg-background text-white" />
        <input type="text" name="title" placeholder="Project Title" required value={formData.title} onChange={handleChange} className="w-full p-2 rounded bg-background text-white" />
        <textarea name="desc" placeholder="Description" value={formData.desc} onChange={handleChange} className="w-full p-2 rounded bg-background text-white" />
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} className="w-full p-2 rounded bg-background text-white" />
        <input type="text" name="link" placeholder="Project Link" value={formData.link} onChange={handleChange} className="w-full p-2 rounded bg-background text-white" />
        <button type="submit" className="w-full py-2 bg-accent text-background rounded hover:bg-primary">
          {isEditing ? "Update Project" : "Add Project"}
        </button>
      </form>
    </div>
  );
}
