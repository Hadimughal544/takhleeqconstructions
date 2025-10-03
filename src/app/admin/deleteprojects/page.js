"use client";
import { useEffect, useState } from "react";
import ProtectedRoute from "@/app/components/ProtectedRoute";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);

  // Fetch all projects
  useEffect(() => {
    async function fetchProjects() {
      const res = await fetch("http://127.0.0.1:4000/projects");
      const data = await res.json();
      setProjects(data);
    }
    fetchProjects();
  }, []);

  // Delete project
  async function handleDelete(id) {
    if (!confirm("Are you sure you want to delete this project?")) return;

    try {
      const res = await fetch(`http://127.0.0.1:4000/projects/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete project");

      // remove from state so UI updates
      setProjects((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <ProtectedRoute>
    <main className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Projects</h1>

      {projects.length === 0 ? (
        <p>No projects available.</p>
      ) : (
        <ul className="space-y-4">
          {projects.map((project) => (
            <li
              key={project.id}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
            >
              <div>
                <h2 className="font-semibold">{project.Title}</h2>
                <p className="text-sm text-gray-600">{project.Description}</p>
              </div>
              <button
                onClick={() => handleDelete(project.id)}
                className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </main>
    </ProtectedRoute>
  );
}
