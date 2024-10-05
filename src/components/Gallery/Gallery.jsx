import React, { useState } from "react";
import MainLayout from "../../Layouts/MainLayout";
import Contact from "../Contact/Contact";

const Gallery = () => {
  // Define images with categories, including "all" category images
  const allImages = [
    {
      url: "https://aadiyogacenter.com/wp-content/uploads/2024/04/1-12.png",
      category: "all",
    },
    {
      url: "https://aadiyogacenter.com/wp-content/uploads/2024/04/1-14.png",
      category: "all",
    },
    {
      url: "https://aadiyogacenter.com/wp-content/uploads/2024/04/1-11-2.png",
      category: "yogaRoom",
    },
    {
      url: "https://aadiyogacenter.com/wp-content/uploads/2024/04/1-11-2.png",
      category: "yogaRoom",
    },
    {
      url: "https://aadiyogacenter.com/wp-content/uploads/2024/04/1-11-2.png",
      category: "yogaClasses",
    },
    {
      url: "https://aadiyogacenter.com/wp-content/uploads/2024/04/1-11-2.png",
      category: "yogaClasses",
    },
  ];

  // State to hold the current category images
  const [filteredImages, setFilteredImages] = useState(
    allImages.filter((image) => image.category === "all")
  );

  // Function to filter images based on the selected category
  const filterImages = (category) => {
    const filtered = allImages.filter((image) => image.category === category);
    setFilteredImages(filtered);
  };

  return (
    <MainLayout>
      <section className="bg-gray-100 py-12 mt-[120px]">
        <h2 className="text-center text-4xl font-bold mb-8">Gallery</h2>
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-6 space-x-4">
            {/* Filter Buttons */}
            <button
              onClick={() => filterImages("all")}
              className="px-4 py-2 bg-heading text-white rounded-full"
            >
              All
            </button>
            <button
              onClick={() => filterImages("yogaRoom")}
              className="px-4 py-2 text-white bg-heading rounded-full"
            >
              Yoga Room
            </button>
            <button
              onClick={() => filterImages("yogaClasses")}
              className="px-4 py-2 text-white bg-heading rounded-full"
            >
              Yoga Classes
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Display filtered images */}
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500 ease-in-out"
              >
                {/* Image */}
                <img
                  src={image.url}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-72 object-cover transition-transform duration-500 hover:scale-110"
                />

                {/* Sliding Overlay Layer */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  {/* Custom Icon/Content */}
                  <div className="text-white text-center space-y-2">
                    <div className="text-3xl font-bold">Explore</div>
                    <p className="text-sm">Discover more details</p>
                  </div>
                </div>

                {/* Additional Animated Layer */}
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-pink-500 to-transparent opacity-0 hover:opacity-70 transition duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Contact/>
    </MainLayout>
  );
};

export default Gallery;
