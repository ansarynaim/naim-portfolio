import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import bootstrap from "../assets/bootstrap.png";
import tailwind from "../assets/tailwind.png";
import reactImage from "../assets/react.png";
import wordpress from "../assets/wordpress.png";
import firebase from "../assets/firebase.png";
import github from "../assets/github.png";


const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: reactImage,
      title: "React JS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: wordpress,
      title: "Wordpress",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: firebase,
      title: "Firebase",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: github,
      title: "Github",
      style: "shadow-gray-400",
    }
  ];

  return (
    <div
      name="Skills"
      className="w-full h-full bg-gradient-to-b from-gray-800 to-black"
    >
      <div className="w-1/2 sm:w-full h-1/2 md:h-full mx-auto p-4 flex flex-col justify-center items-center text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I'm familiar with.</p>
        </div>

        <div className="w-full grid sm:grid-cols-1 md:grid-cols-3 gap-5 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;