"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import ProtectedRoute from "../components/ProtectedRoute";
import { MdDeleteForever } from "react-icons/md";

export default function Page() {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  async function handledelete(id) {
    if (!confirm("Are you sure you want to delete this details?")) return;

    try {
      const res = await fetch(
        `https://takhleeqconstructions.com/api/details/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!res.ok) throw new Error("Failed to delete details");

      // remove from state so UI updates
      setDetails((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    async function fetchdetails() {
      try {
        const res = await fetch(
          "https://takhleeqconstructions.com/api/details",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!res.ok) {
          throw new Error("Failed to fetch details");
        }

        const data = await res.json();
        setDetails(data);
      } catch (err) {
        console.error("Error fetching details", err);
      } finally {
        setLoading(false);
      }
    }

    fetchdetails();
  }, []);

  if (loading)
    return (
      <p className="flex items-center justify-center h-screen text-lg font-semibold">
        Loading...
      </p>
    );

  function handleLogout() {
    localStorage.removeItem("token");
    window.location.href = "/admin/login";
  }

  return (
    <ProtectedRoute>
      <main>
        {/* Orange background section */}
        <div className="relative py-16 px-4 sm:px-8 md:px-10 bg-orange-500 text-[#302560]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-10 md:mt-0 flex items-center justify-center mb-10 md:mb-20 text-center">
            Admin Panel
          </h1>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 items-center justify-center">
            <Link href="/admin/addprojects">
              <div className="flex h-28 sm:h-32 md:h-40 w-full sm:w-64 md:w-72 shadow-xl bg-white rounded-2xl justify-center items-center text-lg sm:text-xl md:text-2xl font-bold hover:scale-105 cursor-pointer transition">
                <h1>Add Projects</h1>
              </div>
            </Link>

            <Link href="/admin/deleteprojects">
              <div className="flex h-28 sm:h-32 md:h-40 w-full sm:w-64 md:w-72 shadow-xl bg-white rounded-2xl justify-center items-center text-lg sm:text-xl md:text-2xl font-bold hover:scale-105 cursor-pointer transition">
                <h1>Delete Projects</h1>
              </div>
            </Link>

            <Link href="/admin/updateprojects">
              <div className="flex h-28 sm:h-32 md:h-40 w-full sm:w-64 md:w-72 shadow-xl bg-white rounded-2xl justify-center items-center text-lg sm:text-xl md:text-2xl font-bold hover:scale-105 cursor-pointer transition">
                <h1>Update Projects</h1>
              </div>
            </Link>
          </div>

          {/* Buttons pinned top-right inside orange div */}
          <div className="absolute top-4 right-4 flex flex-col sm:flex-row gap-2 sm:gap-4">
            <Link href="/admin/addAdmin">
              <button className="px-3 py-2 sm:px-4 sm:py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition text-sm sm:text-base">
                Add Admin
              </button>
            </Link>
            <button
              onClick={handleLogout}
              className="px-3 py-2 sm:px-4 sm:py-2 bg-red-500 text-white font-semibold rounded-lg shadow hover:bg-red-600 transition text-sm sm:text-base"
            >
              Log out
            </button>
          </div>
        </div>

        {/* Details Table */}
        <div className="p-4 sm:p-6 overflow-x-auto">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
            Forms submissions
          </h1>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 shadow-lg text-sm sm:text-base">
              <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th className="border border-gray-300 px-2 sm:px-4 py-2">
                    ID
                  </th>
                  <th className="border border-gray-300 px-2 sm:px-4 py-2">
                    Fullname
                  </th>
                  <th className="border border-gray-300 px-2 sm:px-4 py-2">
                    Email
                  </th>
                  <th className="border border-gray-300 px-2 sm:px-4 py-2">
                    Phone
                  </th>
                  <th className="border border-gray-300 px-2 sm:px-4 py-2">
                    Service Required
                  </th>
                  <th className="border border-gray-300 px-2 sm:px-4 py-2">
                    Plot Size
                  </th>
                  <th className="border border-gray-300 px-2 sm:px-4 py-2">
                    City
                  </th>
                  <th className="border border-gray-300 px-2 sm:px-4 py-2">
                    Site Location
                  </th>
                  <th className="border border-gray-300 px-2 sm:px-4 py-2">
                    Requirement
                  </th>
                  <th className="border border-gray-300 px-2 sm:px-4 py-2">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {details.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-100">
                    <td className="border border-gray-300 px-2 sm:px-4 py-2">
                      {item.id}
                    </td>
                    <td className="border border-gray-300 px-2 sm:px-4 py-2">
                      {item.Fullname}
                    </td>
                    <td className="border border-gray-300 px-2 sm:px-4 py-2">
                      {item.Email}
                    </td>
                    <td className="border border-gray-300 px-2 sm:px-4 py-2">
                      {item.Phonenumber}
                    </td>
                    <td className="border border-gray-300 px-2 sm:px-4 py-2">
                      {item.Services_required}
                    </td>
                    <td className="border border-gray-300 px-2 sm:px-4 py-2">
                      {item.Plotsize}
                    </td>
                    <td className="border border-gray-300 px-2 sm:px-4 py-2">
                      {item.City}
                    </td>
                    <td className="border border-gray-300 px-2 sm:px-4 py-2">
                      {item.Site_location}
                    </td>
                    <td className="border border-gray-300 px-2 sm:px-4 py-2">
                      {item.Requirement}
                    </td>
                    <td className="border border-gray-300 px-2 sm:px-4 py-2">
                      <MdDeleteForever
                        onClick={() => handledelete(item.id)}
                        className="text-red-500 text-xl sm:text-2xl cursor-pointer hover:scale-110 transition"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
   </ProtectedRoute>
  );
}
