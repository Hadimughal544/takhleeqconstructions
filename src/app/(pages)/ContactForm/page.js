"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

export default function ContactPage() {
  let [Fullname, setFullName] = useState('');
  let [Email, setEmail] = useState('');
  let [Phonenumber, setPhoneNumber] = useState('');
  let [Service, setService] = useState('');
  let [Plotsize, setPlotSize] = useState('');
  let [Sitelocation, setSiteLocation] = useState('');
  let [City, setCity] = useState('');
  let [Requirement, setRequirement] = useState('');
  let [loading, setLoading] = useState(false);

async function HandleSubmit(e) {
  e.preventDefault();
  setLoading(true);
  try {
    const res = await fetch("http://127.0.0.1:4000/details", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // fixed lowercase
      },
      body: JSON.stringify({
        Fullname: Fullname,
        Email: Email,
        Phonenumber: Phonenumber,
        Services_required: Service,
        Plotsize: Plotsize,
        City: City,
        Site_location: Sitelocation,
        Requirement: Requirement,
      }),
    });

    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`);
    }

    const data = await res.json();
    console.log("Saved:", data);
    toast.success("Form Submitted Successfully");
    setFullName("");
    setEmail("");
    setPhoneNumber("");
    setService("");
    setPlotSize("");
    setCity("");
    setSiteLocation("");
    setRequirement("");
  } catch (error) {
    console.error("Error submitting form:", error);
     toast.error("Something went wrong. Try again!");
  } finally {
    setLoading(false);
  }
}
  return (
    <div className="relative min-h-screen">
      <Toaster position="top-center" reverseOrder={false}/>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/services/Architecture2.gif')" }} // replace with your image
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-20 min-h-screen px-4 ">
        {/* Heading */}
        <h1 className="text-white text-3xl md:text-4xl font-bold   text-center">
         Talk to Our Experts We’re Here for You
        </h1>

        {/* Form */}
        <motion.div
  className="min-h-screen flex items-center justify-center bg-contain bg-no-repeat bg-center"
  style={{
    backgroundImage: "url('/assets/logo-Takhleeq1.png')",
    backgroundSize: "350px 500px",
  }}
  initial={{ opacity: 0, x: 100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1.0, ease: "easeOut" }}
  viewport={{ once: true }}
>
  <form
    onSubmit={HandleSubmit}
    className="bg-white/93 p-10 rounded-lg shadow-lg w-full max-w-7xl nav-link2"
  >
    <h1 className="text-center mb-8 text-[#302560] text-2xl font-bold">
      Share Your Project Vision
    </h1>

    {/* Wide landscape grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
      {/* Full Name */}
      <div className="flex flex-col gap-2">
        <p>
          Enter your Full Name <span className="text-red-600">*</span>
        </p>
        <input
          type="text"
          placeholder="Full Name"
          value={Fullname}
          onChange={(e) => setFullName(e.target.value)}
          required
          className="w-full p-3 border border-[#302560] rounded"
        />
      </div>

      {/* Email */}
      

      {/* Phone */}
      <div className="flex flex-col gap-2">
        <p>
          Enter your Phone Number <span className="text-red-600">*</span>
        </p>
        <input
          type="tel"
          value={Phonenumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
          pattern="^03[0-9]{9}$"
          title="Enter a valid Pakistani number (11 digits, starting with 03)"
          placeholder="03XXXXXXXXX"
          className="w-full p-3 border border-[#302560] rounded"
        />
      </div>

      {/* Service */}
      <div className="flex flex-col gap-2">
        <p>
          Enter your Email Address <span className="text-red-600">*</span>
        </p>
        <input
          type="email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Your Email"
          className="w-full p-3 border border-[#302560] rounded"
        />
      </div>
      
       

      {/* Plot size */}
      <div className="flex flex-col gap-2">
        <p>
          Select your services <span className="text-red-600">*</span>
        </p>
        <select
          className="w-full p-4 border border-[#302560] rounded"
          value={Service}
          onChange={(e) => setService(e.target.value)}
          required
        >
          <option>Services</option>
          <option>Architecture</option>
          <option>Constructions</option>
          <option>Renovations</option>
          <option>Interior Design</option>
          <option>Landscaping</option>
          <option>Cost Estimation</option>
          <option>Construction Project Management</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <p>
          Select Your Plot Size<span className="text-red-600">*</span>
        </p>
        <select
          className="w-full p-4 border border-[#302560] rounded"
          value={Plotsize}
          onChange={(e) => setPlotSize(e.target.value)}
          required
        >
          <option>Plot Size</option>
          <option>Less than 5 Marla</option>
          <option>5 Marla</option>
          <option>10 Marla</option>
          <option>1 Kanal</option>
          <option>More than 1 Kanal</option>
        </select>
      </div>
     

      {/* City */}
      <div className="flex flex-col gap-2">
        <p>
          Enter your City Name <span className="text-red-600">*</span>
        </p>
        <input
          type="text"
          value={City}
          onChange={(e) => setCity(e.target.value)}
          required
          placeholder="Your City Name"
          className="w-full p-3 border border-[#302560] rounded"
        />
      </div>

      {/* Site location */}
      <div className="flex flex-col gap-2">
        <p>
          Enter Location of Site <span className="text-red-600">*</span>
        </p>
        <input
          type="text"
          value={Sitelocation}
          onChange={(e) => setSiteLocation(e.target.value)}
          required
          placeholder="Location of Site"
          className="w-full p-3 border border-[#302560] rounded"
        />
      </div>

      {/* Requirements */}
      <div className="col-span-1 md:col-span-3 lg:col-span-2">
        <p>
          Any additional requirement  
        </p>
        <textarea
          value={Requirement}
          onChange={(e) => setRequirement(e.target.value)}
          placeholder="Any Additional Requirements?"
          className="w-full p-3 mt-2 border border-[#302560] rounded"
          rows="1"
        ></textarea>
        
      </div>
      <div className=" col-span-1 md:col-span-3 lg:col-span-2 flex justify-end items-end  "></div>
      {/* Button aligned bottom-right */}
<div className="col-span-1 md:col-span-3 lg:col-span-3 flex justify-end">
  <button
    type="submit"
    disabled={loading}
    className="bg-orange-500 hover:bg-[#302560] text-white px-8 py-3 rounded font-semibold cursor-pointer"
  >
    {loading ? "Submitting..." : "SUBMIT"}
  </button>
</div>

    </div>

    {/* Submit button full width */}
    
  </form>
</motion.div>

      </div>
    </div>
  );
}
