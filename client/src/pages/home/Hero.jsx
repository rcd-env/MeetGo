import React from "react";
import { Keyboard, Video } from "lucide-react";

function Hero() {
  return (
    <div className="flex flex-col gap-4 lg:gap-6 lg:mt-16">
      <h2 className="text-2xl md:text-5xl">Meet. Talk. Do. Go.</h2>
      <h3 className="text-lg w-full md:w-3/4">
        Start or join a call in seconds, MeetGo makes connecting easy for teams,
        friends, and families.
      </h3>
      <div className="flex flex-col md:flex-row gap-4 md:items-center">
        <button className="flex gap-2 items-center bg-[#1A73E7] text-white px-4 py-2 rounded-full hover:bg-blue-500 transition order-2 lg:order-1">
          <Video /> New Meeting
        </button>
        <div className="flex items-center gap-4 order-1 lg:order-2">
          {" "}
          <div className="flex items-center border border-black rounded-2xl px-3 py-2 w-full focus-within:ring-2 focus-within:ring-blue-300">
            <Keyboard className="text-gray-500 w-5 h-5 mr-2" />
            <input
              type="text"
              placeholder="Enter a code or link"
              className="pl-2 flex-1 outline-none text-gray-700 placeholder-gray-400 bg-transparent"
            />
          </div>
          <p className="text-gray-500 ">Join</p>
        </div>
      </div>
      <hr className="md:w-3/4" />
    </div>
  );
}

export default Hero;
