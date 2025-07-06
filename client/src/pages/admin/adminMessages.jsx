import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify"; // For notifications

export default function AdminMessages() {
  const [messages, setMessages] = useState([]);

  const fetchMessages = () => {
    axios.get("http://localhost:5000/api/messages")
      .then(res => setMessages(res.data))
      .catch(err => console.error("Failed to fetch messages:", err));
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this message?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/messages/${id}`);
      toast.success("🗑️ Message deleted successfully!");
      fetchMessages();
    } catch (err) {
      console.error("Delete error:", err);
      toast.error("❌ Failed to delete message.");
    }
  };

  return (
    <div className="min-h-screen bg-background text-white px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">User Messages</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-surface text-white rounded-lg overflow-hidden shadow-md">
          <thead className="bg-primary text-background">
            <tr>
              <th className="px-4 py-3 text-left">#</th>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Message</th>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((msg, index) => (
              <tr key={msg._id} className="border-b border-gray-700">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{msg.name}</td>
                <td className="px-4 py-2">{msg.email}</td>
                <td className="px-4 py-2">{msg.message}</td>
                <td className="px-4 py-2">{new Date(msg.createdAt).toLocaleString()}</td>
                <td className="px-4 py-2 text-center">
                  <button
                    onClick={() => handleDelete(msg._id)}
                    className="px-3 py-1 bg-red-600 rounded hover:bg-red-500"
                    title="Delete Message"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
