import React from "react";
import gitFire from "../assets/portfolio/gitFire.png";
import textManipulator from "../assets/portfolio/textManipulator.png";
import todoApp from "../assets/portfolio/todoApp.png";
import funWithTraingle from "../assets/portfolio/funWithTraingle.png";
import minionTranslator from "../assets/portfolio/minionTranslator.png";
import cardRegister from "../assets/portfolio/cardRegister.png";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: gitFire,
      live:"https://git-fire-app.netlify.app/",
      source:"https://github.com/ansarynaim/git-fire-app",
    },
    {
      id: 2,
      src: textManipulator,
      live:"https://ansarynaim.github.io/Text-Manipulator/",
      source:"https://github.com/ansarynaim/Text-Manipulator",
    },
    {
      id: 3,
      src: todoApp,
      live:"https://ansarynaim.github.io/todo-context-api/",
      source:"https://github.com/ansarynaim/todo-context-api",
    },
    {
      id: 4,
      src: funWithTraingle,
      live:"https://fun-with-traingles92.netlify.app/",
      source:"https://github.com/ansarynaim/Fun-with-triangles",
    },
    {
      id: 5,
      src: minionTranslator,
      live:"https://minions-lang-translator92.netlify.app/",
      source:"https://github.com/ansarynaim/Minion-language-convertor",
    },
    {
      id: 6,
      src: cardRegister,
      live:"https://cash-register-manager92.netlify.app/",
      source:"https://github.com/ansarynaim/Cash-Register-Manager",
    },
  ];

  return (
    <div
      name="Projects"
      className="w-full h-full bg-gradient-to-b from-black to-gray-800  text-white ">
      <div className="w-1/2 sm:w-full h-1/2 md:h-full p-4 mx-auto flex flex-col justify-center items-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">The best way to learn something is to build and implement it.</p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,live,source }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={live}><button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Live
                </button></a>
                <a href={source}> <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Source
                </button></a>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;