"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("https://takhleeqconstructions.com/api/projects");
        if (!res.ok) throw new Error("Failed to fetch projects");

        const data = await res.json();
        setProjects(data);
      } catch (err) {
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  const openLightbox = (images, index) => {
    setImageList(images);
    setCurrentIndex(index);
    setSelectedImage(images[index]);
  };

  const showNext = (e) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % imageList.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(imageList[nextIndex]);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + imageList.length) % imageList.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(imageList[prevIndex]);
  };

  return (
    <section>
      {/* Hero Section */}
      <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px]">
        <Image
          src="/assets/projects-bg.jpg"
          alt="services image"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute w-full z-10 inset-0 bg-black/55"></div>

        <div className="flex flex-col items-center justify-center absolute text-center max-w-2xl sm:max-w-3xl mx-auto inset-0 z-20 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            Projects
          </h1>
          <div className="border-b  text-white w-1/4 mb-4"></div>
          <p className="text-white text-base sm:text-lg">
            Construction Highlights
          </p>
        </div>
      </div>

      {/* Projects List */}
      {[...projects].reverse().map((project, index) => (
        <div key={project.id} className="mt-10 sm:mt-16 md:mt-20">
          {/* Project Card */}
          <div className="rounded-xl overflow-hidden px-4 sm:px-10 md:px-20 bg-white">
            {/* Top row: head image + text */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Head Image */}
              <div className="h-48 sm:h-64 md:h-[400px] lg:h-[500px]">
                {project.headImage && (
                  <Image
                    src={`https://takhleeqconstructions.com/api${project.headImage}`}
                    alt="Head"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover rounded-2xl cursor-pointer"
                    onClick={() =>
                      openLightbox(
                        [`https://takhleeqconstructions.com/api${project.headImage}`],
                        0
                      )
                    }
                  />
                )}
              </div>

              {/* Title + Description */}
              <div className="flex flex-col justify-center p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                  {project.Title}
                </h2>
                <p className="text-gray-600 mt-3 text-sm sm:text-base">
                  {project.Description}
                </p>
              </div>
            </div>

            {/* Extra Images */}
            {project.extraImages?.length > 0 && (
              <div className="pt-6 sm:pt-8 pb-10">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {project.extraImages.map((img, idx) => (
                    <Image
                      key={idx}
                      src={`http://localhost:3000${img}`}
                      alt={`Extra ${idx}`}
                      width={200}
                      height={200}
                      className="w-full h-32 sm:h-40 md:h-42 object-cover rounded-lg border cursor-pointer"
                      onClick={() =>
                        openLightbox(
                          project.extraImages.map(
                            (img) => `http://localhost:3000${img}`
                          ),
                          idx
                        )
                      }
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Divider */}
          {index !== projects.length - 1 && (
            <hr className="my-10 border-t-4 border-[#302560] w-1/3 mx-auto rounded" />
          )}
        </div>
      ))}

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-[95%] h-[90%] flex items-center justify-center">
            <Image
              src={selectedImage}
              alt="Fullscreen"
              fill
              className="object-contain"
            />

            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-white text-2xl rounded-2xl bg-black/50 px-3 p-2"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>

            {/* Prev / Next buttons */}
            {imageList.length > 1 && (
              <>
                <button
                  className="absolute left-4 text-white text-3xl bg-black/40 px-3 py-2 rounded-full"
                  onClick={showPrev}
                >
                  ‹
                </button>
                <button
                  className="absolute right-4 text-white text-3xl bg-black/40 px-3 py-2 rounded-full"
                  onClick={showNext}
                >
                  ›
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
