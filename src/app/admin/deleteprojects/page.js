"use client";
import { useEffect, useState } from "react";
import ProtectedRoute from "@/app/components/ProtectedRoute";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);

  // Fetch all projects
  useEffect(() => {
    async function fetchProjects() {
      const res = await fetch("https://takhleeqconstructions.com/api/projects");
      const data = await res.json();
      setProjects(data);
    }
    fetchProjects();
  }, []);

  // Delete project
  async function handleDelete(id) {
    if (!confirm("Are you sure you want to delete this project?")) return;

    try {
      const res = await fetch(`https://takhleeqconstructions.com/api/projects/${id}`, {
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
    <main className="p-4 sm:p-6 bg-gray-100 min-h-screen">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-gray-800">
        Projects
      </h1>

      {projects.length === 0 ? (
        <p className="text-gray-600">No projects available.</p>
      ) : (
        <ul className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li
              key={project.id}
              className="flex flex-col justify-between bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <div className="mb-4">
                <h2 className="text-lg font-semibold text-gray-900 truncate">
                  {project.Title}
                </h2>
                <p className="text-sm text-gray-600 mt-1 line-clamp-3">
                  {project.Description}
                </p>
              </div>
              <button
                onClick={() => handleDelete(project.id)}
                className="self-start sm:self-end bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 text-sm sm:text-base"
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
