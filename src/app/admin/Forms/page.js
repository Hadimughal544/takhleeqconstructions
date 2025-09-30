"use client"
import React, { useEffect, useState } from 'react'

export default function page() {
    const [details, setDetails] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchdetails() {
            try{
                const res = await fetch("http://localhost:3000/details", {
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                if(!res.ok) {
                    throw new Error("Failed to fetch details ");
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

    if (loading) return <p className=' flex items-center justify-center '>Loading....</p>;
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Details Table</h1>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 shadow-lg">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Fullname</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Phone</th>
              <th className="border border-gray-300 px-4 py-2">Service Required</th>
              <th className="border border-gray-300 px-4 py-2">Plot Size</th>
              <th className="border border-gray-300 px-4 py-2">City</th>
              <th className="border border-gray-300 px-4 py-2">Site Location</th>
              <th className="border border-gray-300 px-4 py-2">Requirement</th>
            </tr>
          </thead>
          <tbody>
            {details.map((item) => (
              <tr key={item.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{item.id}</td>
                <td className="border border-gray-300 px-4 py-2">{item.Fullname}</td>
                <td className="border border-gray-300 px-4 py-2">{item.Email}</td>
                <td className="border border-gray-300 px-4 py-2">{item.Phonenumber}</td>
                <td className="border border-gray-300 px-4 py-2">{item.Services_required}</td>
                <td className="border border-gray-300 px-4 py-2">{item.Plotsize}</td>
                <td className="border border-gray-300 px-4 py-2">{item.City}</td>
                <td className="border border-gray-300 px-4 py-2">{item.Site_location}</td>
                <td className="border border-gray-300 px-4 py-2">{item.Requirement}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
