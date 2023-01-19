import React from "react";

const Experience = () => {
  return (
    <div
      name="Experience"
      className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="w-1/2 sm:w-full h-1/2 md:h-full p-4 mx-auto flex flex-col justify-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
        </div>
        <div className="pb-8">
          <p className="text-2xl font-bold inline border-b-4 border-gray-500">
            Simrik Technologies Enterprieses(Apr 2020-Apr 2021)
          </p>
        </div>
        <p className="text-xl">
          <ol>
            <li>1.Responsible for Frontend webpage development using HTMl and CSS</li>
            <li>2.Responsible for creating wordpress sites with attractive design and functionality </li>
            <li>3.Learned the working mechanism of JS library called React js</li>
          </ol>
        </p>
      </div>
    </div>
  );
};

export default Experience;