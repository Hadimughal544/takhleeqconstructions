"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import ProtectedRoute from "@/app/components/ProtectedRoute";

export default function EditProjectPage() {
  const [projects, setProjects] = useState([]); // all projects
  const [selectedProject, setSelectedProject] = useState(null); // project being edited
  const [loading, setLoading] = useState(false);

  const [headImage, setHeadImage] = useState(null);
  const [extraImages, setExtraImages] = useState([]);
  const [imagesToKeep, setImagesToKeep] = useState([]);

  // 🔹 Fetch all projects on mount
  useEffect(() => {
    async function fetchProjects() {
      setLoading(true);
      try {
        const res = await fetch("http://127.0.0.1:4000/projects");
        if (!res.ok) throw new Error("Failed to fetch projects");
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        console.error("❌ Fetch error:", err);
        alert("Could not fetch projects");
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  // 🔹 Select project to edit
  function handleSelectProject(project) {
    setSelectedProject(project);
    setHeadImage(null);
    setExtraImages([]);
    setImagesToKeep(project.extraImages || []);
  }

  // 🔹 Update project
  async function handleUpdate(e) {
    e.preventDefault();
    if (!selectedProject) return;

    const formData = new FormData();
    formData.append("Title", selectedProject.Title);
    formData.append("Description", selectedProject.Description);

    if (headImage) {
      formData.append("headImage", headImage);
    } else if (!selectedProject.headImage) {
      formData.append("headImage", "");
    }

    formData.append("imagesToKeep", JSON.stringify(imagesToKeep));

    extraImages.forEach((file) => {
      formData.append("newExtraImages", file);
    });

    try {
      const res = await fetch(
        `http://127.0.0.1:4000/projects/${selectedProject.id}`,
        {
          method: "PUT",
          body: formData,
        }
      );

      if (!res.ok) throw new Error("Failed to update");

      const updated = await res.json();
      alert("✅ Project updated successfully!");

      // refresh project list
      setProjects((prev) =>
        prev.map((p) => (p.id === updated.id ? updated : p))
      );
      setSelectedProject(updated);
    } catch (err) {
      console.error("❌ Update error:", err);
      alert("Failed to update project");
    }
  }

  function removeHeadImage() {
    setSelectedProject({ ...selectedProject, headImage: null });
    setHeadImage(null);
  }

  function removeExtraImage(img) {
    setImagesToKeep(imagesToKeep.filter((i) => i !== img));
  }

  return (
    <ProtectedRoute>
      <main className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
        <div className="w-full max-w-5xl bg-white shadow-lg rounded-2xl p-8">
          <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Manage Projects
          </h1>

          {/* 🔹 Project List */}
          {!selectedProject && (
            <div>
              {loading && <p className="text-center">Loading projects...</p>}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => handleSelectProject(p)}
                    className="cursor-pointer bg-gray-50 border rounded-lg p-4 shadow hover:shadow-lg transition"
                  >
                    {p.headImage && (
                      <div className="w-full h-40 relative mb-3">
                        <Image
                          src={`http://127.0.0.1:4000${p.headImage}`}
                          alt={p.Title}
                          fill
                          className="rounded-lg object-cover"
                        />
                      </div>
                    )}
                    <h2 className="font-semibold text-lg">{p.Title}</h2>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {p.Description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 🔹 Edit Form */}
          {selectedProject && (
            <form className="space-y-5 mt-6" onSubmit={handleUpdate}>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="mb-4 text-sm text-blue-600 underline"
              >
                ← Back to project list
              </button>

              {/* Title */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Title
                </label>
                <input
                  type="text"
                  value={selectedProject.Title}
                  onChange={(e) =>
                    setSelectedProject({
                      ...selectedProject,
                      Title: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Description
                </label>
                <textarea
                  value={selectedProject.Description}
                  onChange={(e) =>
                    setSelectedProject({
                      ...selectedProject,
                      Description: e.target.value,
                    })
                  }
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none"
                />
              </div>

              {/* Head Image */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Head Image
                </label>

                {selectedProject.headImage && !headImage && (
                  <div className="relative inline-block mb-2 w-full h-48">
                    <Image
                      src={`http://127.0.0.1:4000${selectedProject.headImage}`}
                      alt="Head"
                      fill
                      className="rounded-lg shadow object-cover"
                    />
                    <button
                      type="button"
                      onClick={removeHeadImage}
                      className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded"
                    >
                      Delete
                    </button>
                  </div>
                )}

                {headImage && (
                  <div className="relative inline-block mb-2 w-full h-48">
                    <Image
                      src={URL.createObjectURL(headImage)}
                      alt="New Head"
                      fill
                      className="rounded-lg shadow object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => setHeadImage(null)}
                      className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded"
                    >
                      ✕
                    </button>
                  </div>
                )}

                <input
                  type="file"
                  onChange={(e) => setHeadImage(e.target.files?.[0] || null)}
                />
              </div>

              {/* Extra Images */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Extra Images
                </label>

                <div className="grid grid-cols-3 gap-3 mb-2">
                  {imagesToKeep.map((img, idx) => (
                    <div key={idx} className="relative w-full h-24">
                      <Image
                        src={`http://127.0.0.1:4000${img}`}
                        alt={`Extra ${idx}`}
                        fill
                        className="rounded-lg shadow object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => removeExtraImage(img)}
                        className="absolute top-1 right-1 bg-red-600 text-white text-xs px-2 py-1 rounded"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-3 mb-2">
                  {extraImages.map((file, idx) => (
                    <div key={idx} className="relative w-full h-24">
                      <Image
                        src={URL.createObjectURL(file)}
                        alt={`New Extra ${idx}`}
                        fill
                        className="rounded-lg shadow object-cover"
                      />
                    </div>
                  ))}
                </div>

                <input
                  type="file"
                  multiple
                  onChange={(e) =>
                    setExtraImages(Array.from(e.target.files || []))
                  }
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-lg shadow-md hover:bg-green-700 transition"
              >
                Update Project
              </button>
            </form>
          )}
        </div>
      </main>
    </ProtectedRoute>
  );
}
