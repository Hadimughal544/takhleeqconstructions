"use client"
import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ProtectedRoute from "@/app/components/ProtectedRoute";

export default function Page() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [headImage, setHeadImage] = useState()
  const [extraImages, setExtraImages] = useState([])
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/admin/login"); // redirect if not logged in
    } else {
      setLoading(false);
    }
  }, [router]);

  //if (loading) return <p>Loading...</p>;


  async function handleSubmit(e) {
  e.preventDefault();

  try {
    const formData = new FormData();
    formData.append("Title", title);
    formData.append("Description", description);

    if (headImage) {
      formData.append("headImage", headImage); // matches backend FileInterceptor('headImage')
    }

    extraImages.forEach((file) => {
      formData.append("extraImages", file); // matches FilesInterceptor('extraImages')
    });

    const res = await fetch("http://127.0.0.1:4000/projects", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) throw new Error(`Request failed with status ${res.status}`);

    const data = await res.json();
    console.log("Saved:", data);

    // Reset form
    setTitle("");
    setDescription("");
    setHeadImage(null);
    setExtraImages([]);
  } catch (err) {
    console.error("Error saving project:", err);
  }
}


   
  return (
    <ProtectedRoute>
    <main className="flex items-center justify-center min-h-screen bg-orange-500">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Add Project
        </h1>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Title */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Enter the title
            </label>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Enter the description
            </label>
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none resize-none"
            />
          </div>

          {/* Image */}
          {/* Head Image */}
<div>
  <label className="block text-gray-700 font-medium mb-1">
    Head Image
  </label>
  <input
    type="file"
    onChange={(e) => setHeadImage(e.target.files?.[0])}
    className="w-full text-gray-700 border border-gray-300 rounded-lg cursor-pointer 
               focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
               file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 
               file:text-sm file:font-medium file:bg-indigo-600 file:text-white 
               hover:file:bg-indigo-700"
  />
</div>

{/* Extra Images */}
<div>
  <label className="block text-gray-700 font-medium mb-1">
    Extra Images
  </label>
  <input
    type="file"
    onChange={(e) => {
      if (!e.target.files) return;
      const newFiles = Array.from(e.target.files);
      setExtraImages((prev) => [...prev, ...newFiles]); // add to list
      e.target.value = ""; // reset the input so it looks empty
    }}
    className="w-full text-gray-700 border border-gray-300 rounded-lg cursor-pointer 
               focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
               file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 
               file:text-sm file:font-medium file:bg-indigo-600 file:text-white 
               hover:file:bg-indigo-700"
  />

  {/* Show preview list */}
  {extraImages.length > 0 && (
    <ul className="mt-2 text-sm text-gray-600">
      {extraImages.map((file, idx) => (
        <li key={idx}>{file.name}</li>
      ))}
    </ul>
  )}
</div>




          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-medium py-2 rounded-lg shadow-md hover:bg-indigo-700 transition"
          >
            Submit Project
          </button>
        </form>
      </div>
    </main>
    </ProtectedRoute>
  );
}
