import React from "react";

const Contact = () => {
  return (
    <div
      name="Contact"
      className="w-full h-full bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="w-1/2 sm:w-full h-1/2 md:h-full flex flex-col p-4 justify-center  mx-auto">
        <div className="pb-8">
          <p className="pt-4 text-4xl font-bold inline border-b-4 border-gray-500">
            Contact Me
          </p>
          <p className="py-6">Leave the message here!!!</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/71bd9095-1325-4649-80af-e280b956e83b"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;