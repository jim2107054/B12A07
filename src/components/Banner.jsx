import React from "react";
import vector1 from "../assets/vector1.png";

const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <section className="bg-gray-50 py-16 lg:py-20">
      <div className="max-w-6xl  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* In-Progress Card */}
          <div className="bg-gradient-to-br from-purple-700 to-purple-400 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-xl text-center font-medium mb-4">
                In-Progress
              </h2>
              <div className="text-6xl text-center font-bold">
                {inProgressCount}
              </div>
            </div>
            <div className="absolute top-0 right-0 w-full h-full">
              <img
                src={vector1}
                alt="Vector Design"
                className="absolute w-1/2 top-0 left-0 object-cover"
              />
              <img
                src={vector1}
                alt="Vector Design"
                className="absolute w-1/2 top-0 right-0 object-cover scale-x-[-1]"
              />
            </div>
          </div>

          {/* Resolved Card */}
          <div className="bg-gradient-to-br from-green-400 to-teal-700 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-xl text-center font-medium mb-4">Resolved</h2>
              <div className="text-6xl text-center font-bold">
                {resolvedCount}
              </div>
            </div>
            <div className="absolute top-0 right-0 w-full h-full">
              <img
                src={vector1}
                alt="Vector Design"
                className="absolute top-0 left-0 w-1/2 object-cover"
              />
              <img
                src={vector1}
                alt="Vector Design"
                className="absolute w-1/2 top-0 right-0 object-cover scale-x-[-1]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
