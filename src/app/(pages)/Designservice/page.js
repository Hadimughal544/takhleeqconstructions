"use client";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { CheckCircle } from "lucide-react";

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState("Design Services");
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenStandard, setIsOpenStandard] = useState(false);
const [isOpenCustom, setIsOpenCustom] = useState(false);
const [isOpenCommercial, setIsOpenCommercial] = useState(false);
const [isStructuralOpen, setIsStructuralOpen] = useState(false);
 const [isRegulationOpen, setIsRegulationOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white  ">
         <div className="relative w-full h-[400px] items-center mb-30 ">
                  
                    <Image
                    src="/assets/architects1.gif"
                    alt="services image"
                    fill
                    priority
                    className="object-cover "
                    />
        
                    <div className="absolute w-full  z-10 inset-0 bg-white/50  "></div>
        
                    <div className="absolute text-center max-w-3xl mx-auto mb-16 inset-0 z-20  mt-25 ">
                <h1 className="text-4xl font-bold mb-4 text-black">Takhleeq Design Services</h1>
                <p className="text-black text-lg ">
                  At Takhleeq, we specialise in helping clients turn their building visions into reality—delivering high-quality, cost-effective structures with confidence and care. Whether you're starting from scratch, preparing your first proposal, or updating drawings to meet local regulations, our team is here to guide you every step of the way.

                </p>
              </div>
                </div>


            <div className=" flex flex-col items-center">
        <div className="max-w-5xl mx-40  flex flex-col md:flex-row gap-14 ">
      {/* Left side image */}
      <div className="relative w-full md:w-[450px] h-64 md:h-[350px]">
        <Image
          src="/assets/design-service.png"
          alt="TMA logo"
          fill
          priority
          className="object-cover rounded-lg"
        />
      </div>

      {/* Right side content */}
      <div className="w-full md:w-1/2 mb-30  ">
        {/* Tab buttons */}
        <div className="flex space-x-4 border-b border-orange-400 mb-4 ">
          <button
            onClick={() => setActiveTab("Design Services")}
            className={`px-4 py-2 rounded-t-md ${
              activeTab === "Design Services"
                ? "bg-orange-400 cursor-pointer text-white"
                : "bg-gray-200  text-black cursor-pointer"
            }`}
          >
            Design Services
          </button>
          <button
            onClick={() => setActiveTab(" Residential Construction")}
            className={`px-4 py-2 rounded-t-md ${
              activeTab === " Residential Construction"
               ? "bg-orange-400 cursor-pointer text-white"
                : "bg-gray-200  text-black cursor-pointer"
            }`}
          >
             Residential Construction
          </button>
          <button
            onClick={() => setActiveTab("Commercial Construction")}
            className={`px-4 py-2 rounded-t-md ${
              activeTab === "Commercial Construction"
                 ? "bg-orange-400 cursor-pointer text-white"
                : "bg-gray-200  text-black cursor-pointer"
            }`}
          >
            Commercial Construction
          </button>
        </div>

        {/* Tab content */}
        <div className="mt-6 text-justify">
          {activeTab === "Design Services" && (
    <div>
      <p className="mb-2 text-justify">
  We deliver integrated design solutions—from architecture to interiors—ensuring every space is smart,
   compliant, and built around your vision.
</p>

      <ul className="space-y-1">
        <li className="flex items-start  text-gray-800">
          <CheckCircle className="h-5 w-7 text-orange-500 mr-2 mt-1" />
          <span>
            <span className="font-bold">Architectural Design:</span> Creative layouts, elevations,
             and plans that shape your space with purpose and style.
          </span>
        </li>
        <li className="flex items-start  text-gray-800">
          <CheckCircle className="h-5 w-7 text-orange-500 mr-2 mt-1" />
          <span>
            <span className="font-bold">Structural Design:</span> Safe, durable structural systems
             designed to meet seismic and regulatory standards.
          </span>
        </li>
        <li className="flex items-start  text-gray-800">
          <CheckCircle className="h-5 w-7 text-orange-500 mr-2 mt-1" />
          <span>
            <span className="font-bold"> MEP Design (Mechanical, Electrical, Plumbing):</span> Integrated HVAC,
             electrical, and plumbing systems for modern living.
          </span>
        </li>
        <li className="flex items-start  text-gray-800">
          <CheckCircle className="h-5 w-7 text-orange-500 mr-2 mt-1" />
          <span>
            <span className="font-bold">Civil Design:</span> Site grading, drainage, and road layouts that
             support smooth, sustainable development.
          </span>
        </li>
        <li className="flex items-start  text-gray-800">
          <CheckCircle className="h-5 w-7 text-orange-500 mr-2 mt-1" />
          <span>
            <span className="font-bold">Landscape Design:</span>Balanced softscape and hardscape planning 
            for inviting, functional outdoor areas.
          </span>
        </li>
        <li className="flex items-start  text-gray-800">
          <CheckCircle className="h-5 w-7 text-orange-500 mr-2 mt-1" />
          <span>
            <span className="font-bold">Interior Design:</span>Smart space planning, finishes, and lighting
             that reflect your lifestyle and brand.
          </span>
        </li>
      </ul>
    </div>
  )}
         
              
           

          {activeTab === " Residential Construction" && (
           <div>
      <p className="mb-4 text-justify">
        If you’re planning to build your home, Takhleeq provides end-to-end design support, including:
      </p>

      <ul className="space-y-4 mb-6">
        <li className="flex items-start text-lg text-gray-800">
          <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-1" />
          <span>Planning drawings tailored to your space</span>
        </li>
        <li className="flex items-start text-lg text-gray-800">
          <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-1" />
          <span>Structural design guidance</span>
        </li>
        <li className="flex items-start text-lg text-gray-800">
          <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-1" />
          <span>Approval drawings for local authorities</span>
        </li>
      </ul>

      <p>
       We also prepare all required documents, making it easier for you to handle submissions and approvals with confidence.
      </p>
    </div>
          )}

          {activeTab === "Commercial Construction" && (
            <div>
      <p className="mb-4 text-justify">
        We know that meeting regulatory requirements and managing technical design for large-scale projects can be complex.
         Takhleeq offers professional structural design and project support to keep your development compliant and on track
          from start to finish.
      </p>

      <p className="mb-6">
        For developers of apartment buildings, office complexes, housing schemes, and other commercial projects,
         our services include:
      </p>

      <ul className="space-y-4">
        <li className="flex items-start text-md text-gray-800">
          <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-1" />
          <span>Expert consultation and project planning</span>
        </li>
        <li className="flex items-start text-md text-gray-800">
          <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-1" />
          <span>
           Structural design solutions aligned with local authority standards
          </span>
        </li>
      </ul>
    </div>
          )}
        </div>
      </div>
    </div>

<div className="flex flex-col gap-8 mb-30">


    <div className=" max-w-5xl mx-45 w-full ">
        <p>
            Explore tailored design and planning services, trusted across Pakistan’s leading development authorities including DHA, Bahria Town, LDA and TMA.
At Takhleeq, we provide structured, regulation-ready solutions for every stage of your residential or commercial project—from initial concept to final approval. Whether you're building a home, launching a commercial space or refining architectural plans, our services are designed to meet the highest standards of quality, compliance and client satisfaction.

        </p>
    </div>

      {/* ================= STANDARD DESIGN ================= */}
      <div className="max-w-5xl mx-45 w-full overflow-hidden">
        <button
          onClick={() => setIsOpenStandard(!isOpenStandard)}
          className="w-full flex justify-between items-center cursor-pointer text-orange-400 border-b border-orange-400 px-6 py-4 text-left text-2xl font-bold"
        >
          Standard Design
          {isOpenStandard ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </button>

        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isOpenStandard ? "max-h-[1500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="p-6 flex flex-col md:flex-row items-center relative ">
            {/* Left content */}
            <div className="relative md:w-1/2 bg-white shadow-xl mt-10  rounded-2xl p-6 z-10 md:-mr-12">
              <p className="mb-4">
                Do you have a clear vision for your project — layout, style, and
                functionality already mapped out?{" "}
                <strong>Takhleeq’s Standard Design Service</strong> is built for
                clients who know what they want and need expert support to bring
                it to life.
              </p>
              <p className="mb-4">
                We translate your concept into technical drawings and
                documentation required for planning approvals and construction.
              </p>

              {/* Service Box */}
              <div className="p-6 ">
                <h3 className="font-semibold mb-4 text-lg text-orange-500">
                  This service is ideal for:
                </h3>
                <ul className="space-y-3">
                  {[
                    "Clients with a well-defined project concept",
                    "Builders working from client briefs without drawings",
                    "Those seeking efficient, cost-effective design support for approvals and execution",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-800">
                      <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right image */}
            <div className="relative w-full md:w-110 h-60  md:h-120 rounded-lg overflow-hidden">
              <Image
                src="/assets/DSC8.jpeg"
                alt="Standard Design"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ================= CUSTOM HOME DESIGN ================= */}
      <div className="max-w-5xl mx-45 w-full overflow-hidden">
        <button
          onClick={() => setIsOpenCustom(!isOpenCustom)}
          className="w-full flex justify-between items-center cursor-pointer text-orange-400 border-b border-orange-400 px-6 py-4 text-left text-2xl font-bold"
        >
          Custom Home Design
          {isOpenCustom ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </button>

        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isOpenCustom ? "max-h-[1500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="p-6 flex flex-col md:flex-row items-center relative">
            {/* Left content */}
             <div className="relative w-full md:w-1/2 h-60  md:h-120 rounded-lg overflow-hidden">
              <Image
                src="/assets/DSC1.jpeg"
                alt="Custom Home"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative md:w-1/2 bg-white shadow-xl  rounded-2xl p-6 z-10 md:-ml-12">
              <p className="mb-4">
                Building a custom home is a personal journey and{" "}
                <strong>Takhleeq</strong> is here to make it seamless. We
                collaborate with you and your architect to shape a design that
                reflects your vision while meeting all local authority standards.
              </p>
              <p className="mb-4">
                At Takhleeq Construction, we collaborate with you and your
                architect to ensure your custom-built home reflects your vision
                with precision, durability, and thoughtful design. Whether
                you're a client planning your dream space or an architect seeking
                expert support, our team is here to guide every step of the way
                bringing clarity, confidence, and craftsmanship to your project.
              </p>
              <p className="mb-4">
                We advise on complex design elements such as cantilevers, curved
                walls, and large open spaces ensuring your home is both striking
                and structurally sound.
              </p>
            </div>

            {/* Right image */}
           
          </div>

          {/* Service Box */}
          <div className="mt-6 p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-4 text-lg text-orange-500">
              We Provide:
            </h3>
            <ul className="space-y-3">
              {[
                "Planning Application Drawings",
                "Approval Drawings for DHA, Bahria Town, LDA, TMA",
                "Permitted Development Drawings",
                "Structural Design Services",
                "Feasibility & Layout Advice",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start text-gray-800">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ================= COMMERCIAL PROJECTS ================= */}
      <div className="max-w-5xl mx-45 w-full overflow-hidden">
        <button
          onClick={() => setIsOpenCommercial(!isOpenCommercial)}
          className="w-full flex justify-between items-center cursor-pointer text-orange-400 border-b border-orange-400 px-6 py-4 text-left text-2xl font-bold"
        >
          Commercial Projects
          {isOpenCommercial ? (
            <ChevronUp size={24} />
          ) : (
            <ChevronDown size={24} />
          )}
        </button>

        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isOpenCommercial
              ? "max-h-[1500px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="p-6 flex flex-col md:flex-row items-center relative">
            {/* Left content */}
            <div className="relative md:w-1/2 bg-white shadow-xl  rounded-2xl p-6 z-10 md:-mr-12">
              <p className="mb-4">
                <strong>Takhleeq</strong> provides Concept and Structural Design
                Services for commercial, residential, and educational
                developments.
              </p>
              <p className="mb-4">
                Whether you're planning an apartment block, office space,
                housing scheme, or school, we deliver:
              </p>

              <div className="mt-6 p-6 ">
            <h3 className="font-semibold mb-4 text-lg text-orange-500">
              Our Services Include:
            </h3>
            <ul className="space-y-3">
              {[
                "Expert Advice & Project Planning",
                "Structural Design Services aligned with local regulations",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start text-gray-800">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
            </div>

            {/* Right image */}
            <div className="relative w-full md:w-1/2 h-60  md:h-110 rounded-lg overflow-hidden">
              <Image
                src="/assets/DSC2.jpeg"
                alt="Commercial Projects"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Service Box */}
          
        </div>
      </div>

      {/* ================= STRUCTURAL ENGINEERING ================= */}
      <div className="max-w-5xl mx-45 w-full overflow-hidden">
        <button
          onClick={() => setIsStructuralOpen(!isStructuralOpen)}
          className="w-full flex justify-between items-center text-orange-400 cursor-pointer border-b border-orange-400 px-6 py-4 text-left text-2xl font-bold"
        >
          Structural Engineering
          {isStructuralOpen ? (
            <ChevronUp size={24} />
          ) : (
            <ChevronDown size={24} />
          )}
        </button>

        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isStructuralOpen
              ? "max-h-[1500px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="p-6 flex flex-col md:flex-row items-center relative">
            {/* Left content */}

            <div className="relative w-full md:w-1/2 h-60  md:h-110 rounded-lg overflow-hidden">
              <Image
                src="/assets/DSC3.jpeg"
                alt="Structural Engineering"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative md:w-1/2 bg-white shadow-xl mt-30 rounded-2xl p-6 z-10 md:-ml-12">
              <p className="mb-6">
                For large-scale projects, a qualified structural engineer is
                essential. <strong>Takhleeq</strong> works with experienced
                professionals to ensure your building is safe, economical, and
                compliant.
              </p>
              <p className="mb-4">We support:</p>

              {/* Support List */}
              <ul className="space-y-3 mb-6">
                {[
                  "Offices, apartment blocks, swimming pool halls, and custom homes",
                  "Projects requiring wide openings, large spans, or non-standard layouts",
                  "Developments replacing steel frames with cost-effective structural alternatives",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-800">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right image */}
            
          </div>

          {/* Service Box */}
          <div className="mt-6 p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-4 text-lg text-orange-500">
              We Provide:
            </h3>
            <ul className="space-y-3">
              {[
                "Consultation & Site Assessment",
                "Structural Design & Planning",
                "Load Bearing Analysis",
                "Structural Calculations",
                "Feasibility Advice",
                "Structural Surveys & Reports",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start text-gray-800">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ================= BUILDING REGULATION DRAWINGS ================= */}
      <div className="max-w-5xl mx-45 w-full overflow-hidden">
        <button
          onClick={() => setIsRegulationOpen(!isRegulationOpen)}
          className="w-full flex justify-between items-center text-orange-400 cursor-pointer border-b border-orange-400 px-6 py-4 text-left text-2xl font-bold"
        >
          Building Regulation Drawings
          {isRegulationOpen ? (
            <ChevronUp size={24} />
          ) : (
            <ChevronDown size={24} />
          )}
        </button>

        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isRegulationOpen
              ? "max-h-[1500px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="p-6 flex flex-col md:flex-row items-center relative">
  {/* Left content */}
  <div className="relative md:w-1/2 bg-white shadow-xl  rounded-2xl p-6 z-10 md:-mr-12">
    <p className="mb-4">
      Already have drawings based on cavity wall or timber frame?{" "}
      <strong>Takhleeq</strong> can revise them to suit your preferred
      construction method—ensuring compliance and cost-efficiency.
    </p>
    <p className="mb-4">
      Building regulation drawings prepared for one construction method may not
      suit another with different structural specifications. To ensure
      compliance and accuracy, it’s essential to follow the manufacturer’s
      recommended construction details, especially where certification or
      regulatory approval is required. Takhleeq ensures all drawings meet the
      correct standards and reflect the appropriate technical guidance for your
      chosen system.
    </p>
    <p className="mb-4">
      We adjust floor levels, window and door placements, and structural details
      to minimize site work and streamline construction.
    </p>
  </div>

  {/* Right image */}
  <div className="relative w-full md:w-1/2 h-60  md:h-120 rounded-lg overflow-hidden">
    <Image
      src="/assets/DSC8.jpeg"
      alt="Building Regulation Drawings"
      fill
      className="object-cover rounded-lg"
    />
  </div>
</div>


          {/* Service Box */}
          <div className="mt-6 p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-4 text-lg text-orange-500">
              We Provide:
            </h3>
            <ul className="space-y-3">
              {[
                "Custom Layout Advice",
                "Structural Calculations",
                "Load Bearing Analysis",
                "Feasibility & Design Support",
                "Structural Surveys & Reports",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start text-gray-800">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    

    
   </div>

    </main>
    
  );

}
